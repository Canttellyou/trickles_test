import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  count = 1;
  constructor() {}

  ngOnInit(): void {}

}
