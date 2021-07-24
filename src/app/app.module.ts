import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

/* ANGULAR MATERIAL COMPONENTS */
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';


/* PERSONAL COMPONENTS */
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminMembresComponent } from './pages/admin-membres/admin-membres.component';
import { AdminArticlesComponent } from './pages/admin-articles/admin-articles.component';
import { AddAdminModalComponent } from './components/add-admin-modal/add-admin-modal.component';
import { ConnectModalComponent } from './components/connect-modal/connect-modal.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ConnectModalAdminComponent } from './components/connect-modal-admin/connect-modal-admin.component';
import { EditAdminModalComponent } from './components/edit-admin-modal/edit-admin-modal.component';
import { MemberViewModalComponent } from './components/member-view-modal/member-view-modal.component';
import { CreateArticleModalComponent } from './components/create-article-modal/create-article-modal.component';
import { EditArticleModalComponent } from './components/edit-article-modal/edit-article-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ProfileComponent,
    AdminMembresComponent,
    AdminArticlesComponent,
    AddAdminModalComponent,
    ConnectModalComponent,
    AdminLoginComponent,
    ConnectModalAdminComponent,
    EditAdminModalComponent,
    MemberViewModalComponent,
    CreateArticleModalComponent,
    EditArticleModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
