let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () =>{
    if(darkmode.classList.contains('bx-sun')){
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.add('color');
    }
    else{
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.remove('color');
    }
}

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

}
// serch

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }

// img

function img(anything) {
    document.querySelector('.slide').src = anything;
}
function change(change) {
    const line = document.querySelector('.home');
    line.computedStyleMap.background = change;
}
// slider

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls =['previous' , 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel{

    constructor(container, items , controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(e1 =>{
            e1.classList.remove('gallery-item-1');
            e1.classList.remove('gallery-item-2');
            e1.classList.remove('gallery-item-3');
            e1.classList.remove('gallery-item-4');
            e1.classList.remove('gallery-item-5');
        });
        this.carouselArray.slice(0, 5).forEach((e1 , i) => {
            e1.classList.add(`gallery-item-${i+1}`);
        });
    }
    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }
        else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className =`gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;

        });
    }
useControls(){
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach(control => {
        control.addEventListener('click', e =>{
            e.preventDefault();
            this.setCurrentState(control);
        });
    });
}

}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();



const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        MainImg.src = smallImg[i].src;
    }
    }




addtocart

document.addEventListener("DOMContentLoaded", function() {
   
    var addToCartButtons = document.querySelectorAll('.addcart');

   
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
   
            var product = this.closest('.pro');
            var productName = product.querySelector('.des span').textContent;
            var productPrice = product.querySelector('.des h4').textContent;

       
   
            console.log("Product Name: " + productName);
            console.log("Product Price: " + productPrice);

           
            alert(productName + " added to cart!");
        });
    });
});





//Update cart count

document.addEventListener('DOMContentLoaded', () => {
    // Get all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.addcart');
   
    // Get the cart count span in the navbar
    const cartCount = document.querySelector('.cartCount');
   
    // Initialize cart quantity
    let quantity = 0;
   
    // Add event listeners to all Add to Cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            quantity += 1;
            cartCount.textContent = quantity;
        });
    });
});



//Update cart count

document.addEventListener('DOMContentLoaded', () => {
    // Get all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.btn1');
   
    // Get the cart count span in the navbar
    const cartCount = document.querySelector('.btn1');
   
    // Initialize cart quantity
    let quantity = 0;
   
    // Add event listeners to all Add to Cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            quantity += 1;
            cartCount.textContent = quantity;
        });
    });
});







updateCartCountpdatecartcount
function updateCartCount() {
    let cartCount = document.querySelector('.cartCount');
    let count = parseInt(cartCount.textContent) || 0;
    cartCount.textContent = count + 1;
}

document.querySelectorAll('.addcart').forEach(button => {
    button.addEventListener('click', updateCartCount);
});


// Add items to the cart
function addToCart(event) {
    event.preventDefault();
    let item = {
        name: event.target.parentElement.querySelector('span').textContent,
        price: event.target.parentElement.querySelector('h4').textContent,
        image: event.target.parentElement.parentElement.querySelector('img').src
    };
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
}

document.querySelectorAll('.addcart').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Remove items from the cart
function removeFromCart(event) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let itemIndex = event.target.parentElement.parentElement.rowIndex - 1;
    cartItems.splice(itemIndex, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
    updateCartCount();
}

document.querySelectorAll('.far.fa-times-circle').forEach(button => {
    button.addEventListener('click', removeFromCart);
});

// Display cart items
function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartTableBody = document.querySelector('#cart tbody');
    cartTableBody.innerHTML = '';
    cartItems.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td><i class="far fa-times-circle"></i></td>
            <td><img src="${item.image}" alt=""></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><input type="number" value="1"></td>
            <td>${item.price}</td>
        `;
        cartTableBody.appendChild(row);
    });

    document.querySelectorAll('.far.fa-times-circle').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

document.addEventListener('DOMContentLoaded', displayCartItems);




// Proceed to checkout
function proceedToCheckout() {
    alert('Proceeding to checkout');
    localStorage.removeItem('cartItems');
    updateCartCount();
    displayCartItems();
}

document.querySelector('#subtotal button').addEventListener('click', proceedToCheckout);

applyCouponpplycoupon
function applyCoupon() {
    let couponInput = document.querySelector('#coupon input').value;
    if (couponInput === 'DISCOUNT10') {
        let subtotalElement = document.querySelector('#subtotal td:nth-child(2)');
        let subtotal = parseFloat(subtotalElement.textContent.replace('$', ''));
        let discount = subtotal * 0.1
        ;
    }
}

document.querySelector('#coupon button').addEventListener('click', applyCoupon);



if (bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        MainImg.src = smallImg[i].src;
    }
    }





ddtocart

document.addEventListener("DOMContentLoaded", function() {
    
    var addToCartButtons = document.querySelectorAll('.addcart');

    
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
    
            var product = this.closest('.pro');
            var productName = product.querySelector('.des span').textContent;
            var productPrice = product.querySelector('.des h4').textContent;

        
    
            console.log("Product Name: " + productName);
            console.log("Product Price: " + productPrice);

            
            alert(productName + " added to cart!");
        });
    });
});





updateCartCountpdatecartcount

document.addEventListener('DOMContentLoaded', () => {
    // Get all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.addcart');
    
    // Get the cart count span in the navbar
    const cartCount = document.querySelector('.cartCount');
    
    // Initialize cart quantity
    let quantity = 0;
    
    // Add event listeners to all Add to Cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            quantity += 1;
            cartCount.textContent = quantity;
        });
    });
});




//Update cart count

document.addEventListener('DOMContentLoaded', () => {
    // Get all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.btn1');
    
    // Get the cart count span in the navbar
    const cartCount = document.querySelector('.btn1');
    
    // Initialize cart quantity
    let quantity = 0;
    
    // Add event listeners to all Add to Cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            quantity += 1;
            cartCount.textContent = quantity;
        });
    });
});








updateCartCount
function updateCartCount() {
    let cartCount = document.querySelector('.cartCount');
    let count = parseInt(cartCount.textContent) || 0;
    cartCount.textContent = count + 1;
}

document.querySelectorAll('.addcart').forEach(button => {
    button.addEventListener('click', updateCartCount);
});



// Add items to the cart
function addToCart(event) {
    event.preventDefault();
    let item = {
        name: event.target.parentElement.querySelector('span').textContent,
        price: event.target.parentElement.querySelector('h4').textContent,
        image: event.target.parentElement.parentElement.querySelector('img').src
    };
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
}

document.querySelectorAll('.addcart').forEach(button => {
    button.addEventListener('click', addToCart);
});


// Remove items from the cart
function removeFromCart(event) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let itemIndex = event.target.parentElement.parentElement.rowIndex - 1;
    cartItems.splice(itemIndex, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
    updateCartCount();
}

document.querySelectorAll('.far.fa-times-circle').forEach(button => {
    button.addEventListener('click', removeFromCart);
});


// Display cart items
function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartTableBody = document.querySelector('#cart tbody');
    cartTableBody.innerHTML = '';
    cartItems.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td><i class="far fa-times-circle"></i></td>
            <td><img src="${item.image}" alt=""></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><input type="number" value="1"></td>
            <td>${item.price}</td>
        `;
        cartTableBody.appendChild(row);
    });

    document.querySelectorAll('.far.fa-times-circle').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

document.addEventListener('DOMContentLoaded', displayCartItems);





// Proceed to checkout
function proceedToCheckout() {
    alert('Proceeding to checkout');
    localStorage.removeItem('cartItems');
    updateCartCount();
    displayCartItems();
}

document.querySelector('#subtotal button').addEventListener('click', proceedToCheckout);



