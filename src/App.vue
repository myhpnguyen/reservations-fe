<template>
  <header>
    <nav>
        <!-- Secondary Navigation inside <header> -->
              <div class="topnav">
                <a href="#home">Smokey's Barbeque </a>
                <button class="button-split" href="#login">Login/Register</button>
                <button class="button-split" href="#reserve">Reserve</button>
                <button class="button-split" href="#menu">Menu</button>
                <button class="button-split" href="#home">Home</button>
            </div>
    </nav>
</header>
  <div class="logo"></div>
  <!-- <img class="logo" :src="require('@/assets/logo.png')" style="display:block; margin-left: auto; margin-right: auto;"> -->

<div class="button-container">
  <!-- <button class="button">Menu</button> -->
  <a class="button" href="path-to-your-pdf.pdf" target="_blank">Menu</a>
  <button class="button">Photos</button>
  <button class="button">Reviews</button>
</div>

<!-- <img :src="require('@/assets/smokeys_menu.png')" class="card-img-top"> -->

</template>

<style>
/* Create a top navigation bar with a black background color  */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Create a right-aligned (split) link inside the navigation bar */
/* .topnav a.split {
  float: right;
  background-color: #aa3904;
  color: white;
} */

.logo {
  width: 100%;
  height: 0;
  padding-bottom: 30%;
  background-image: url('@/assets/logo2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.button-container {
  text-align: center; 
  margin-top: 20px; 
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color:#aa3904;
;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 5px;
  text-decoration: none;
  cursor: pointer;
}

.button-split {
  display: inline-block;
  padding: 10px 20px;
  background-color:#aa3904;
;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 5px;
  text-decoration: none;
  cursor: pointer;
  background-color: #aa3904;
  color: white;
  float: right;
}

.card-img-top {
  height: fit-content;
  width: fit-content;
}

</style>
