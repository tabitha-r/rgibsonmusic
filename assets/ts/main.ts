/*--------------------------------------------------------------
 * TypeScript Scripts
 *----------------------------------------------------------------
 * Description: Load all relevant TypeScript functions and variables
 * 
 * Package: rgibsonmusic
*/

// Import functions and variables
import { detectTheme, toggleTheme } from './changeTheme';
import { hideNotice } from './hideNotice';
import { handlePrint } from './print';
import { determineNavType, toggleNav } from './mobileNav';
import { nextGalleryImage, prevGalleryImage } from './gallery';
import { homepageScroll } from './containerScroll';
import { generateContactPlaceholders, handleFormSubmitTest, handleNameChange, showThankYouMessage } from './contact';

// Upon load:
// Check for saved theme
detectTheme();
// Check for window width
window.onload = function() {
    determineNavType();
};

// Set up window resize event listener
window.addEventListener('resize', determineNavType);

// Target mobile nav button
const toggleNavButton = document.querySelector('#mobile-menu-button');
// Check button targeted correctly
if (toggleNavButton) {
    // Add toggle menu function event listener
    toggleNavButton.addEventListener('click', toggleNav);
};

// Target colour scheme toggle button
const toggleColourSchemeButton = document.querySelector('#toggle-colour-scheme');
// Check button targeted correctly
if (toggleColourSchemeButton) {
    // Add toggle function event listener
    toggleColourSchemeButton.addEventListener('click', toggleTheme);
};

// Target hide notice button
const hideDraftNoticeButton = document.querySelector('#hide-notice');
// Check button targeted correctly
if (hideDraftNoticeButton) {
    // Add hide function event listener
    hideDraftNoticeButton.addEventListener('click', hideNotice);
};

// Target print button
const printButton = document.querySelector('#print-page-button');
// Check button targeted correctly
if (printButton) {
    // Add print function event listener
    printButton.addEventListener('click', handlePrint);
};

// Target galleries
const galleryNextButtons = document.querySelectorAll('.gallery-control-button__next-img');
galleryNextButtons.forEach((button) => {
    button.addEventListener('click', nextGalleryImage);
});
const galleryPrevButtons = document.querySelectorAll('.gallery-control-button__prev-img');
galleryPrevButtons.forEach((button) => {
    button.addEventListener('click', prevGalleryImage);
});

document.addEventListener('DOMContentLoaded', () => {
    // Homepage scroll
    let homepageHero = document.getElementById('homepage-hero-scroll');
    if (homepageHero) {
        homepageHero.addEventListener('click', homepageScroll);
    }

    // Form test
    let form = document.getElementById('contact-form') as HTMLFormElement;
    if (form) {
        handleFormSubmitTest(form);
        generateContactPlaceholders();

        document.getElementById('contact-form__name-input').addEventListener('change', handleNameChange);
        
        const message = document.querySelector('#contact-success-message');
        if (message) {
            showThankYouMessage(message);
        }
    }
})