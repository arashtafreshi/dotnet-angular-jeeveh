import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URI:string = 'https://localhost:5001/api/images/upload/'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient:HttpClient) { }

  uploadIamge(images:any, projectName:string){
    return this.httpClient.post(API_URI+projectName, images);
  }


}
