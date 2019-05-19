import { Component, OnInit } from '@angular/core';
import { AdvertisingService } from '../advertising.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertising-list',
  templateUrl: './advertising-list.component.html',
  styleUrls: ['./advertising-list.component.css']
})
export class AdvertisingListComponent implements OnInit {

  public advertisingList = [];
  public errorMsg;

  public displayedColumns: string[] = ['Id', 'title', 'description', 'startDate', 'endDate'];

  constructor(
    private _advertisingService: AdvertisingService,
    private _router: Router,
  ) { }

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

  createNew() {
    console.log("Create New")
    this._router.navigateByUrl('advertisings/new');
  }

  editItem(_item) {
    console.log("Edit Item:" + _item)
    this._router.navigateByUrl('advertisings/' + _item._id + '/edit');
  }
}
