import {load} from '@shopify/theme-sections';
import '../sections/product';

load('*');

function dropDownOver (){
    document.getElementById('mega-drop-down').style.display = 'inline-block';
    document.getElementById('overlay-main').style.display = 'block';
}

function dropDownOut (){
    document.getElementById('mega-drop-down').style.display = 'none';
    document.getElementById('overlay-main').style.display = 'none';
}

function mobileMenuOpen (){
    document.getElementById('mobile-drop-down').style.display = 'block';
    document.getElementById("mobile-button").src = "x_mobile.svg";
    document.getElementById('mobile-button').style.marginTop = '25px';
    document.getElementById('mobile-button').style.marginRight = '5px';
    document.getElementById('mobile-cart').style.display = 'none';
    document.getElementById('mobile-turn-off').style.display = 'none';
    document.getElementById("mobile-button").onclick = mobileMenuClose;
}

function mobileMenuClose (){
    document.getElementById('mobile-drop-down').style.display = 'none';
    document.getElementById("mobile-button").src = "menu.svg";
    document.getElementById('mobile-button').style.marginTop = '20px';
    document.getElementById('mobile-button').style.marginRight = '0px';
    document.getElementById('mobile-cart').style.display = 'inline-block';
    document.getElementById("mobile-button").onclick = mobileMenuOpen;
    document.getElementById('mobile-turn-off').style.display = 'block';
}