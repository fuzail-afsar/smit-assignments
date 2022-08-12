// Phones Colors
var colors = [
  "red",
  "black",
  "blue",
  "lightblue",
  "peachpuff",
  "white",
  "pink",
  "silver",
  "gray",
  "gold",
  "cyan",
  "seagreen",
  "teal",
];
var phones = {
  apple: {
    iphone13: new Phone(
      "iPhone 13",
      320999,
      "iphone-13.png",
      "Apple",
      null,
      true,
      "Single + eSim",
      "146.7 x 71.5 x 7.7 mm",
      "204 g",
      "IOS 15",
      "6.1 Inches",
      "1170 x 2532 Pixels",
      "256 GB",
      "8 GB",
      "No",
      "Apple A15 Bionic (5 nm)",
      "Apple GPU (4-core graphics)",
      "12 MP",
      "12 MP + 12MP"
    ),
    iphone13Pro: new Phone(
      "iPhone 13 Pro",
      372999,
      "iphone-13-pro.png",
      "Apple",
      null,
      true,
      "Single + eSim",
      "146.7 x 71.5 x 7.7 mm",
      "204 g",
      "IOS 15",
      "6.1 Inches",
      "1170 x 2532 Pixels",
      "256 GB",
      "8 GB",
      "No",
      "Apple A15 Bionic (5 nm)",
      "Apple GPU (8-core graphics)",
      "12 MP",
      "12 MP + 12MP + 12 MP"
    ),
    iphone11: new Phone(
      "iPhone 11",
      189999,
      "iphone-11.jpg",
      "Apple",
      null,
      true,
      "Single + eSim",
      "150.9 x 75.7 x 8.3 mm",
      "194 g",
      "iOS 13, upgradable to iOS 13.3",
      "6.1 Inches",
      "828 x 1792 Pixels",
      "128 GB",
      "4 GB",
      "No",
      "Apple A13 Bionic (7 nm+) Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
      "Apple GPU (4-core graphics)",
      "12 MP",
      "12 MP + 12MP"
    ),
  },
  samsung: {
    galaxyA03: new Phone(
      "Samsung Galaxy A03",
      26299,
      "galaxy-a03-red.jpg",
      "Samsung",
      {
        [colors[0]]: "galaxy-a03-red.jpg",
        [colors[1]]: "galaxy-a03-black.jpg",
        [colors[2]]: "galaxy-a03-blue.jpg",
      },
      false,
      "Dual Sim",
      null,
      null,
      "Android 11 OS",
      "6.5 Inches",
      "720 x 1600 Pixels",
      "32 GB",
      "3 GB",
      "microSD Card, (supports up to 1TB)",
      "Unisoc SC9863A",
      "PowerVR GE8322",
      "5 MP",
      "13 MP + 2MP + 2MP"
    ),
    galaxyA13: new Phone(
      "Samsung Galaxy A13",
      77999,
      "galaxy-a13-peach.jpg",
      "Samsung",
      {
        [colors[3]]: "galaxy-a13-lightblue.jpg",
        [colors[4]]: "galaxy-a13-peach.jpg",
        [colors[5]]: "galaxy-a13-white.jpg",
      },
      true,
      "Dual Sim",
      "165.1 x 76.4 x 8.8 mm",
      "195 g",
      "Android 12 OS",
      "6.6 Inches",
      "1080 x 2408 Pixels",
      "64 GB",
      "4 GB",
      "microSDXC (dedicated slot)",
      "Exynos 850",
      "Mali-G52 MP1",
      "8 MP",
      "50 MP + 5 MP + 2 MP + 2 MP"
    ),
    galaxyA33: new Phone(
      "Samsung Galaxy A33",
      38449,
      "galaxy-a33-blue.jpg",
      "Samsung",
      {
        [colors[1]]: "galaxy-a33-black.jpg",
        [colors[3]]: "galaxy-a33-blue.jpg",
        [colors[5]]: "galaxy-a33-white.jpg",
        [colors[6]]: "galaxy-a33-pink.jpg",
      },
      true,
      "Dual Sim",
      "74.0 x 159.7 x 8.1 mm",
      "186 g",
      "Android 12 OS",
      "6.4 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSD Card (Supports up to 1TB)",
      "2GHz Octa Core",
      null,
      "13 MP",
      "48 MP + 8 MP + 2 MP + 5 MP"
    ),
    galaxyA23: new Phone(
      "Samsung Galaxy A23",
      48999,
      "galaxy-a23-blue.jpg",
      "Samsung",
      {
        [colors[1]]: "galaxy-a23-black.jpg",
        [colors[3]]: "galaxy-a23-blue.jpg",
        [colors[4]]: "galaxy-a23-peach.jpg",
        [colors[5]]: "galaxy-a23-white.jpg",
      },
      true,
      "Dual Sim",
      "164.5 x 76.9 x 8.4 mm",
      "195 g",
      "Android 12 OS",
      "6.6 Inches",
      "1080 x 2408 Pixels",
      "126 GB",
      "6 GB",
      "microSD Card (Supports up to 1TB)",
      "Qualcomm SM6225 Snapdragon 680 4G(6 nm)",
      "Adreno 610",
      "8 MP",
      "50 MP + 5 MP + 2 MP + 2 MP"
    ),
    galaxyA53: new Phone(
      "Samsung Galaxy A53",
      48999,
      "galaxy-a23-blue.jpg",
      "Samsung",
      {
        [colors[1]]: "galaxy-a23-black.jpg",
        [colors[3]]: "galaxy-a23-blue.jpg",
        [colors[4]]: "galaxy-a23-peach.jpg",
        [colors[5]]: "galaxy-a23-white.jpg",
      },
      true,
      "Dual Sim",
      "164.5 x 76.9 x 8.4 mm",
      "195 g",
      "Android 12 OS",
      "6.6 Inches",
      "1080 x 2408 Pixels",
      "126 GB",
      "6 GB",
      "microSD Card (Supports up to 1TB)",
      "Qualcomm SM6225 Snapdragon 680 4G(6 nm)",
      "Adreno 610",
      "8 MP",
      "50 MP + 5 MP + 2 MP + 2 MP"
    ),
  },
  oppo: {
    oppoA96: new Phone(
      "Oppo A96",
      51799,
      "oppo-a96-blue.jpg",
      "Oppo",
      {
        [colors[1]]: "oppo-a96-black.jpg",
        [colors[3]]: "oppo-a96-blue.jpg",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
    oppoA16: new Phone(
      "Oppo A16",
      34699,
      "oppo-a16-lightblue.png",
      "Oppo",
      {
        [colors[3]]: "oppo-a16-lightblue.png",
        [colors[7]]: "oppo-a16-silver.png",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
  },
  realme: {
    realme9Pro: new Phone(
      "Realme 9 Pro",
      74499,
      "realme-9pro-lightblue.jpg",
      "Realme",
      {
        [colors[1]]: "realme-9pro-gray.jpg",
        [colors[3]]: "realme-9pro-lightblue.jpg",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
  },
  vivo: {
    vivoY55: new Phone(
      "Vivo Y55",
      52549,
      "vivo-y55-black.jpg",
      "Vivo",
      {
        [colors[1]]: "vivo-y55-black.jpg",
        [colors[3]]: "vivo-y55-white.jpg",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
    vivoX80: new Phone(
      "Vivo X80",
      158999,
      "vivo-x80-black.jpg",
      "Vivo",
      {
        [colors[1]]: "vivo-x80-black.jpg",
        [colors[3]]: "vivo-x80-lightblue.jpg",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
  },
  infinix: {
    infinixNote12: new Phone(
      "Infinix Note 12",
      40599,
      "infinix-note-12-gold.jpg",
      "Infinix",
      {
        [colors[1]]: "infinix-note-12-black.jpg",
        [colors[3]]: "infinix-note-12-lightblue.jpg",
        [colors[6]]: "infinix-note-12-gold.jpg",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
    infinixSmart6HD: new Phone(
      "Infinix Smart 6 HD",
      19899,
      "infinix-smart-6-hd-blue.gif",
      "Infinix",
      {
        [colors[1]]: "infinix-smart-6-hd-black.gif",
        [colors[2]]: "infinix-smart-6-hd-blue.gif",
        [colors[3]]: "infinix-smart-6-hd-lightblue.gif",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
  },
  itel: {
    itelA49: new Phone(
      "Itel A49",
      17399,
      "itel-a49-cyan.gif",
      "Itel",
      {
        [colors[1]]: "itel-a49-black.gif",
        [colors[10]]: "itel-a49-cyan.gif",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
    itelVision3: new Phone(
      "Itel Vision 3",
      19399,
      "itel-vision-3-blue.gif",
      "Itel",
      {
        [colors[1]]: "itel-vision-3-black.gif",
        [colors[2]]: "itel-vision-3-blue.gif",
        [colors[5]]: "itel-vision-3-white.gif",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
  },
  techno: {
    tecnoCamon19Neo: new Phone(
      "Tecno Camon 19 Neo",
      39299,
      "tecno-camon-19-neo-gray.jpg",
      "Techno",
      {
        [colors[3]]: "tecno-camon-19-neo-lightblue.jpg",
        [colors[8]]: "tecno-camon-19-neo-gray.jpg",
        [colors[11]]: "tecno-camon-19-neo-seagreen.jpg",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
  },
  xiaomi: {
    xiaomiRedmiNote11Pro: new Phone(
      "Xiaomi Redmi Note 11 Pro",
      58699,
      "xiaomi-redmi-note-11-pro-lightblue.jpg",
      "Xiaomi",
      {
        [colors[1]]: "xiaomi-redmi-note-11-pro-black.png",
        [colors[3]]: "xiaomi-redmi-note-11-pro-lightblue.jpg",
        [colors[5]]: "xiaomi-redmi-note-11-pro-white.jpg",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
  },
  dcode: {
    dcodeBold: new Phone(
      "Dcode Bold",
      22999,
      "dcode-bold-teal.jpg",
      "Dcode",
      {
        [colors[1]]: "dcode-bold-black.jpg",
        [colors[12]]: "dcode-bold-teal.jpg",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
  },
  microsoft: {
    microsoftSurfaceDuo: new Phone(
      "Microsoft Surface Duo",
      264949,
      "microsoft-surface-duo-black.jpg",
      "Microsoft",
      {
        [colors[1]]: "microsoft-surface-duo-black.jpg",
        [colors[5]]: "microsoft-surface-duo-white.jpg",
      },
      true,
      "Dual Sim",
      "159.9 x 73.2 x 7.5 mm",
      "171 g",
      "ColorOS 11.1",
      "6.43 Inches",
      "1080 x 2400 Pixels",
      "128 GB",
      "8 GB",
      "microSDXC",
      "Qualcomm Snapdragon 680",
      "Qualcomm Adreno GPU 610",
      "16 MP",
      "50 MP + 2 MP"
    ),
  },
};

var filteredPhones = {};

var assetsDirectory = "./assets/";
var imagesDirectory = assetsDirectory + "images/";
var phoneImagesDirectory = imagesDirectory + "phones/";

var phoneListingElem = document.getElementById("phone-listing");
var phoneListingRowElem = phoneListingElem.querySelector(".row");

var phoneCompaniesListingElem = document.querySelector(".phone-companies ul");

var toastElem = document.getElementById("toast");
var toastHeaderElem = toastElem.querySelector(".toast-header strong");
var toastBodyElem = toastElem.querySelector(".toast-body");
var toast = new bootstrap.Toast(toastElem);

init();

function init() {
  document.getElementById("year").innerHTML = new Date().getFullYear();
  setFilteredPhoneInitialValue();
  renderPhoneListing();
  renderAllPhoneCompanies();
}

function setFilteredPhoneInitialValue() {
  filteredPhones = Object.assign({}, phones);
}

// Generate Phones Data
function GeneralFeatures(
  SIM_Support,
  phoneDimensions,
  phoneWeight,
  operatingSystem
) {
  this.SIM_Support = SIM_Support;
  this.phoneDimensions = phoneDimensions;
  this.phoneWeight = phoneWeight;
  this.operatingSystem = operatingSystem;
}

function Display(screenSize, screenResolution) {
  this.screenSize = screenSize;
  this.screenResolution = screenResolution;
}

function Memory(internalMemory, RAM, cardSlot) {
  this.internalMemory = internalMemory;
  this.RAM = RAM;
  this.cardSlot = cardSlot;
}

function Performance(processor, GPU) {
  this.processor = processor;
  this.GPU = GPU;
}

function Camera(frontCamera, backCamera) {
  this.frontCamera = frontCamera;
  this.backCamera = backCamera;
}

function Phone(
  name,
  price,
  image,
  brand,
  colors,
  isPtaApproved,
  SIM_Support,
  phoneDimensions,
  phoneWeight,
  operatingSystem,
  screenSize,
  screenResolution,
  internalMemory,
  RAM,
  cardSlot,
  processor,
  GPU,
  frontCamera,
  backCamera
) {
  this.name = name;
  this.price = price;
  this.image = image;
  this.brand = brand;
  this.colors = colors;
  this.isPtaApproved = isPtaApproved;
  this.generalFeatures = new GeneralFeatures(
    SIM_Support,
    phoneDimensions,
    phoneWeight,
    operatingSystem
  );
  this.display = new Display(screenSize, screenResolution);
  this.memory = new Memory(internalMemory, RAM, cardSlot);
  this.performance = new Performance(processor, GPU);
  this.camera = new Camera(frontCamera, backCamera);
}

// Show Bootstrap Toast
function showToast(headerText, bodyText) {
  toastHeaderElem.innerHTML = headerText;
  toastBodyElem.innerHTML = bodyText;
  toast.show();
}

// Generate and render phone listing html
function generatePhoneListingItemHtml(phone) {
  var html = "<div class='col'>";
  html += "<div class='card text-center shadow-sm border-0 h-100'>";

  html += "<div class='position-relative overflow-hidden'>";
  html +=
    "<img src='" +
    phoneImagesDirectory +
    phone.image +
    "' class='card-img-top' alt='placeholder' />";

  if (phone.colors) {
    html += "<div class='colors'>";
    for (var color in phone.colors) {
      html +=
        "<div onmouseover='phoneColorMouseOverHandler(" +
        '"' +
        phone.colors[color] +
        '"' +
        ")' style='background-color: " +
        color +
        "'></div>";
    }
    html += "</div>";
  }

  html += "</div>";

  html += "<div class='card-body border-top'>";

  html += "<h5 class='card-title'><a href='#'>" + phone.name + "</a></h5>";
  html += "<p class='card-text'>Rs" + phone.price + "</p>";

  html += "</div>";

  html += "</div></div>";
  return html;
}

function renderPhoneListing() {
  var html = "";
  for (var companyKey in filteredPhones) {
    var company = filteredPhones[companyKey];
    for (var phoneKey in company) {
      html += generatePhoneListingItemHtml(company[phoneKey]);
    }
  }
  phoneListingRowElem.innerHTML = "";
  phoneListingRowElem.insertAdjacentHTML("beforeend", html);
}

// Generate and render phone's companies listing html
function generatePhoneCompanyListItemHtml(companyName) {
  var html = "<li class='list-group-item px-0'>";
  html +=
    "<a href='#' onclick='companyClickHandler(" +
    '"' +
    companyName +
    '"' +
    ")' class='text-decoration-none text-secondary text-capitalize caret-left'>";
  html += companyName;
  html += "</a>";
  html += "</li>";
  return html;
}

function renderAllPhoneCompanies() {
  var html = "";
  for (var company in phones) {
    html += generatePhoneCompanyListItemHtml(company);
  }
  phoneCompaniesListingElem.insertAdjacentHTML("beforeend", html);
}

// Show phones by their name
function searchPhoneByName(search = "") {
  filteredPhones = {};
  for (var companyKey in phones) {
    var company = phones[companyKey];
    for (var phoneKey in company) {
      var phoneName = company[phoneKey].name;
      var phoneNameLength = phoneName.length;

      for (var i = 0; i < phoneNameLength; i++) {
        if (
          search.toLowerCase() ===
          phoneName.slice(i, i + search.length).toLowerCase()
        ) {
          if (filteredPhones[companyKey]) {
            filteredPhones[companyKey][phoneKey] = company[phoneKey];
          } else {
            filteredPhones[companyKey] = { [phoneKey]: company[phoneKey] };
          }
        }
      }
    }
  }
  if (Object.keys(filteredPhones).length) return renderPhoneListing();
  setFilteredPhoneInitialValue();
  renderPhoneListing();
  return showToast("Oops!", "No phone found");
}

// Show Phones by their company
function searchPhoneByCompany(companyName) {
  setFilteredPhoneInitialValue();
  for (var companyKey in phones) {
    if (companyKey !== companyName) delete filteredPhones[companyKey];
  }
  renderPhoneListing();
}

// Event Handlers
function phoneColorMouseOverHandler(image) {
  var imageElem = event.target.parentElement.previousElementSibling;
  imageElem.src = phoneImagesDirectory + image;
}

function searchFormSubmitHandler() {
  event.preventDefault();
  var inputElem = event.target.getElementsByTagName("input")[0];
  searchPhoneByName(inputElem.value);
  inputElem.value = "";
}

function companyClickHandler(companyName) {
  event.preventDefault();
  searchPhoneByCompany(companyName);
}
