import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastMessageService } from './services/toast-message/toast-message.service';
import { ToastMessageComponent } from './shared/components/toast-message/toast-message.component';
import { SharedModule } from './shared/shared.module';
import { ConstantService } from './services/constant.service';

@NgModule({
  declarations: [AppComponent, ToastMessageComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, SharedModule],
  providers: [ToastMessageService, ConstantService],
  bootstrap: [AppComponent],
})
export class AppModule {}
