/*--------------------------------------------------------------
 * TypeScript Scripts: Container Scroll
 *----------------------------------------------------------------
 * Description: Control scrolling container without scrolling body
 * 
 * Package: rgibsonmusic
*/

export function homepageScroll() {
    document.getElementById('intro')?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
};