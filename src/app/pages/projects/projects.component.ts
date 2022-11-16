import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

    data = '<b class="is-visible">PYTHON.</b><b>SWIFT.</b><b>C++.</b><b>C#.</b><b>JAVA.</b><b>JAVASCRIPT.</b><b>HTML/CSS.</b><b>RUBY.</b><b>JQUERY.</b><b>ANGULAR.</b><b>REACT.</b><b>IONIC.</b>'
    cards_location = "assets/data/project-info.json"
    
    constructor() {
    }

    ngOnInit(): void {

    }
}
