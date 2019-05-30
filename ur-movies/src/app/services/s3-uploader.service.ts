import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';

import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class S3UploaderService {

  constructor(
    private _snackBar: MatSnackBar,

  ) { }

  private s3AccessKeyId = `${environment.s3AccessKeyId}`;
  private s3SecretAccessKey = `${environment.s3SecretAccessKey}`;
  private snackBarDurationInSeconds = 2;
  private snackBarMessage = '';


  uploadFile(file) {

    this.snackBarMessage = "Image is uploading, please wait..."
    this._snackBar.open(this.snackBarMessage, null);

    return new Promise((resolve, reject) => {



      const contentType = file.type;
      const bucket = new S3(
        {
          accessKeyId: this.s3AccessKeyId,
          secretAccessKey: this.s3SecretAccessKey,
          region: 'us-east-1'
        }
      );

      const timeInMs = Date.now();
      const params = {
        Bucket: 'ur-movie',
        Key: timeInMs + "-" + file.name,
        Body: file,
        ACL: 'public-read',
        ContentType: contentType
      };

      bucket.upload(params, function (err, data) {
        if (err) {

          reject(err);
        }

        resolve(data.Location);
        // return true;
      }
      );

    })

    //for upload progress   
    /*bucket.upload(params).on('httpUploadProgress', function (evt) {
              console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
          }).send(function (err, data) {
              if (err) {
                  console.log('There was an error uploading your file: ', err);
                  return false;
              }
              console.log('Successfully uploaded file.', data);
              return true;
          });*/
  }


}
