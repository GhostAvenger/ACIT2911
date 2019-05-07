<template>
  <div id="app">
    <div class="container-fluid" >
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="Index.html">Game Name</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto w-100 justify-content-end">
            <a class="nav-link" href="photo.html">Gallery</a>
            <a class="nav-link" href="http://localhost:8081/">Message</a>
            <a class="nav-link" href="http://localhost:8080/sign_up">Register</a>
            <a class="nav-link" href="login.html">Login</a>
          </div>
        </div>
      </nav>
    </div>
    <router-view class="container"/>
  </div>
</template>

<style>
  h2{
    padding-top: 100px;

  }
  .navbar{
    background-color:#3c3c3c;
  }
  .search-container{
    float:right;
    text-align: right;
    padding-left:100px;
    padding-right: 100px;

  }

  .container-fluid{
    background-image: url("./images/background6.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height:auto;

  }


</style>
