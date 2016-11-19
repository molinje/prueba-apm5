import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PagelistPage } from '../pages/pagelist/pagelist';
import { ProductService } from '../providers/product-service';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PagelistPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PagelistPage
  ],
  providers: [ProductService]
})
export class AppModule {}
