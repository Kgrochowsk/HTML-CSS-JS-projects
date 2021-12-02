let firstTransform = true;
let secondTransform = true;
let thirdTransform = true;

function transformAbout() {
    let bio = document.getElementById("bio");
    let photo = document.getElementById("myPhoto");

    if (bio.style.transform === "none" && photo.style.transform === "none" || firstTransform) {
        bio.style.transform = "scale(1.2)";
        photo.style.transform = "scale(1.2)";
        firstTransform = false
    } else {
        bio.style.transform = "none";
        photo.style.transform = "none";
    }
}

function transformPortfolio() {
    let desc = document.getElementById("description");
    let logo = document.getElementById("github");

    if (desc.style.transform === "none" && logo.style.transform === "none" || secondTransform) {
        desc.style.transform = "scale(1.2)";
        logo.style.transform = "scale(1.2)";
        secondTransform = false
    } else {
        desc.style.transform = "none";
        logo.style.transform = "none";
    }
}

function transformContacts() {
    let p1 = document.getElementById("par1");
    let p2 = document.getElementById("par2");
    let p3 = document.getElementById("par3");

    if (p1.style.transform === "none" && p2.style.transform === "none" && p3.style.transform === "none" || thirdTransform) {
        p1.style.transform = "scale(1.2)";
        p2.style.transform = "scale(1.2)";
        p3.style.transform = "scale(1.2)";
        thirdTransform = false
    } else {
        p1.style.transform = "none";
        p2.style.transform = "none";
        p3.style.transform = "none";
    }
}

function openMenu() {
    let borgirMenu = document.getElementById("nav-menu")

    if (borgirMenu.style.transform === "translateY(0%)") {
        borgirMenu.style.transform = "translateY(100%)";
    } else {
        borgirMenu.style.transform = "translateY(0%)";
    }
}