import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-design-concepts',
    templateUrl: './design-concepts.component.html',
    styleUrls: ['./design-concepts.component.sass']
})
export class DesignConceptsComponent implements OnInit {
    tempData = [
        {
            title: "Project 1",
            description: "Description for Project 1",
            active: "",
            icon: "bi bi-1-circle"
        },
        {
            title: "Project 2",
            description: "Description for Project 2",
            active: "",
            icon: "bi bi-2-circle"
        },
        {
            title: "Project 3",
            description: "Description for Project 3",
            active: "",
            icon: "bi bi-3-circle"
        },
        {
            title: "Project 4",
            description: "Description for Project 4",
            active: "",
            icon: "bi bi-4-circle"
        },
        {
            title: "Project 5",
            description: "Description for Project 5",
            active: "",
            icon: "bi bi-5-circle"
        }
    ];
    activeInt: number = 0;

    constructor() { }

    ngOnInit(): void {
        this.activate(this.activeInt)
    }

    activate(i: number) {
        this.tempData[this.activeInt]["active"] = "";
        this.tempData[i]["active"] = "active";
        this.activeInt = i;
    }

}
