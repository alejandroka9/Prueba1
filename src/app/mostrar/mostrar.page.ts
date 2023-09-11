import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.page.html',
  styleUrls: ['./mostrar.page.scss'],
})
export class MostrarPage implements OnInit {
  scannedData: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      const rawData = params.get('data');
      if (rawData) {
        this.scannedData = JSON.parse(decodeURIComponent(rawData));
      } else {
        console.error('No se encontraron datos en la URL.');
      }
    });

  }

}
