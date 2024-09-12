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

// Upon load:
// Check for saved theme
detectTheme();
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
}