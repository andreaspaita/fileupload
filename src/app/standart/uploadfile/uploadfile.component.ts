import { Component, OnInit } from '@angular/core';
import { Fileupload } from './fileupload';

import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

  FileSave :  Array<Fileupload> = [];
  FileMax: boolean = false;
  fileStart = 0;
  fileEnd = 10;
  hiddenFile = true;
  allFIleplus;
  allFile;
  error;
  limitFile :number = 5;
  addfileButton :boolean = false;

  constructor( ) {




  }

  ngOnInit() {
this.allFile = new Array();
    this.allFile.push({name:'file_1',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
    this.allFile.push({name:'file_2',url:'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'});
    this.allFile.push({name:'file_3',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
    this.allFile.push({name:'file_4',url:'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'});
    this.allFile.push({name:'file_5',url:'https://homepages.cae.wisc.edu/~ece533/images/boat.png'});
    this.allFile.push({name:'file_6',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
    this.allFile.push({name:'file_7',url:'https://homepages.cae.wisc.edu/~ece533/images/boat.png'});
    this.allFile.push({name:'file_8',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
    this.allFile.push({name:'file_9',url:'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'});
    this.allFile.push({name:'file_10',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
    this.allFile.push({name:'file_11',url:'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'});
    this.allFile.push({name:'file_12',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
    this.allFile.push({name:'file_13',url:'https://homepages.cae.wisc.edu/~ece533/images/peppers.png'});


  }
  onFileChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {

      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () =>
      {




        this.FileSave.push(new Fileupload(reader.result,file.name,file.type,reader.result));

        if(this.FileSave.length >= this.limitFile )
        {
          this.FileMax = true;
        }



      };
    }
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
  this.FileSave = null;
  this.FileSave = new Array();
  this.FileMax = false;
  console.log( this.limitFile);
}

    initFile()
    {
      this.FileMax = false;
      this.FileSave = null;
      this.FileSave = new Array();
    }
}
