import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  @Input() sideNavStatus: boolean = false

  constructor(
    private router: Router
  ){}
  
  list = [
    {
      number: '1',
      name: 'prueba',
      icon: 'bi bi-house'
    },
    {
      number: '2',
      name: 'prueba 2',
      icon: 'bi bi-house'
    }
  ]

  ngOnInit(): void {
    
  }

  navegarRuta(ruta:any){
    this.router.navigate(['/layout/main/'+ruta]);
  }


}
