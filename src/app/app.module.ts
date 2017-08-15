import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PhotoMgrComponent } from './photo-mgr/photo-mgr.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { SocketService } from './socket.service';
import { SyncComponent } from './sync/sync.component';

const config: SocketIoConfig = {
  url: 'http://localhost:4000',
  options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PhotoMgrComponent,
    WelcomeComponent,
    SyncComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    SocketService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
