import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input('title') title: string;
  @Input('category') category: string;
  @Input('imgUrl') imgUrl: string;
  @Input('shortDesc') shortDesc: string;
  @Input('publishedDate') publishedDate: string;

  constructor() { }

  ngOnInit() {
  }

}
