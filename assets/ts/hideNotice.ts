/*--------------------------------------------------------------
 * TypeScript Scripts: Hide Notice
 *----------------------------------------------------------------
 * Description: Temporary functionality to hide draft noticebar
 * 
 * Package: rgibsonmusic
*/

/**
 * Add the 'draft-warning__hidden' class to the #draft-warning-notice element
 */
export function hideNotice() {
    // Target site elements
    const noticebar = document.querySelector('#draft-warning-notice');

    // Check if elements targeted correctly
    if (noticebar) {

        // Add 'draft-warning__hidden' class to element
        noticebar.classList.add('draft-warning__hidden');
    };
};