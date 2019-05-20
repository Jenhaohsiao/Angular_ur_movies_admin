import { Component, OnInit, ViewChild } from '@angular/core';
import { AdvertisingService } from '../advertising.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Advertising } from '../advertising.model';


@Component({
  selector: 'app-advertising-list',
  templateUrl: './advertising-list.component.html',
  styleUrls: ['./advertising-list.component.css']
})
export class AdvertisingListComponent implements OnInit {

  public displayedColumns: string[] = ['Id', 'title', 'description', 'startDate', 'endDate'];
  public errorMsg;
  public advertisingList = new MatTableDataSource<Advertising>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private _advertisingService: AdvertisingService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getList();
    this.advertisingList.paginator = this.paginator;

  }

  getList() {

    this._advertisingService.getAdvertisings()
      .subscribe(
        data => {
          this.advertisingList.data = data;
          this.advertisingList.sort = this.sort;

          console.log("this.advertisingList:", this.advertisingList)
        },

        error => {
          this.errorMsg = error,
            console.log("this.error:", this.errorMsg)
        }

      );
  }

  applyFilter(filterValue: string) {
    // this.advertisingList.filter = filterValue.trim().toLowerCase();

    // if (this.advertisingList.paginator) {
    //   this.advertisingList.paginator.firstPage();
    // }
  }


  createNew() {
    console.log("Create New")
    this._router.navigateByUrl('advertisings/new');
  }

  editItem(_item) {
    this._router.navigateByUrl('advertisings/' + _item._id + '/edit');
  }
}
