import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {RouterModule} from "@angular/router";
import {CreateShirtComponent} from "./core/shirt/create.shirt.component";
import {ListShirtsComponent} from "./core/shirt/list.shirts.component";
import {HomeComponent} from "./core/components/home.component";
import { OAuthModule } from 'angular-oauth2-oidc';
import {LoginService} from "./core/services/login.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'shirts',
          component: ListShirtsComponent
        },
        {
          path: 'create-shirt',
          component: CreateShirtComponent,
        }
      ])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
