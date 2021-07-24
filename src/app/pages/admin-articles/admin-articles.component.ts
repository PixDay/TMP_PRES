import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateArticleModalComponent } from 'src/app/components/create-article-modal/create-article-modal.component';
import { EditAdminModalComponent } from 'src/app/components/edit-admin-modal/edit-admin-modal.component';
import { EditArticleModalComponent } from 'src/app/components/edit-article-modal/edit-article-modal.component';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css']
})
export class AdminArticlesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createArticle()
  {
    this.dialog.open(CreateArticleModalComponent, {
      height: '600px',
      width: '450px',
    });
  }

  editArticle()
  {
    this.dialog.open(EditArticleModalComponent, {
      height: '600px',
      width: '450px',
    });
  }
}
