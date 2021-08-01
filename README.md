
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://img-premium.flaticon.com/png/512/2383/premium/2383482.png?token=exp=1627813935~hmac=8a1f17288b4cda0f124066acecb88630" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">QlickIt</h1>

  <p align="center">
    A Complete Social Media App to share you selfies, and hackathon experiences with others globally.
    <br />
    <a href="https://github.com/Zeo-shark/Qlickit"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://qlickit.herokuapp.com/home">View Demo</a>
    ·
    <a href="https://github.com/Zeo-shark/Qlickit/issues">Report Bug</a>
    ·
    <a href="https://qlickit.herokuapp.com/home">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#keyfeatures">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#screenshots">Demo-Screenshots</a></li>
    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![](./assets/Application_1.PNG)](https://qlickit.herokuapp.com/home)

Hackathons. Pandemic. Lockdown. Somehow don’t relate,right? Except for virtual ones? Now,another challenge. Who to work with? Only options, being a beginner – use team building channels in Discord,Slack,etc. So far so good,only possibility being entirely unaware of the people who’re posting..how they But….WAIT!! What if, there’s a platform, essentially for hackathons?

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like teaming up with like minded people,hunting for the perfect team,etc.
* You should be able to team up with fellow hackers,without going through the hassles of requesting a teamup,talking about your tech stack,etc. :smile:

Hence,this social media platform. Just go through posts and works done by hackers earlier,and team up with the ones you like!

<!-- keyfeatures -->
## Key Features

- *Share Posts(Images, text, videos, JPG)* features with comments on posts features.
- In built comments based **Chat feature**.
- Prefernece based Home and Explore page preview.
- Built-in user profile dashboard showing key posts and comments.


### Built With

This section lists the major frameworks that we built our project using. 
* [React js](https://reactjs.org)
* [Google Cloud Platform](https://cloud.google.com/gcp/?utm_source=google&utm_medium=cpc&utm_campaign=japac-IN-all-en-dr-bkws-all-all-trial-e-dr-1009882&utm_content=text-ad-none-none-DEV_c-CRE_514666343194-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20GCP%20~%20General_%20Core%20Brand-KWID_43700060584985730-kwd-87853815-userloc_1007748&utm_term=KW_gcp-ST_gcp&gclid=CjwKCAjwjJmIBhA4EiwAQdCbxndFECTZrN43cQ3aS9f_epVoSJI2yYSpyoPZjPZT5TQqYmdFwFKmShoCQl8QAvD_BwE&gclsrc=aw.ds)
* [GCP-Firestore](https://firebase.google.com)
* [Firebase](https://console.firebase.google.com/u/0/)
* [HTML](https://www.html.com)
* [CSS](https://css.com)
* [JavaScript](https://www.javascript.com/)
* [JSON](https://json.org)
* [Canva Pro](https://www.canva.com)
* [Figma](https://www.figma.com)

### What it does
* We display our work during hackathons,post our selfies with the hacks we’re building. 
* The next time there is an event,some other newbie can go through it,interact with us and team up.
* An experienced hacker can refer it,see if there’s anyone working in their area of interest and socialise with them.
That's how simple it is!!

### How we built it?
* **Design prototype** - Canva pro, figma
* **The app** - ReactJs, HTML, CSS, JS, Nodejs, JSON.
* **Backend(Authentication, Database)** - Firebase Authentication, Google Cloud Firestore.
* **Storage**- Google Cloud Platform(Storage).

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

As a prequisites to run the app on local system you must have react Js installed along with firebase account.
* npm
  ```sh
  npm install -g react-js
  ```

### 

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   cd ./project_dir
   npm install
   npm start
   npm run build
   ```
4. To update the firebase Settings to your project update

    ```Js
    import firebase from "firebase";

    const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyDsSqWhn_DRX64CjQYzmloqI17ygm_gRmU",
        authDomain: "click-it-f99d2.firebaseapp.com",
        projectId: "click-it-f99d2",
        storageBucket: "click-it-f99d2.appspot.com",
        messagingSenderId: "565865071673",
        appId: "1:565865071673:web:af324bf2cf8baedd2a39e8",
        measurementId: "G-2JHN4G47PZ"
    });

    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const storage = firebase.storage();

    export { db, auth, storage };

    ```

<!-- SCREENSHOTS -->
## ScreenShots

You can directly view the Application from [here](https://qlickit.herokuapp.com/home).  
Few Screenshots of the demo prototype are below:




<!-- CONTRIBUTORS -->
## Contributors

1. [Indrashis Mitra](https://github.com/indrashismitra)
2. [Ankita Sahu](https://github.com/SAHU-01)
3. [Sourav Bera](https://github.com/Zeo-shark)








<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
