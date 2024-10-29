/*--------------------------------------------------------------
 * TypeScript Scripts: Gallery Control
 *----------------------------------------------------------------
 * Description: Navigate through gallery component
 * 
 * Package: rgibsonmusic
*/

interface GalleryType {
    wrapper: HTMLElement;
    list: HTMLElement;
    length: Attr;
    position: Attr;
    baseWidth: Attr;
};

function findGallery(id: string): GalleryType {

    let list = document.getElementById(`${id}__list`);
    let wrapper = document.getElementById(`${id}`);

    let length = list.attributes.getNamedItem('data-length');
    let position = list.attributes.getNamedItem('data-position');
    let baseWidth = list.attributes.getNamedItem('data-base-width');

    return {
        wrapper,
        list,
        length,
        position,
        baseWidth
    };
}

function updateClasses(gallery: GalleryType, dir: 'next' | 'prev') {
    let position = parseInt(gallery.position.value);
    let length = parseInt(gallery.length.value);

    let wrapper = gallery.wrapper.classList;

    let startClass = 'gallery-wrapper__start';
    let endClass = 'gallery-wrapper__end';

    if (dir === 'prev' && position === 1) {
        wrapper.add(startClass);
    } else {
        wrapper.remove(startClass);
    };
    
    if (dir === 'next' && position === length) {
        wrapper.add(endClass);
    } else {
        wrapper.remove(endClass);
    };

}

export function nextGalleryImage(e: any) {
    let id = e.target.id.replaceAll('__next-img','').replaceAll('-icon','');

    let gallery = findGallery(id);

    updateClasses(gallery, 'next');

    if (parseInt(gallery.position.value) !== parseInt(gallery.length.value)) {
        gallery.position.value = (parseInt(gallery.position.value) + 1).toString();
        
        let translate = parseInt(gallery.position.value) * (parseInt(gallery.baseWidth.value) * 0.87);
        gallery.list.style.transform = `translateX(-${translate}px)`;
    };
}

export function prevGalleryImage(e: any) {
    let id = e.target.id.replaceAll('__prev-img','').replaceAll('-icon','');

    let gallery = findGallery(id);

    updateClasses(gallery, 'prev');

    if (parseInt(gallery.position.value) !== 0) {
        gallery.position.value = (parseInt(gallery.position.value) - 1).toString();
        
        let translate = parseInt(gallery.position.value) * (parseInt(gallery.baseWidth.value) * 0.87);
        gallery.list.style.transform = `translateX(-${translate}px)`;
    };
}