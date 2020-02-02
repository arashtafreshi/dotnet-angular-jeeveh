import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';

const API_URI: string = 'https://localhost:5001/api/images/upload/'

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  uploadIamge(files: FileList, projectName: string) {
    debugger;


    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append(files.item(i).name, files.item(i), files.item(i).name);
      const httpOptions = {
        headers: new HttpHeaders({
          //'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryePkpFF7tjBAqx29L',
          'content-disposition': 'form-data; name="'+files.item(i).name+'"'
        })
      };
      this.httpClient.post(API_URI + projectName, formData)
        .subscribe(event => {
          console.log(event);
        });
    }




    return
  }


}
