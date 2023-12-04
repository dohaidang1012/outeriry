const data = [
    {
        id: 1,
        name: "Nike Zoom KD 12",
        price: 99,
        image: "https://res.cloudinary.com/cloudidg/image/upload/v1685521149/Nike/Product/doi1_zxpenc.png"
    },
    {
        id: 2,
        name: "Nike Air Force 1 '07 LXX",
        price: 89,
        image: "https://res.cloudinary.com/cloudidg/image/upload/v1685521147/Nike/Product/doi2_qwplox.png"
    },
    {
        id: 3,
        name: "KD14 EP",
        price: 109,
        image: "https://res.cloudinary.com/cloudidg/image/upload/v1685521150/Nike/Product/doi3_t0pjvt.png"
    },
    {
        id: 4,
        name: "Air Jordan 6 Retro",
        price: 250,
        image: "https://res.cloudinary.com/cloudidg/image/upload/v1685521149/Nike/Product/doi4_cxxvcw.png"
    },
    {
        id: 5,
        name: "Nike Air More Uptempo '96",
        price: 200,
        image: "https://res.cloudinary.com/cloudidg/image/upload/v1685521148/Nike/Product/doi5_azcdhw.png"
    },
    {
        id: 6,
        name: "Nike Air Max 90",
        price: 160,
        image: "https://res.cloudinary.com/cloudidg/image/upload/v1685521147/Nike/Product/doi6_vylnlb.png"
    },
    {
        id: 7,
        name: "Nike Air Max Dawn",
        price: 160,
        image: "https://res.cloudinary.com/cloudidg/image/upload/v1685521148/Nike/Product/doi7_intwqk.png"
    },
    {
        id: 8,
        name: "Nike Offline 2.0 PRM",
        price: 140,
        image: "https://res.cloudinary.com/cloudidg/image/upload/v1685521147/Nike/Product/doi8_ukxsyn.png"
    },
  ];
  
  const list = document.querySelector(".product__list");    
  
  const renderList = () => {
    data.map((product) => renderItem(product));
  };
  
  const renderItem = (product) => {
    const productItem = document.createElement("div");
    productItem.className = "card";
    productItem.innerHTML = `
    <div class="card_heart">
      <i class="fa-regular fa-heart"></i>
    </div>
    <div class="card_cart">
      <i class="fa-solid fa-cart-shopping"></i>
    </div>
    <div class="card_img">
      <img
        src="${product.image}"
        alt="${product.name}"
      />
    </div>
    <div class="card_title">${product.name}</div>
    <div class="card_price">${product.price.toLocaleString()}</div>
    <div class="card_size">
      <h3>Size:</h3>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </div>
    <div class="card_color">
      <h3>Color:</h3>
      <span class="card_color--green"></span>
      <span class="card_color--red"></span>
      <span class="card_color--black"></span>
      <span class="card_color--yellow"></span>
    </div>
  `;
    list.appendChild(productItem);
  };
  
  renderList();


  // Swiper
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 40,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // Co dinh
  window.onscroll = function() {myFunction()};

var nav = document.getElementById("myNav");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}


// Auto play
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Back Top
const backtop = document.querySelector(".back-top")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100){
    backtop.classList.add("active");
  }else{
    backtop.classList.remove("active");
  }
})







