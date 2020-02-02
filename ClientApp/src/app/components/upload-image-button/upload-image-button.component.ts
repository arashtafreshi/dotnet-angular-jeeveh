import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FileUploader } from "ng2-file-upload";
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload-image-button',
  templateUrl: './upload-image-button.component.html',
  styleUrls: ['./upload-image-button.component.css']
})
export class UploadImageButtonComponent implements OnInit {

  files:FileList;

  constructor(private uploadServ: UploadService) { }

  ngOnInit() {
  }

  onChange(files:FileList){
    this.files = files;
  }

  onSubmit(files:FileList) {
    debugger;
    if(typeof files === 'undefined') return;
    
    
    this.uploadServ.uploadIamge(files, 'p1');
  }

}
