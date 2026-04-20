/*==================== LOADER ====================*/
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
});

/*==================== ABOUT SECTION DYNAMIC CONTENT ====================*/
function showAbout(type) {
    const box = document.getElementById("about-details");

    // Removing old animation class to allow reflow and re-triggering of the same animation
    box.classList.remove('fade-in');
    void box.offsetWidth;

    if (type === "projects") {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        return;
    }

    if (type === "education") {
        box.style.display = "block";
        box.innerHTML = `
            <h3>Education Details</h3>
            <div class="edu-item">
                <div class="cgpa-wrapper">
                    <svg viewBox="0 0 36 36" class="circular-chart"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path class="circle" stroke-dasharray="93, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><text x="18" y="20.35" class="percentage">9.3</text></svg>
                    <span class="cgpa-label">CGPA</span>
                </div>
                <div class="edu-text"><strong>SSC:</strong> ZPPS High School</div>
            </div>
            <div class="edu-item">
                <div class="cgpa-wrapper">
                    <svg viewBox="0 0 36 36" class="circular-chart"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path class="circle" stroke-dasharray="96, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><text x="18" y="20.35" class="percentage">9.59</text></svg>
                    <span class="cgpa-label">CGPA</span>
                </div>
                <div class="edu-text"><strong>Intermediate:</strong> NRI Junior College</div>
            </div>
            <div class="edu-item">
                <div class="cgpa-wrapper">
                    <svg viewBox="0 0 36 36" class="circular-chart"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path class="circle" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><text x="18" y="20.35" class="percentage">8.0</text></svg>
                    <span class="cgpa-label">CGPA</span>
                </div>
                <div class="edu-text"><strong>Degree:</strong> University Arts and Science College</div>
            </div>
            <div class="edu-item">
                <div class="cgpa-wrapper">
                    <svg viewBox="0 0 36 36" class="circular-chart"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path class="circle" stroke-dasharray="88, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><text x="18" y="20.35" class="percentage">8.78</text></svg>
                    <span class="cgpa-label">CGPA</span>
                </div>
                <div class="edu-text"><strong>PG (MCA):</strong> Vaagdevi Engineering College</div>
            </div>
        `;
        box.classList.add('fade-in');
    }

    if (type === "experience") {
        box.style.display = "block";
        box.innerHTML = `
            <h3>Experience</h3>
            <p><strong>Fresher / Open Source Contributor</strong></p>
            <p>Passionate about building scalable web applications and contributing to the global developer community through open-source projects.</p>
        `;
        box.classList.add('fade-in');
    }

    // Dynamic placement for mobile vs desktop
    if (window.innerWidth <= 767) {
        const clickedBox = document.querySelector(`.about__box[onclick="showAbout('${type}')"]`);
        if (clickedBox) {
            clickedBox.insertAdjacentElement('afterend', box);
            box.style.marginTop = '0';
        }
    } else {
        const aboutData = document.querySelector('.about__data');
        if (aboutData) {
            aboutData.appendChild(box);
            box.style.marginTop = '2rem';
        }
    }
}

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-mode';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        const navItem = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (navItem) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItem.classList.add('active-link');
            } else {
                navItem.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== SCROLL REVEAL ANIMATION ====================*/
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        const elementBottom = reveals[i].getBoundingClientRect().bottom;

        if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal();

/*==================== CONTACT FORM SUBMISSION ====================*/
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {

        // As we are utilizing Web3Forms in HTML action handling, we allow default if no javascript prevents it entirely. 
        // But to make it asynchronous and avoid page reload, we intercept it using fetch.
        e.preventDefault();

        const checkValid = contactForm.checkValidity();
        if (checkValid) {
            formMessage.textContent = 'Sending email...';
            formMessage.className = 'form-message';
            formMessage.style.display = 'block';

            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            })
                .then(async (response) => {
                    const res = await response.json();
                    if (response.status == 200) {
                        formMessage.textContent = 'Message sent successfully! We will get back to you soon.';
                        formMessage.className = 'form-message success';
                        contactForm.reset();
                    } else {
                        formMessage.textContent = res.message || 'Something went wrong!';
                        formMessage.className = 'form-message error';
                    }
                })
                .catch((error) => {
                    formMessage.textContent = 'Something went wrong!';
                    formMessage.className = 'form-message error';
                })
                .finally(() => {
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                        formMessage.className = 'form-message';
                    }, 5000);
                });
        }
    });
}

/*==================== SET CURRENT YEAR IN FOOTER ====================*/
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/*==================== NAV DROPDOWN ====================*/
function toggleDropdown(e) {
    e.preventDefault();
    const dropdown = document.getElementById('nav-more');
    dropdown.classList.toggle('show-dropdown');
}

// Close dropdown when clicking outside
window.addEventListener('click', function (e) {
    const dropdown = document.getElementById('nav-more');
    if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show-dropdown');
    }
});

// For mobile, when clicking a dropdown item, close the menu
const dropdownItems = document.querySelectorAll('.nav__dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) navMenu.classList.remove('show-menu');
        const dropdown = document.getElementById('nav-more');
        if (dropdown) dropdown.classList.remove('show-dropdown');
    });
});

/* Removed LOADING CLICK EFFECT as per user request */

/*==================== DYNAMIC TYPING EFFECT ====================*/
const typingTextElement = document.querySelector('.typing-text-container');
const words = ["Full Stack Developer", "Python Enthusiast", "Creative Coder"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let typeDelay = 80;

function type() {
    if (!typingTextElement) return;
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingTextElement.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
        typeDelay = 30;
    } else {
        typingTextElement.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
        typeDelay = 80;
    }

    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        typeDelay = 1500;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeDelay = 300;
    }
    setTimeout(type, typeDelay);
}
if (typingTextElement) {
    setTimeout(type, 1000);
}

/*==================== SCROLL PROGRESS BAR ====================*/
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollData = `${(totalScroll / windowHeight) * 100}%`;
        progressBar.style.width = scrollData;
    }
});

/*==================== CERTIFICATIONS SLIDER ====================*/
const certSlider = document.querySelector('.certificate-slider');
if (certSlider) {
    let scrollAmount = 1;
    let isSliderPaused = false;

    const autoScrollCertifications = () => {
        if (!isSliderPaused) {
            certSlider.scrollLeft += scrollAmount;
            
            // Reversing logic when reaching ends
            if (certSlider.scrollLeft >= parseInt(certSlider.scrollWidth - certSlider.clientWidth) - 1) {
                scrollAmount = -1; // Change direction to left
            } else if (certSlider.scrollLeft <= 0) {
                scrollAmount = 1; // Change direction to right
            }
        }
    };

    // Set scroll interval
    let sliderInterval = setInterval(autoScrollCertifications, 25);

    // Pause on interaction
    certSlider.addEventListener('mouseenter', () => isSliderPaused = true);
    certSlider.addEventListener('mouseleave', () => {
        isSliderPaused = false;
        // Reset direction if stuck at borders during manual scroll
        if (certSlider.scrollLeft <= 0) scrollAmount = 1;
        if (certSlider.scrollLeft >= (certSlider.scrollWidth - certSlider.clientWidth)) scrollAmount = -1;
    });
    
    certSlider.addEventListener('touchstart', () => isSliderPaused = true);
    certSlider.addEventListener('touchend', () => {
        // Resume scrolling after 1 second of releasing touch
        setTimeout(() => {
            isSliderPaused = false;
            if (certSlider.scrollLeft <= 0) scrollAmount = 1;
            if (certSlider.scrollLeft >= (certSlider.scrollWidth - certSlider.clientWidth)) scrollAmount = -1;
        }, 1000);
    });

    // Handle view certificate clicks smoothly without jumping scroll
    const certLinks = certSlider.querySelectorAll('.cert__link');
    certLinks.forEach(link => {
        link.addEventListener('click', () => {
            isSliderPaused = true;
        });
    });
}

/*==================== DOWNLOAD RESUME ANIMATION ====================*/
const downloadBtns = document.querySelectorAll('.dl-resume-btn');

downloadBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Prevent multiple clicks while animation is running
        if (this.classList.contains('is-downloading')) {
            e.preventDefault();
            return;
        }

        const originalText = this.innerHTML;
        this.classList.add('is-downloading');
        
        // Disable pointer events temporarily
        this.style.pointerEvents = 'none';

        // Stage 1: Downloading state with animated down arrow
        this.innerHTML = `Downloading... <i class='bx bx-download bx-fade-down'></i>`;

        // Stage 2: Complete state with Green Checkmark
        setTimeout(() => {
            this.innerHTML = `Complete! <i class='bx bx-check-circle'></i>`;
            
            // Apply inline styles to make it prominently green temporarily
            this.style.color = "#22c55e"; // Green text color
            if (this.classList.contains('button')) {
                this.dataset.oldBorder = this.style.borderColor || "";
                this.style.borderColor = "#22c55e";
            }
            if (this.classList.contains('button--primary')) {
                this.dataset.oldBg = this.style.backgroundColor || "";
                this.style.backgroundColor = "rgba(34, 197, 94, 0.15)";
            }

            // Stage 3: Revert completely to original state after 2.5 seconds
            setTimeout(() => {
                this.innerHTML = originalText;
                this.classList.remove('is-downloading');
                this.style.pointerEvents = 'auto';
                
                // Remove temporary styles
                this.style.color = "";
                if (this.classList.contains('button')) {
                    this.style.borderColor = this.dataset.oldBorder;
                }
                if (this.classList.contains('button--primary')) {
                    this.style.backgroundColor = this.dataset.oldBg;
                }
            }, 2500);

        }, 3000); // Wait 3 seconds for the "downloading" phase
    });
});
