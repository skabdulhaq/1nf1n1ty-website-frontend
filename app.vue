<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer></Footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;700&display=swap');


* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--black);
  color: var(--text-light);
  background-image: url('/images/background.webp');
  
}

html {
  font-size: 10px;
  overflow-x: hidden;
}

:root {
  --black: #000;
  --white: #fff;
  --text-dark: #000;
  --text-light: #fff;
  --text-secondary: #F5F5F5;
  --text-leftover: #ADADAD;
  --pink: #FF0054;
  --tint: #fafafa;
}

.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


@media (max-width: 768px) {
  html {
    font-size: 9px;
  }
}

@media (max-width: 640px) {
  html {
    font-size: 8px;
  }
}
@media (max-width: 500px) {
  html {
    font-size: 7px;
  }
}
@media (max-width: 400px) {
  html {
    font-size: 6px;
  }
}
</style>