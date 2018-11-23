import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UploadfileService {
    FileSave ;
    fileStart:number = 0;
    fileEnd :number= 10;
    hiddenFile :boolean = true;
    limitFile :number = 5;
    addfileButton :boolean = false;
    Fileexist  = new Array();
    SizeFile:number = 5000000;
    constructor() {

        this.Fileexist.push({name:'file_1',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
        this.Fileexist.push({name:'file_2',url:'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'});
        this.Fileexist.push({name:'file_3',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
        this.Fileexist.push({name:'file_4',url:'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'});
        this.Fileexist.push({name:'file_5',url:'https://homepages.cae.wisc.edu/~ece533/images/boat.png'});
        this.Fileexist.push({name:'file_6',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
        this.Fileexist.push({name:'file_7',url:'https://homepages.cae.wisc.edu/~ece533/images/boat.png'});
        this.Fileexist.push({name:'file_8',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
        this.Fileexist.push({name:'file_9',url:'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'});
        this.Fileexist.push({name:'file_10',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
        this.Fileexist.push({name:'file_11',url:'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'});
        this.Fileexist.push({name:'file_12',url:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
        this.Fileexist.push({name:'file_13',url:'https://homepages.cae.wisc.edu/~ece533/images/peppers.png'});
    }

    public  setFileexist(value)
    {

    }
    public getFileexist()
    {
        return this.Fileexist;
    }

   public setfileStart(value :number)
    {
        this.fileStart = value;
        return this;

    }
   public getfileStart(){
        return  this.fileStart;
    }
   public setfileEnd(value : number)
    {
     this.fileEnd =value;
        return this;
    }
   public getfileEnd()
    {
        return this.fileEnd;
    }
   public sethiddenFile(value:boolean)
    {
        this.hiddenFile = value;
        return this;
    }
   public gethiddenFile()
    {
        return this.hiddenFile;
    }
   public setlimitFile(value:number)
    {
        this.limitFile = value;
        return this;
    }
   public getlimitFile()
    {
        return this.limitFile;

    }
   public setaddfileButton(value:boolean)
    {
        this.addfileButton = value;
        return this;

    }
   public getaddfileButton()
    {
        return this.addfileButton;

    }

    public setFileSave(value)
    {
        this.FileSave =value;
        return this;
    }

    public getFileSave()
    {
        return this.FileSave;
    }

    public setSizeFile(value)
    {
        this.SizeFile = value;
    }

    public getSizeFile()
    {
        return this.SizeFile;
    }

}

