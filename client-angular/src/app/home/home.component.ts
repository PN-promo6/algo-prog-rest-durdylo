import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getAlbums();
    this.dataService.getConcertTours();
    this.dataService.getLabels();
    this.dataService.getMembers();

  }

}
