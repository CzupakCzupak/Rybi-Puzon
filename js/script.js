const splideHero = new Splide(".splide-hero", {
  arrows: false,
  autoplay: true,
  interval: 3000,
  type: "loop",
});

splideHero.mount();

const splideGallery = new Splide(".splide-gallery", {
  arrows: false,
  pagination: false,
  autoplay: true,
  interval: 3000,
  type: "loop",
  autoWidth: true,
  gap: "24px",
  focus: "center",
});

splideGallery.mount();

const menuBtns = document.querySelectorAll(".btn-menu-js");
const menuLists = document.querySelectorAll(".menu__list");

menuBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    menuLists.forEach((item) => {
      item.classList.remove("is-active");
    });

    menuBtns.forEach((item) => {
      item.classList.remove("is-active");
    });

    const clickedBtn = e.target;
    const clickedBtnVal = e.target.dataset.menu;
    clickedBtn.classList.add("is-active");

    const menuList = document.querySelector(`[data-list="${clickedBtnVal}"]`);

    menuList.classList.add("is-active");
  });
});

let map = L.map("map").setView([52.4718114, 16.6422537], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

let greenIcon = L.icon({
  iconUrl: "../img/pin.png",

  iconSize: [76, 93], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [15, -76], // point from which the popup should open relative to the iconAnchor
});

L.marker([52.4718114, 16.6422537], { icon: greenIcon }).addTo(map).bindPopup("Tarnowo 16, 64-930 Tarnowo");
