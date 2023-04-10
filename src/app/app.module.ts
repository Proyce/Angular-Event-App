import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StartComponent } from './start/start.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NewAccountComponent } from './pages/new-account/new-account.component';

const Routes = [
  { path: '', component: StartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-account', component: NewAccountComponent },
  { path: '*', component: StartComponent },
];

@NgModule({
  declarations: [
    StartComponent,
    NavBarComponent,
    LoginComponent,
    NewAccountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Routes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [StartComponent],
})
export class AppModule {}
