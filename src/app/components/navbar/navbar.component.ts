import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalSwitch: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }  

  btnClick() {
    this.router.navigateByUrl('/create-news');
  }

}
