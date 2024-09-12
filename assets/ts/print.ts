/*--------------------------------------------------------------
 * TypeScript Scripts: Colour Scheme
 *----------------------------------------------------------------
 * Description: Controls for toggling the site colour scheme
 * 
 * Package: rgibsonmusic
*/

/**
 * Handle print button functionality
 */
export function handlePrint() {
    // Check for window loading
    if (window) {
        // Call Print function
        window.print();
    };
};