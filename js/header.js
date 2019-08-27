function initSearchButton() {
    let searchBtn = document.getElementById("search_Button");
    let searchBar = document.getElementById("search_small");

    searchBtn.onclick = function () {
        searchBar.classList.toggle('is_active');
    }
}

function initResponsiveSidebarDropdowns() {
    if (window.outerWidth <= 768) {
        let menuContainer = document.getElementById('sidebarSubMenu');
        menuContainer.onclick = function (e) {
            let activeLabel = menuContainer.querySelector('.f_menuTitle.is_active');
            if (activeLabel) {
                activeLabel.classList.remove('is_active');
            }
            let target = e.target;
            if (target.classList.contains('f_menuTitle')) {
                target.classList.toggle('is_active');
            }

            console.log(e.target);
        }
    }
}


function close() {
    let closeMenu = document.getElementById('sidebarSubMenu');
    closeMenu.onclick = function () {

        console.log("apres")
    }
}


window.onload = function () {
    initSearchButton();
    initResponsiveSidebarDropdowns();
    close();
};
