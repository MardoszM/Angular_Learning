import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { StoreFirstGuard } from './storeFirst.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
        FetchDataComponent,
        CheckoutComponent,
        CartDetailComponent
  ],
  imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      StoreModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot([
          { path: '', component: StoreComponent, pathMatch: 'full', canActivate: [StoreFirstGuard] },
          { path: 'home', component: HomeComponent},
          { path: 'counter', component: CounterComponent },
          { path: 'fetch-data', component: FetchDataComponent },
          { path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard]  },
        { path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard] },
        {
          path: "admin",
          loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
          canActivate: [StoreFirstGuard]
        },
        { path: "**", redirectTo:"/" }
      ])
    ],
    providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
