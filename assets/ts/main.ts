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