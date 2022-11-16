import { Component, Input, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';


@Component({
    selector: 'app-project-cards',
    templateUrl: './project-cards.component.html',
    styleUrls: ['./project-cards.component.sass']
})
export class ProjectCardsComponent implements OnInit {
    @Input() cards_location: any;
    cards_js = []
    public _albums: any = [];

    constructor(private _lightbox: Lightbox) { }

    ngOnInit(): void {
        fetch(this.cards_location).then(res => res.json())
        .then(jsonData => {
          this.cards_js = jsonData;
          for (var card of this.cards_js) {
            const src = card["img"];
            const caption = card["discription"];
            const album = {
                src: src,
                caption: caption,
                thumb: src
            };
            this._albums.push(album);
        }
        });
        
    }
    open(index: number): void { // open lightbox 
        this._lightbox.open(this._albums, index);
    }

    close(): void { // close lightbox programmatically 
        this._lightbox.close();
    }

}
