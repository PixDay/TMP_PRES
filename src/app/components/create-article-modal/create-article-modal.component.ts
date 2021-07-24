import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-article-modal',
  templateUrl: './create-article-modal.component.html',
  styleUrls: ['./create-article-modal.component.css']
})
export class CreateArticleModalComponent implements OnInit {
  firstname: string = '';
  name: string = '';
  mail: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  create()
  {
    
  }

}
