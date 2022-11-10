import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

    data = '<b class="is-visible">PYTHON.</b><b>SWIFT.</b><b>C++.</b><b>C#.</b><b>JAVA.</b><b>JAVASCRIPT.</b><b>HTML/CSS.</b><b>RUBY.</b><b>JQUERY.</b><b>ANGULAR.</b><b>REACT.</b><b>IONIC.</b>'
    cards = [
        {
            "name": "My Portfolio",
            "img": "assets/img/Portfolio.png",
            "imgAlt": "Screenshot of My Portfolio homepage",
            "link": "/Projects/portfolio",
            "discription": "Desgined with the goal of being my primary showcase of skill and experience, my Portfolio also reflects myself and my style.",
            "updated": "10/2022",
            "showOnCarousel": false
        },
        {
            "name": "Freelance Work",
            "img": "assets/img/Angular.png",
            "imgAlt": "Angular logo",
            "discription": "Commistioned projects built on the Angular framework. Designed works were prototyped in Figma",
            "updated": "10/2022",
            "showOnCarousel": false
        },
        {
            "name": "PMMC Marine Mammal Mania",
            "img": "assets/img/PMMC.png",
            "imgAlt": "Screenshot of main menu for Marine Mammal Mania",
            "link": "/Projects/PMMC",
            "discription": "Senior Capstone Project.",
            "updated": "06/2022",
            "showOnCarousel": true
        },
        
        {
            "name": "BULLET SHIPPING Game",
            "img": "assets/img/bulletshipping-landing.png",
            "imgAlt": "Main Title Page of Bullet Shipping",
            "link": "/Projects/125project",
            "discription": "First time designing a game from scratch. Our team used Unity and C# to create a 2D Bullet Hell Platformer that follows the Game design prinicples covered in the course.",
            "updated": "12/2022",
            "showOnCarousel": true
        },
        {
            "name": "Mgr. Peter",
            "img": "assets/img/Mgr.Peter_shopping.png",
            "imgAlt": "Screen Shot of Prototype Mgr.Peter",
            "link": "/Projects/134project",
            "discription": "Mgr. Peter is the result of a quarter long project for Informatics 134.",
            "updated": "10/2021",
            "showOnCarousel": false
        },
        {
            "name": "UCI Content Management System",
            "img": "assets/img/CMS.png",
            "imgAlt": "Screen Shot of Prototype CMS",
            "link": "/Projects/151project",
            "discription": "UC, Irvine: Content Management System is the result of a quarter long project for Informatics 151.",
            "updated": "--/2021",
            "showOnCarousel": true
        },
        {
            "name": "Music Notation",
            "img": "assets/img/Music-notation.png",
            "imgAlt": "Screen shot of iPad app Music Notation",
            "link": "/Projects/117project",
            "discription": "An iPad application designed to allow music creators new way to display / compose music and share it with musicians for live concerts",
            "updated": "--/2021",
            "showOnCarousel": true
        },
        {
            "name": "MobilityMaps",
            "img": "assets/img/MobilityMaps.png",
            "imgAlt": "Screen shot of mobile app MobilityMaps",
            "link": "/Projects/132project",
            "discription": "Designed to be an aid to people with mobility impairments. MobilityMaps is result of a quarter long project for Informatics 132. This app was created and developed using the design process from beginning to end.",
            "updated": "--/2021",
            "showOnCarousel": false
        },
        {
            "name": "Tip Calculator App",
            "img": "assets/img/tipCalculator.PNG",
            "imgAlt": "Screen Shot of App Tip Calculator",
            "discription": "This beginner app allowed me to get comformtable with Swift and using XCode. I also customized the appearence and functionallity to what is useful and appealing to me.",
            "updated": "--/2021",
            "showOnCarousel": false
        },
        {
            "name": "Flix",
            "img": "assets/img/Flix.gif",
            "imgAlt": "Screen shot of iPhone app Flix",
            "link": "/Projects/flix",
            "discription": "Flix is an app that allows users to browse movies from the The Movie Database API. Created as an assignment for CodePath.",
            "updated": "--/2021",
            "showOnCarousel": false
        },
        {
            "name": "Parstagram",
            "img": "assets/img/Parstagram.gif",
            "imgAlt": "Screen shot of iPhone app Parastagram",
            "link": "/Projects/Parstagram",
            "discription": "This is an Instagram clone with a custom Parse backend that allows a user to post photos, view a global photos feed, and add comments! Created as an assignment for CodePath.",
            "updated": "--/2021",
            "showOnCarousel": false
        },
        {
            "name": "Laundry Time",
            "img": "assets/img/LaundryTime.png",
            "imgAlt": "Screen Shot of App Laundry Time Prototype",
            "link": "/Projects/131project",
            "discription": "",
            "updated": "--/2021",
            "showOnCarousel": false
        },
        {
            "name": "Portfolio for Writing 37",
            "img": "assets/img/saul-wr37.png",
            "imgAlt": "Screen Shot of website Portfolio for Writing 37",
            "link": "/Projects/131project",
            "discription": "",
            "updated": "--/2021",
            "showOnCarousel": false
        }
    ];
    // cards:any;
    constructor() {

    }

    ngOnInit(): void {
        fetch('assets/data/project-info.json').then(res => res.json())
        .then(jsonData => {
          this.cards = jsonData;
        });
    }
}
