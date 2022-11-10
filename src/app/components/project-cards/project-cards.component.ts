import { Component, Input, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';


@Component({
    selector: 'app-project-cards',
    templateUrl: './project-cards.component.html',
    styleUrls: ['./project-cards.component.sass']
})
export class ProjectCardsComponent implements OnInit {
    @Input() cards: any;
    public _albums: any = [];

    constructor(private _lightbox: Lightbox) { }

    ngOnInit(): void {
        for (var card of this.cards) {
            console.log(card)
            const src = card.img;
            const caption = card.discription;
            const album = {
                src: src,
                caption: caption,
                thumb: src
            };
            this._albums.push(album);
        }
    }
    open(index: number): void { // open lightbox 
        this._lightbox.open(this._albums, index);
    }

    close(): void { // close lightbox programmatically 
        this._lightbox.close();
    }

}
