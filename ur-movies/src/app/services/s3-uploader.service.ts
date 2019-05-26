import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class S3UploaderService {

  constructor() { }

  private s3AccessKeyId = `${environment.s3AccessKeyId}`;
  private s3SecretAccessKey = `${environment.s3SecretAccessKey}`;


  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: this.s3AccessKeyId,
        secretAccessKey: this.s3SecretAccessKey,
        region: 'us-east-1'
      }
    );
    const params = {
      Bucket: 'ur-movie',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
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
