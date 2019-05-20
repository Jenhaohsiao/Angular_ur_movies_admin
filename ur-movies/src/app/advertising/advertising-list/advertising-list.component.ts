import { Component, OnInit, ViewChild } from '@angular/core';
import { AdvertisingService } from '../advertising.service';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Advertising } from '../advertising.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-advertising-list',
  templateUrl: './advertising-list.component.html',
  styleUrls: ['./advertising-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdvertisingListComponent implements OnInit {

  public displayedColumns: string[] = ['Id', 'title', 'description', 'startDate', 'endDate'];

  public columnsToDisplay: string[] = ['title', 'startDate', 'endDate'];

  public errorMsg;
  public advertisingList = new MatTableDataSource<Advertising>();
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(
    private _advertisingService: AdvertisingService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getList();
    this.advertisingList.paginator = this.paginator;
    console.log("init advertisingList:", this.advertisingList)
  }




  getList() {

    this._advertisingService.getAdvertisings()
      .subscribe(
        data => {
          this.advertisingList.data = data;
          console.log("advertisingList:", this.advertisingList)
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

