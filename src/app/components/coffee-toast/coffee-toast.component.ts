import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-toast',
  templateUrl: './coffee-toast.component.html',
  styleUrls: ['./coffee-toast.component.sass']
})
export class CoffeeToastComponent implements OnInit {
    show = false;
	autohide = true;
  constructor() { }

  ngOnInit(): void {
  }

}



