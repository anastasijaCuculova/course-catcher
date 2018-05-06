import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './sidenav/sidenav.component';
import {SidenavService} from './sidenav/sidenav.service';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ThemingService} from './theming.service';
import {SharedModule} from '../shared/shared.module';
import {CreateShirtComponent} from "./shirt/create.shirt.component";
import {ListShirtsComponent} from "./shirt/list.shirts.component";
import {ShirtService} from "./services/shirt.service";
import {AppRoutingComponent} from "../app-routing/app-routing.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {HomeComponent} from "./components/home.component";
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./services/login.service";
import {OAuthModule} from "angular-oauth2-oidc";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OAuthModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'shirts',
        component: ListShirtsComponent,
      },
      {
        path: 'create-shirt',
        component: CreateShirtComponent,
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]),
    HttpModule,


  ],
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    CreateShirtComponent,
    ListShirtsComponent,
    LoginComponent,
    HomeComponent,
    AppRoutingComponent

  ],
  exports: [
    SidenavComponent,
    ToolbarComponent,
    CreateShirtComponent,
    ListShirtsComponent,
    LoginComponent,
    HomeComponent,
    AppRoutingComponent
  ],
  providers: [
    SidenavService,
    ThemingService,
    ShirtService,
    LoginService

  ]
})
export class CoreModule {
}
