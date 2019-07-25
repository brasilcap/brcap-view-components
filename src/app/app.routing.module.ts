import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CapLoginComponent } from "./cap-login/cap-login.component";

export const routes: Routes = [
  { path: "teste", component: AppComponent },
  { path: "login", component: CapLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
