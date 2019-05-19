import { Component, OnInit } from '@angular/core';
import { AdvertisingService } from '../advertising.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Advertising } from '../advertising.model';
import { FormBuilder, Form, Validators, FormGroup } from '@angular/forms';
import { instantiateDefaultStyleNormalizer } from '@angular/platform-browser/animations/src/providers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-advertising-detail',
  templateUrl: './advertising-detail.component.html',
  styleUrls: ['./advertising-detail.component.css']
})
export class AdvertisingDetailComponent implements OnInit {
  private id: string;
  private isEdit = false;
  private form: FormGroup;

  constructor(
    private _advertisingService: AdvertisingService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private fromBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.id = this._activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.isEdit = true;
      this.getDetail(this.id).subscribe(detail =>
        this.setDetail(detail)
      );
    }
  }

  private setDetail(detail: Advertising) {
    this.form.setValue({
      _id: detail._id,
      title: detail.title,
      description: detail.description,
      startDate: detail.startDate,
      endDate: detail.endDate
    });
  }

  getDetail(id: string): Observable<Advertising> {
    return this._advertisingService.getAdvertising(id);
  }

  back() {
    this._router.navigateByUrl('advertisings/list');
  }

  save() {
    console.log(this.form.value);
    if (this.isEdit) {
      this._advertisingService.updateAdvertising(this.form.value)
        .subscribe(() => {
          this.back();
        });
    } else {
      this._advertisingService.createAdvertising(this.form.value)
        .subscribe(() => {
          this.back();
        });
    }
  }

  private initForm(): void {
    this.form = this.fromBuilder.group({
      _id: '',
      title: ['', Validators.required],
      description: '',
      startDate: '',
      endDate: ''
    })
  }
}
