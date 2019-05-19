import { Component, OnInit } from '@angular/core';
import { AdvertisingService } from '../advertising.service';

@Component({
  selector: 'app-advertising-list',
  templateUrl: './advertising-list.component.html',
  styleUrls: ['./advertising-list.component.css']
})
export class AdvertisingListComponent implements OnInit {

  public advertisingList = [];
  public errorMsg;

  public displayedColumns: string[] = ['_id', 'title', 'description', 'startDate', 'endDate'];


  constructor(private _advertisingService: AdvertisingService) { }

  ngOnInit() {
    this.getList()
  }

  getList() {
    this._advertisingService.getAdvertisings()
      .subscribe(
        data => {
          this.advertisingList = data
          console.log("this.advertisingList:", this.advertisingList)
        },

        error => {
          this.errorMsg = error,
            console.log("this.error:", this.errorMsg)
        }

      );

  }

}
