import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
    isHidden:boolean = true;
    constructor() { }

    ngOnInit(): void {
    }

    openModalAbout() {
        this.isHidden = false;
    }

    closeModalAbout() {
        this.isHidden = true;
    }

// document.addEventListener('keyup', function(e) {
//         if (e.key == "Escape") {
//             closeModalAbout();
//         }
//     });
}
