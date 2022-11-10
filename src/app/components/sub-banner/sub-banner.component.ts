import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-sub-banner',
    templateUrl: './sub-banner.component.html',
    styleUrls: ['./sub-banner.component.sass']
})
export class SubBannerComponent implements OnInit {
    @Input() full:boolean = false;
    @Input() data:any;

    constructor() {
    }

    ngOnInit(): void {
    }
}
