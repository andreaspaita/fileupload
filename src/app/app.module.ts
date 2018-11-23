import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UploadfileComponent } from './standart/uploadfile/uploadfile.component';
import { UploadfileService } from './standart/uploadfile/uploadfile.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UploadfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
