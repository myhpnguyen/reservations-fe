<template>
  <div class="topnav">
  <a href="#home">Smokey's Barbeque </a>
  <a href="#login" class="split">Login/Register</a>
  <a href="#reserve" class="split">Reserve</a>
  <a href="#menu" class="split">Menu</a>
  <a href="#home" class="split">Home</a>
</div>
  <div class="logo"></div>
  <!-- <img class="logo" :src="require('@/assets/logo.png')" style="display:block; margin-left: auto; margin-right: auto;"> -->
  <!-- <img :src="require('@/assets/smokeys_menu.png')" class="card-img-top" style="width: auto; height: auto;"> -->
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
.topnav a.split {
  float: right;
  background-color: #aa3904;
  color: white;
}

.logo {
  width: 100%;
  height: 0;
  padding-bottom: 30%;
  background-image: url(http://localhost:8080/img/logo.89d83aa6.png);
  background-size: contain;
  background-position: 100% 100%;
  background-repeat: round;
}
</style>
