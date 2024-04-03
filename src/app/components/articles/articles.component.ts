import { Component } from '@angular/core';
import {MockService} from "../../services/mock.service";
import {ArticlesAPI} from "../../interfaces/ArticlesAPI";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {registerLocaleData} from "@angular/common";
import localeES from "@angular/common/locales/es";

registerLocaleData(localeES);


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles !: ArticlesAPI[];

  constructor(private mockService: MockService) {
    this.getArticles();
  }


  private getArticles() {
    return this.mockService.getArticles().subscribe({
      next: value => this.articles = value,
      error: err => console.log(err),
      complete: () => console.log("get articles done!")
    })
  }

  protected readonly faHeart = faHeart;
}
