import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { PhotoMgrComponent } from './photo-mgr/photo-mgr.component';
import { ProductComponent } from './product/product.component';
import { SyncComponent } from './sync/sync.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { SocketService } from './socket.service';
import { stateInit } from './shared/stateInit';

const config: SocketIoConfig = {
    url: stateInit.socket_url,
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
    SocketIoModule.forRoot(config),
  ],
  providers: [
    SocketService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
