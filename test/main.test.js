// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

// Read index.html content to inject into JSDOM
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Portfolio Static Site JavaScript Logic Suite', () => {
    beforeEach(() => {
        // Reset Vitest module cache to allow fresh execution of main.js on each import
        vi.resetModules();

        // Setup clean JSDOM document
        document.documentElement.innerHTML = html.toString();
        
        // Mock window properties
        localStorage.clear();
        
        // Mock IntersectionObserver
        global.IntersectionObserver = vi.fn().mockImplementation(() => ({
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: vi.fn(),
        }));
    });

    it('should dynamically render the current year in the footer', async () => {
        const yearSpan = document.getElementById('year');
        expect(yearSpan.textContent).toBe('');
        
        // Import main.js to execute script
        await import('../js/main.js');

        expect(yearSpan.textContent).toBe(new Date().getFullYear().toString());
    });

    it('should successfully toggle between light and dark modes without duplicate classes', async () => {
        const themeButton = document.getElementById('theme-button');
        
        // Import main.js to bind listeners
        const module = await import('../js/main.js');

        // Initially light mode
        expect(document.body.classList.contains('dark-mode')).toBe(false);
        expect(themeButton.classList.contains('bx-moon')).toBe(true);
        expect(themeButton.classList.contains('bx-sun')).toBe(false);

        // Toggle to dark mode
        themeButton.click();
        expect(document.body.classList.contains('dark-mode')).toBe(true);
        expect(themeButton.classList.contains('bx-sun')).toBe(true);
        expect(themeButton.classList.contains('bx-moon')).toBe(false);

        // Toggle back to light mode
        themeButton.click();
        expect(document.body.classList.contains('dark-mode')).toBe(false);
        expect(themeButton.classList.contains('bx-moon')).toBe(true);
        expect(themeButton.classList.contains('bx-sun')).toBe(false);
    });

    it('should block double-submitting forms and disable buttons during fetch', async () => {
        // Mock API call to FormSubmit
        const fetchMock = vi.fn().mockReturnValue(
            new Promise((resolve) => setTimeout(() => {
                resolve({
                    status: 200,
                    json: () => Promise.resolve({ success: true })
                });
            }, 50))
        );
        global.fetch = fetchMock;

        await import('../js/main.js');

        const form = document.getElementById('contact-form');
        const submitButton = form.querySelector('button[type="submit"]');

        // Initially enabled
        expect(submitButton.disabled).toBe(false);

        // Fill out required form fields
        document.getElementById('name').value = 'Sairam';
        document.getElementById('email').value = 'sairam@example.com';
        document.getElementById('message').value = 'Looking to collaborate!';

        // Dispatch submit event
        const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(submitEvent);

        // Button should become disabled and show loading state
        expect(submitButton.disabled).toBe(true);
        expect(submitButton.innerHTML).toContain('Sending...');

        // Wait for API to resolve
        await vi.waitFor(() => {
            expect(submitButton.disabled).toBe(false);
        });
    });

    it('should toggle the mobile navigation drawer when toggled', async () => {
        await import('../js/main.js');

        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');

        expect(navMenu.classList.contains('show-menu')).toBe(false);

        // Open menu
        navToggle.click();
        expect(navMenu.classList.contains('show-menu')).toBe(true);

        // Close menu
        navClose.click();
        expect(navMenu.classList.contains('show-menu')).toBe(false);
    });

    it('should handle keyboard Enter and Space inputs on accessibility role buttons', async () => {
        await import('../js/main.js');

        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        expect(navMenu.classList.contains('show-menu')).toBe(false);

        // Focus and press Enter key
        const enterEvent = new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
        navToggle.dispatchEvent(enterEvent);
        expect(navMenu.classList.contains('show-menu')).toBe(true);

        // Close the menu
        const navClose = document.getElementById('nav-close');
        navClose.click();
        expect(navMenu.classList.contains('show-menu')).toBe(false);

        // Focus and press Space key
        const spaceEvent = new window.KeyboardEvent('keydown', { key: ' ', bubbles: true });
        navToggle.dispatchEvent(spaceEvent);
        expect(navMenu.classList.contains('show-menu')).toBe(true);
    });

    it('should render interactive experience timeline when showAbout is called with experience', async () => {
        const { showAbout, toggleTimelineDetail } = await import('../js/main.js');
        global.showAbout = showAbout;
        global.toggleTimelineDetail = toggleTimelineDetail;
        window.showAbout = showAbout;
        window.toggleTimelineDetail = toggleTimelineDetail;

        const detailsBox = document.getElementById('about-details');
        expect(detailsBox.style.display).toBe('none');

        // Trigger showAbout for experience
        window.showAbout('experience');

        // Should be displayed
        expect(detailsBox.style.display).toBe('block');

        // Should contain timeline
        const timeline = detailsBox.querySelector('.timeline');
        expect(timeline).not.toBeNull();

        // Should contain timeline items
        const items = detailsBox.querySelectorAll('.timeline-item');
        expect(items.length).toBe(3);

        // Items should be collapsed initially
        expect(items[0].classList.contains('active')).toBe(false);

        // Click first item to activate it
        items[0].click();
        expect(items[0].classList.contains('active')).toBe(true);

        // Click second item: first item should deactivate, second should activate
        items[1].click();
        expect(items[0].classList.contains('active')).toBe(false);
        expect(items[1].classList.contains('active')).toBe(true);

        // Keydown Enter should trigger toggle
        const enterEvent = new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
        items[0].dispatchEvent(enterEvent);
        expect(items[0].classList.contains('active')).toBe(true);
        expect(items[1].classList.contains('active')).toBe(false);
    });
});

