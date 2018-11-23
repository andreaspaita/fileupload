import { Component, OnInit } from '@angular/core';
import { Fileupload } from './fileupload';
import { UploadfileService } from './uploadfile.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

    FileSave :  Array<Fileupload> = [];
    FileNotUpload : Array<Fileupload> = [];
  FileMax: boolean = false;
  fileStart = 0;
  fileEnd = 10;
  hiddenFile = true;
  allFIleplus;
  allFile;
  error;
  limitFile :number = 5;
  addfileButton :boolean = false;
    units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    SizeFile :number =5000000;
  constructor(private UploadfileService:UploadfileService ) {
     this.fileStart =  this.UploadfileService.getfileStart() ;
      this.fileEnd = this.UploadfileService.getfileEnd() ;
     this.hiddenFile = this.UploadfileService.gethiddenFile() ;
       this.limitFile =this.UploadfileService.getlimitFile() ;
       this.addfileButton = this.UploadfileService.getaddfileButton();
       this.allFile =  this.UploadfileService.getFileexist();
       this.SizeFile = this.UploadfileService.getSizeFile();



  }

  ngOnInit() {

  }
  onFileChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {

      const [file] = event.target.files;
      reader.readAsDataURL(file);

       let taille = this.niceBytes(file.size);
       // let taille = this.niceBytes(50000* 100);
        console.log(taille);
        if(file.size <= this.SizeFile)
        {
            reader.onload = () =>
            {
                console.log(reader.result);


                this.FileSave.push(new Fileupload(reader.result,file.name,file.type,reader.result,null,null,taille));
                console.log(this.FileSave);
                this.UploadfileService.setFileSave( this.FileSave);
                if(this.FileSave.length >= this.limitFile )
                {
                    this.FileMax = true;
                }



            };
        }else{
            reader.onload = () =>
            {



                this.FileNotUpload.push(new Fileupload(reader.result,file.name,file.type,reader.result,null,null,taille));




            };

        }

    }
  }


     niceBytes(x){
    let l = 0, n = parseInt(x, 10) || 0;
    while(n >= 1024 && ++l)
        n = n/1024;
    return(n.toFixed(n >= 10 || l < 1 ? 0 : 1) + ' ' + this.units[l]);
}
  deleteFile(i)
  {

      this.FileMax = false;
      this.FileSave.splice(i, 1);

  }
  pictureplus()
  {

    this.hiddenFile = false;
    let start = this.fileStart + 10;
    let end =  this.fileEnd+ 10;
    this.fileStart = start;
    this.fileEnd = end;

    //let start = this.fileEnd +1






    this.hiddenFile = true;
  }

  pushExistFile(i)
  {

    if( this.FileMax == false) {


        this.FileSave.push(new Fileupload(null, this.allFile[i].name, null,this.allFile[i].url));


    }


    if (this.FileSave.length >= this.limitFile) {
      this.FileMax = true;
    }

  }
  limitUpload(event)
  {

    this.limitFile = event.target.value;
  }
    limitSizeUpload(event)
    {

        this.SizeFile = event.target.value;
    }

  chnageDisplaynoneoui()
{

  this.addfileButton =true;

}

  chnageDisplaynonenon()
  {

    this.addfileButton = false;

  }
defaultlimiteUpload()
{
  this.limitFile = 5;
  this.FileSave = new Array();

  this.FileMax = false;

}

    initFile()
    {
      this.FileMax = false;

      this.FileSave = new Array();
    }
}
