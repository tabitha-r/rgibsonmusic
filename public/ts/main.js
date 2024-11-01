(() => {
  // ns-hugo:D:\coding\rgibsonmusic\assets\ts\changeTheme.ts
  function detectTheme() {
    const site = document.querySelector("#site");
    const icon = document.querySelector("#theme-identifier-icon");
    const iconAlt = document.querySelector("#theme-identifier-icon__alt-span");
    if (site && icon) {
      if (localStorage.getItem("theme") === null) {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")) {
          site.classList.remove("theme__light");
          site.classList.add("theme__dark");
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");
          icon.ariaLabel = "Current theme is dark";
          localStorage.setItem("theme", "dark");
          iconAlt.innerHTML = "Current theme is dark";
          icon.setAttribute("title", "Current theme is dark");
        } else {
          localStorage.setItem("theme", "light");
        }
        ;
      } else if (localStorage.getItem("theme") === "dark") {
        site.classList.remove("theme__light");
        site.classList.add("theme__dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        icon.ariaLabel = "Current theme is dark";
        iconAlt.innerHTML = "Current theme is dark";
        icon.setAttribute("title", "Current theme is dark");
      }
      ;
    }
    ;
  }
  function toggleTheme() {
    const site = document.querySelector("#site");
    const icon = document.querySelector("#theme-identifier-icon");
    const iconAlt = document.querySelector("#theme-identifier-icon__alt-span");
    if (site && icon) {
      if (site.classList.contains("theme__dark")) {
        site.classList.remove("theme__dark");
        site.classList.add("theme__light");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        icon.ariaLabel = "Current theme is light";
        localStorage.setItem("theme", "light");
        iconAlt.innerHTML = "Current theme is light";
        icon.setAttribute("title", "Current theme is light");
      } else {
        site.classList.remove("theme__light");
        site.classList.add("theme__dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        icon.ariaLabel = "Current theme is dark";
        localStorage.setItem("theme", "dark");
        iconAlt.innerHTML = "Current theme is dark";
        icon.setAttribute("title", "Current theme is dark");
      }
      ;
    }
    ;
  }

  // ns-hugo:D:\coding\rgibsonmusic\assets\ts\hideNotice.ts
  function hideNotice() {
    const noticebar = document.querySelector("#draft-warning-notice");
    if (noticebar) {
      noticebar.classList.add("draft-warning__hidden");
    }
    ;
  }

  // ns-hugo:D:\coding\rgibsonmusic\assets\ts\print.ts
  function handlePrint() {
    if (window) {
      window.print();
    }
    ;
  }

  // ns-hugo:D:\coding\rgibsonmusic\assets\ts\mobileNav.ts
  function determineNavType() {
    const width = window?.innerWidth;
    const nav = document.querySelector("#main-nav");
    const icon = document.querySelector("#mobile-nav-identifier-icon");
    const iconAlt = document.querySelector("#mobile-nav-identifier-icon__alt-span");
    if (width <= 900) {
      if (nav?.classList.contains("main-nav__desktop")) {
        nav?.classList.remove("main-nav__desktop");
      }
      ;
      nav?.classList.add("main-nav__mobile");
      nav?.classList.add("main-nav__mobile__closed");
      nav.ariaExpanded = "false";
    } else {
      if (nav?.classList.contains("main-nav__mobile")) {
        nav?.classList.remove("main-nav__mobile");
        nav?.classList.remove("main-nav__mobile__closed");
        nav?.classList.remove("main-nav__mobile__open");
      }
      ;
      nav?.classList.add("main-nav__desktop");
      nav.ariaExpanded = "undefined";
    }
    ;
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
    iconAlt.innerHTML = "Open navigation menu";
    icon.setAttribute("title", "Open navigation menu");
  }
  function toggleNav() {
    const nav = document.querySelector("#main-nav");
    const button = document.querySelector("#mobile-menu-button");
    const icon = document.querySelector("#mobile-nav-identifier-icon");
    const iconAlt = document.querySelector("#mobile-nav-identifier-icon__alt-span");
    if (nav?.classList.contains("main-nav__mobile__closed")) {
      nav.classList.remove("main-nav__mobile__closed");
      nav.classList.add("main-nav__mobile__open");
      nav.ariaExpanded = "true";
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      button.classList.add("control-button__active");
      iconAlt.innerHTML = "Close navigation menu";
      icon.setAttribute("title", "Close navigation menu");
    } else {
      nav.classList.remove("main-nav__mobile__open");
      nav.classList.add("main-nav__mobile__closed");
      nav.ariaExpanded = "false";
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      button.classList.remove("control-button__active");
      iconAlt.innerHTML = "Open navigation menu";
      icon.setAttribute("title", "Open navigation menu");
    }
    ;
  }

  // ns-hugo:D:\coding\rgibsonmusic\assets\ts\gallery.ts
  function findGallery(id) {
    let list = document.getElementById(`${id}__list`);
    let wrapper = document.getElementById(`${id}`);
    let length = list.attributes.getNamedItem("data-length");
    let position = list.attributes.getNamedItem("data-position");
    let baseWidth = list.attributes.getNamedItem("data-base-width");
    return {
      wrapper,
      list,
      length,
      position,
      baseWidth
    };
  }
  function updateClasses(gallery, dir) {
    let position = parseInt(gallery.position.value);
    let length = parseInt(gallery.length.value);
    let wrapper = gallery.wrapper.classList;
    let startClass = "gallery-wrapper__start";
    let endClass = "gallery-wrapper__end";
    if (dir === "prev" && position === 1) {
      wrapper.add(startClass);
    } else {
      wrapper.remove(startClass);
    }
    ;
    if (dir === "next" && position === length) {
      wrapper.add(endClass);
    } else {
      wrapper.remove(endClass);
    }
    ;
  }
  function nextGalleryImage(e) {
    let id = e.target.id.replaceAll("__next-img", "").replaceAll("-icon", "");
    let gallery = findGallery(id);
    updateClasses(gallery, "next");
    if (parseInt(gallery.position.value) !== parseInt(gallery.length.value)) {
      gallery.position.value = (parseInt(gallery.position.value) + 1).toString();
      let translate = parseInt(gallery.position.value) * (parseInt(gallery.baseWidth.value) * 0.87);
      gallery.list.style.transform = `translateX(-${translate}px)`;
    }
    ;
  }
  function prevGalleryImage(e) {
    let id = e.target.id.replaceAll("__prev-img", "").replaceAll("-icon", "");
    let gallery = findGallery(id);
    updateClasses(gallery, "prev");
    if (parseInt(gallery.position.value) !== 0) {
      gallery.position.value = (parseInt(gallery.position.value) - 1).toString();
      let translate = parseInt(gallery.position.value) * (parseInt(gallery.baseWidth.value) * 0.87);
      gallery.list.style.transform = `translateX(-${translate}px)`;
    }
    ;
  }

  // ns-hugo:D:\coding\rgibsonmusic\assets\ts\containerScroll.ts
  function homepageScroll() {
    document.getElementById("intro")?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }

  // ns-hugo:D:\coding\rgibsonmusic\assets\ts\contact.ts
  function handleFormSubmitTest(form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      console.log({ name, email, message });
      window.location.replace(`/contact?success=true&name=${name}`);
    };
  }
  function cleanInput(str) {
    if (!str) return null;
    let temp = str.trim();
    return temp[0].toUpperCase() + temp.substring(1);
  }
  function showThankYouMessage(message) {
    const inputs = new URLSearchParams(window.location.search);
    if (inputs.get("success")) {
      message.classList.remove("contact-success-message__hidden");
      message.classList.add("contact-success-message__visible");
      const name = document.getElementById("contact-success-message__name");
      let newName = cleanInput(inputs.get("name"));
      name.textContent = newName;
    }
  }
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  function generateContactPlaceholders() {
    let contacts = [
      {
        name: "Ludwig van Beethoven",
        email: "luddy.b@hammerklavier.example"
      },
      {
        name: "Dmitri Shostakovich",
        email: "thenose@shostakovich.example"
      },
      {
        name: "\xC9liane Radigue",
        email: "elaineradigue32@adnos.example"
      },
      {
        name: "Daphne Oram",
        email: "oram.daphne@oramics.example"
      },
      {
        name: "Liza Lim",
        email: "liza_lim@crocodilestreet.example"
      }
    ];
    let messages = [
      "I would like to ask...",
      "What's your next project?",
      "Are you taking commissions?",
      "Would you like to work together?",
      "I wanted to know...",
      "I'm a fan of your works!"
    ];
    let contact = contacts[getRandomNumber(contacts.length - 1)];
    let message = messages[getRandomNumber(messages.length - 1)];
    let nameInput = document.getElementById("contact-form__name-input");
    let emailInput = document.getElementById("contact-form__email-input");
    let messageInput = document.getElementById("contact-form__message-input");
    nameInput.placeholder = contact.name;
    emailInput.placeholder = contact.email;
    messageInput.placeholder = message;
  }
  function handleNameChange(e) {
    const redirect = document.getElementById("contact-form__redirect");
    redirect.value = `${redirect.value}${e.target.value}`;
  }

  // <stdin>
  detectTheme();
  window.onload = function() {
    determineNavType();
  };
  window.addEventListener("resize", determineNavType);
  var toggleNavButton = document.querySelector("#mobile-menu-button");
  if (toggleNavButton) {
    toggleNavButton.addEventListener("click", toggleNav);
  }
  var toggleColourSchemeButton = document.querySelector("#toggle-colour-scheme");
  if (toggleColourSchemeButton) {
    toggleColourSchemeButton.addEventListener("click", toggleTheme);
  }
  var hideDraftNoticeButton = document.querySelector("#hide-notice");
  if (hideDraftNoticeButton) {
    hideDraftNoticeButton.addEventListener("click", hideNotice);
  }
  var printButton = document.querySelector("#print-page-button");
  if (printButton) {
    printButton.addEventListener("click", handlePrint);
  }
  var galleryNextButtons = document.querySelectorAll(".gallery-control-button__next-img");
  galleryNextButtons.forEach((button) => {
    button.addEventListener("click", nextGalleryImage);
  });
  var galleryPrevButtons = document.querySelectorAll(".gallery-control-button__prev-img");
  galleryPrevButtons.forEach((button) => {
    button.addEventListener("click", prevGalleryImage);
  });
  document.addEventListener("DOMContentLoaded", () => {
    let homepageHero = document.getElementById("homepage-hero-scroll");
    if (homepageHero) {
      homepageHero.addEventListener("click", homepageScroll);
    }
    let form = document.getElementById("contact-form");
    if (form) {
      handleFormSubmitTest(form);
      generateContactPlaceholders();
      document.getElementById("contact-form__name-input").addEventListener("change", handleNameChange);
      const message = document.querySelector("#contact-success-message");
      if (message) {
        showThankYouMessage(message);
      }
    }
  });
})();
