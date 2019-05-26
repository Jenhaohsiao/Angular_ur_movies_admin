import { Component, OnInit } from '@angular/core';
import { AdvertisingService } from '../advertising.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Advertising } from '../advertising.model';
import { FormBuilder, Form, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { S3UploaderService } from 'src/app/services/s3-uploader.service';

@Component({
  selector: 'app-advertising-detail',
  templateUrl: './advertising-detail.component.html',
  styleUrls: ['./advertising-detail.component.css']
})
export class AdvertisingDetailComponent implements OnInit {
  private id: string;
  private isEdit = false;
  public selectedFiles: FileList;
  public form: FormGroup;

  constructor(
    private _advertisingService: AdvertisingService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private fromBuilder: FormBuilder,
    private S3UploaderService: S3UploaderService
  ) { }

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
      endDate: detail.endDate,
      imageUrl: detail.imageUrl,
    });
  }

  getDetail(id: string): Observable<Advertising> {
    return this._advertisingService.getAdvertising(id);
  }

  back() {
    this._router.navigateByUrl('advertisings/list');
  }

  save() {
    console.log("save:", this.form.value);
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
      endDate: '',
      imageUrl: '',
    })
  }

  async upload() {
    const file = this.selectedFiles.item(0);
    const URL = await this.S3UploaderService.uploadFile(file);
    console.log("After upload, URL:", URL);
    this.form.value.imageUrl = URL;
    console.log("this.form.value.imageUrl:", this.form.value.imageUrl)

  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


}
