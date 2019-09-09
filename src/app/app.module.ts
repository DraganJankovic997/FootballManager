import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, 
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatGridListModule,
  MatExpansionModule, 
  MatTableModule,
  MatToolbarModule,
  MatOptionModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatPaginatorModule,
  MatSortModule} from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AuthorComponent } from './components/author/author.component';
import { IgracComponent } from './components/igrac/igrac.component';
import { LigaComponent } from './components/liga/liga.component';
import { NacionalnostComponent } from './components/nacionalnost/nacionalnost.component';
import { TimComponent } from './components/tim/tim.component';
import { IgracService } from './services/igrac.service';
import { NacionalnostService } from './services/nacionalnost.service';
import { LigaService } from './services/liga.service';
import { TimService } from './services/tim.service';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TimDialogComponent } from './components/dialogs/tim-dialog/tim-dialog.component';
import { NacionalnostDialogComponent } from './components/dialogs/nacionalnost-dialog/nacionalnost-dialog.component';
import { LigaDialogComponent } from './components/dialogs/liga-dialog/liga-dialog.component';
import { IgracDialogComponent } from './components/dialogs/igrac-dialog/igrac-dialog.component';



const ROUTES = [
  { path: 'igrac', component: IgracComponent },
  { path: 'tim', component: TimComponent },
  { path: 'liga', component: LigaComponent },
  { path: 'nacionalnost', component: NacionalnostComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'igrac', component: IgracComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    IgracComponent,
    LigaComponent,
    NacionalnostComponent,
    TimComponent,
    TimDialogComponent,
    NacionalnostDialogComponent,
    LigaDialogComponent,
    IgracDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    IgracService,
    TimService,
    NacionalnostService,
    LigaService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LigaDialogComponent,
    IgracDialogComponent,
    TimDialogComponent,
    NacionalnostDialogComponent
  ]
})
export class AppModule { }
