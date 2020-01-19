import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {FileUploader} from "ng2-file-upload";
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload-image-button',
  templateUrl: './upload-image-button.component.html',
  styleUrls: ['./upload-image-button.component.css']
})
export class UploadImageButtonComponent implements OnInit {

  fileData: File = null;

  constructor(private uploadServ:UploadService) { }

  ngOnInit() {
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
}
 
onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.uploadServ.uploadIamge(formData, 'p1')
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      })
}

}
