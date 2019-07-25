import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BRCapModule } from "./modules/brcap.module";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BRCapModule,
    CurrencyMaskModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
