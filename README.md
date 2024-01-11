<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />
<div align="center">

<h3 align="center">Mission 5</h3>

  <p align="center">
    Build the prototype design provided by UX designers that runs in a docker container using node.js + MonogoDB.
    <br />
    <a href="https://github.com/nils-thevenard/Mission_5/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">No Demo Available</a>
    ·
    <a href="https://github.com/nils-thevenard/Mission_5/issues">Report Bug</a>
    ·
    
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A concept website for a real estate angency that allows users to search for properties by location and then filter based on various factors such as price, bedrooms, amenities etc. This project was made collaboratively with 2 other developers and 2 UX designers.

### Built With

- React JS
- MongoDB
- Express JS
- Docker

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

<h4>1. Clone repo.</h4>

```sh
gitclone https://github.com/nils-thevenard/Mission_5.git
```
<h4>2. Create a .env file for each directory and add your variables.</h4>

Server:
```sh
MONGOURI="mongodb://mongo:27017"
```
Client:
```sh
VITE_SERVER_URI=http://localhost:8001/
VITE_GOOGLE_MAPS_API_KEY=<YOUR_GOOGLE_MAPS_API_KEY>
```

<h4>3. Install packages for both client and server directorys.</h4>

```sh
npm i
```

<h4>4. From within the client directory, seed the database with the propertyData.json seed file</h4>

```sh
npm run seed
```

<h4>5. Run the backend and development server from client dir</h4>

```sh
npm run both
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: https://github.com/nils-thevenard/Mission_5/blob/main/src/assets/screenshot.jpg
[vite-url]: https://vitejs.dev/
[contributors-shield]: https://img.shields.io/github/contributors/nils-thevenard/Mission_5.svg?style=for-the-badge
[contributors-url]: https://github.com/nils-thevenard/Mission_5/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nils-thevenard/Mission_5.svg?style=for-the-badge
[forks-url]: https://github.com/nils-thevenard/Mission_5/network/members
[stars-shield]: https://img.shields.io/github/stars/nils-thevenard/Mission_5.svg?style=for-the-badge
[stars-url]: https://github.com/nils-thevenard/Mission_5/stargazers
[issues-shield]: https://img.shields.io/github/issues/nils-thevenard/Mission_5.svg?style=for-the-badge
[issues-url]: https://github.com/nils-thevenard/Mission_5/issues
[license-shield]: https://img.shields.io/github/license/nils-thevenard/Mission_5.svg?style=for-the-badge
[license-url]: https://github.com/nils-thevenard/Mission_5/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/windsor-sam/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwindcss-url]: https://tailwindcss.com
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
