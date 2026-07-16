/*==================== LOADER ====================*/
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
    initParticles();
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
                    <svg viewBox="0 0 36 36" class="circular-chart"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path class="circle" stroke-dasharray="88, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><text x="18" y="20.35" class="percentage">8.78</text></svg>
                    <span class="cgpa-label">CGPA</span>
                </div>
                <div class="edu-text"><strong>MCA:</strong> <em>Vaagdevi Engineering College</em></div>
            </div>
            <div class="edu-item">
                <div class="cgpa-wrapper">
                    <svg viewBox="0 0 36 36" class="circular-chart"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path class="circle" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><text x="18" y="20.35" class="percentage">8.0</text></svg>
                    <span class="cgpa-label">CGPA</span>
                </div>
                <div class="edu-text"><strong>Degree:</strong> <em>University Arts and Science College</em></div>
            </div>
            <div class="edu-item">
                <div class="cgpa-wrapper">
                    <svg viewBox="0 0 36 36" class="circular-chart"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path class="circle" stroke-dasharray="96, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><text x="18" y="20.35" class="percentage">9.59</text></svg>
                    <span class="cgpa-label">CGPA</span>
                </div>
                <div class="edu-text"><strong>Intermediate:</strong> <em>NRI Junior College</em></div>
            </div>
            <div class="edu-item">
                <div class="cgpa-wrapper">
                    <svg viewBox="0 0 36 36" class="circular-chart"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path class="circle" stroke-dasharray="93, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><text x="18" y="20.35" class="percentage">9.3</text></svg>
                    <span class="cgpa-label">CGPA</span>
                </div>
                <div class="edu-text"><strong>SSC:</strong> <em>ZPPS High School</em></div>
            </div>
        `;
        box.classList.add('fade-in');
    }

    if (type === "experience") {
        box.style.display = "block";
        box.innerHTML = `
            <h3>Experience</h3>
            <div class="timeline">
                <!-- Timeline Item 1 -->
                <div class="timeline-item" tabindex="0">
                    <div class="timeline-header">
                        <h4 class="timeline-title">Auto Insurance Fraud Detection System</h4>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span class="timeline-year">2025</span>
                            <i class="bx bx-chevron-down timeline-chevron"></i>
                        </div>
                    </div>
                    <div class="timeline-subline">Software Development <span class="timeline-company">at Personal</span></div>
                    <div class="timeline-detail">
                        <p>Designed and implemented a machine learning application to identify potentially fraudulent insurance claims using historical claim data. The project involved data preprocessing, exploratory data analysis, feature engineering, model training, and performance evaluation. Multiple classification algorithms were tested to improve prediction accuracy, helping reduce false claims and support data-driven decision-making.</p>
                        <div class="timeline-tech">
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">Pandas</span>
                            <span class="tech-tag">NumPy</span>
                            <span class="tech-tag">Scikit-learn</span>
                            <span class="tech-tag">Matplotlib</span>
                            <span class="tech-tag">Flask</span>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 2 -->
                <div class="timeline-item" tabindex="0">
                    <div class="timeline-header">
                        <h4 class="timeline-title">AI-Powered Resume Screening and Ranking System</h4>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span class="timeline-year">2025</span>
                            <i class="bx bx-chevron-down timeline-chevron"></i>
                        </div>
                    </div>
                    <div class="timeline-subline">virtual internship <span class="timeline-company">from AICTE Microsoft</span></div>
                    <div class="timeline-detail">
                        <p>Developed an intelligent resume screening application that automates the recruitment process by analyzing and ranking resumes based on job requirements. The system leverages Natural Language Processing (NLP) and machine learning techniques to extract relevant skills, compare candidate profiles with job descriptions, and generate ranked results. This project demonstrates practical experience in AI-driven automation, data processing, and building efficient recruitment solutions.</p>
                        <div class="timeline-tech">
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">Flask</span>
                            <span class="tech-tag">Machine Learning</span>
                            <span class="tech-tag">NLP</span>
                            <span class="tech-tag">Pandas</span>
                            <span class="tech-tag">Scikit-learn</span>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 3 -->
                <div class="timeline-item" tabindex="0">
                    <div class="timeline-header">
                        <h4 class="timeline-title">Conversational Data Analysis</h4>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span class="timeline-year">2026</span>
                            <i class="bx bx-chevron-down timeline-chevron"></i>
                        </div>
                    </div>
                    <div class="timeline-subline">Data Analyst Intern <span class="timeline-company">at AICTE VOIS</span></div>
                    <div class="timeline-detail">
                        <p>Developed this project to transform raw data into meaningful insights that support informed decision-making. By performing data cleaning, preprocessing, exploratory data analysis (EDA), and visualization, the system identifies trends, patterns, and key performance indicators (KPIs). The project demonstrates how data can be converted into actionable insights to help organizations improve performance and make evidence-based decisions.</p>
                        <div class="timeline-tech">
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">Pandas</span>
                            <span class="tech-tag">NumPy</span>
                            <span class="tech-tag">Matplotlib</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        box.classList.add('fade-in');

        // Dynamic event binding for timeline items
        const timelineItems = box.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            item.addEventListener('click', () => {
                toggleTimelineDetail(item);
            });
            item.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleTimelineDetail(item);
                }
            });
        });
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

    // Scroll to the details box to automatically show details
    if (box && typeof box.scrollIntoView === 'function') {
        box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function toggleTimelineDetail(element) {
    const items = document.querySelectorAll('.timeline-item');
    const isActive = element.classList.contains('active');
    
    // Close all other items
    items.forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        element.classList.add('active');
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

function linkAction(e) {
    // Prevent closing if the clicked link is the dropdown toggle
    if (e.currentTarget.closest('.nav__dropdown')) {
        return;
    }
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('show-menu');
    }
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

const selectedTheme = localStorage.getItem('selected-theme');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

function updateThemeIcon() {
    if (!themeButton) return;
    if (document.body.classList.contains(darkTheme)) {
        themeButton.classList.add('bx-sun');
        themeButton.classList.remove('bx-moon');
    } else {
        themeButton.classList.add('bx-moon');
        themeButton.classList.remove('bx-sun');
    }
}

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    updateThemeIcon();
}

if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme);
        updateThemeIcon();
        localStorage.setItem('selected-theme', getCurrentTheme());
    });
}

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
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonHTML = submitButton ? submitButton.innerHTML : 'Send Message';
            
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = `Sending... <i class='bx bx-loader-alt bx-spin'></i>`;
                submitButton.style.opacity = '0.7';
                submitButton.style.cursor = 'not-allowed';
            }

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
                    let res = {};
                    try {
                        res = await response.json();
                    } catch (err) {
                        // ignore JSON parse error
                    }
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
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalButtonHTML;
                        submitButton.style.opacity = '';
                        submitButton.style.cursor = '';
                    }
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
const words = ["Full Stack Developer", "Python Developer", "Creative Coder"];
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

/*==================== CONNECTED DOTS BACKGROUND ====================*/
/*==================== CONNECTED DOTS BACKGROUND ====================*/
function initParticles() {
    const canvas = document.getElementById('dots-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const section = document.getElementById('home');
    if (!section) return;

    let width = canvas.width = section.offsetWidth;
    let height = canvas.height = section.offsetHeight;

    const particles = [];
    const maxParticles = 120;
    const connectionDist = 110;

    // Track theme changes to update color
    let particleColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#4f46e5';

    // Handle resize
    window.addEventListener('resize', () => {
        if (!section || !canvas) return;
        width = canvas.width = section.offsetWidth;
        height = canvas.height = section.offsetHeight;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 0.4 + 0.8; // Tiny, crisp dots (0.8px to 1.2px)
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Clamping position when bouncing to prevent vibration at limits during resize
            if (this.x < 0) {
                this.x = 0;
                this.vx *= -1;
            } else if (this.x > width) {
                this.x = width;
                this.vx *= -1;
            }
            if (this.y < 0) {
                this.y = 0;
                this.vy *= -1;
            } else if (this.y > height) {
                this.y = height;
                this.vy *= -1;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = particleColor;
            ctx.fill();
        }
    }

    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }

    // Optional mouse interaction
    let mouse = { x: null, y: null };
    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    section.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    let animationFrameId = null;
    let isIntersecting = false;

    function animate() {
        if (!isIntersecting) return;

        ctx.clearRect(0, 0, width, height);

        // Update color in case of theme toggle
        particleColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#4f46e5';

        // Draw and update particles
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDist) {
                    const alpha = (1 - dist / connectionDist) * 0.22;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    
                    let strokeColor;
                    if (particleColor.startsWith('hsl')) {
                        strokeColor = particleColor.replace(')', `, ${alpha})`).replace('hsl', 'hsla');
                    } else {
                        strokeColor = `rgba(79, 70, 229, ${alpha})`;
                    }
                    ctx.strokeStyle = strokeColor;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }

            // Connect to mouse
            if (mouse.x !== null && mouse.y !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDist + 30) {
                    const alpha = (1 - dist / (connectionDist + 30)) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    let strokeColor;
                    if (particleColor.startsWith('hsl')) {
                        strokeColor = particleColor.replace(')', `, ${alpha})`).replace('hsl', 'hsla');
                    } else {
                        strokeColor = `rgba(79, 70, 229, ${alpha})`;
                    }
                    ctx.strokeStyle = strokeColor;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    // Performance Optimization: Use IntersectionObserver to stop animations when canvas is offscreen
    if (typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    if (!animationFrameId) {
                        animationFrameId = requestAnimationFrame(animate);
                    }
                } else {
                    if (animationFrameId) {
                        cancelAnimationFrame(animationFrameId);
                        animationFrameId = null;
                    }
                }
            });
        }, { threshold: 0.05 });
        observer.observe(section);
    } else {
        // Fallback for older environments
        isIntersecting = true;
        animate();
    }
}

/*==================== ACCESSIBILITY KEYBOARD TRIGGERS ====================*/
function initAccessibility() {
    const keyboardButtons = document.querySelectorAll('[role="button"][tabindex="0"]');
    keyboardButtons.forEach(btn => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Initialize key down handlers
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccessibility);
} else {
    initAccessibility();
}

// Explicitly expose functions to window object for inline HTML event handlers (e.g. onclick) in module environments
if (typeof window !== 'undefined') {
    window.showAbout = showAbout;
    window.toggleTimelineDetail = toggleTimelineDetail;
    window.toggleDropdown = toggleDropdown;
}

// Exporting helper functions for testing in Node environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getCurrentTheme,
        updateThemeIcon,
        initAccessibility,
        initParticles,
        showAbout,
        toggleTimelineDetail
    };
}

