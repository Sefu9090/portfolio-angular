import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    cards = []
    constructor() { }

    ngOnInit(): void {
        fetch('assets/data/project-info.json').then(res => res.json())
        .then(jsonData => {
          this.cards =jsonData.filter((x: { [x: string]: any; }) => x['showOnCarousel']);
        });
    }


    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;
    pauseOnFocus = true;

    @ViewChild('carousel', { static: true })
    carousel!: NgbCarousel;

    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        } else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }

    onSlide(slideEvent: NgbSlideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
            this.togglePaused();
        }
    }


    
}


