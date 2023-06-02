import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  @Input() sideNavStatus: boolean = false
  
  list = [
    {
      number: '1',
      name: 'home',
      icon: 'bi bi-house'
    },
    {
      number: '2',
      name: 'home',
      icon: 'bi bi-house'
    }
  ]

  ngOnInit(): void {
    
  }


}
