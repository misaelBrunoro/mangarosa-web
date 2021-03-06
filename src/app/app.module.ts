import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { CollaboratorService } from './services/collaborator.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    RouterModule,
    LayoutModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
    }),
  ],
  providers: [CollaboratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
