import { Component } from '@angular/core';
import {SingleArticle} from "../../interfaces/singleArticle";
import {MockService} from "../../services/mock.service";
import {ActivatedRoute} from "@angular/router";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {fa0} from "@fortawesome/free-solid-svg-icons/fa0";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.css']
})
export class OneArticleComponent {

  item !:SingleArticle;
  tallasDis : string[] = [];
  tallasNoDis : string[] = [];

  constructor(private mockService : MockService , private route:ActivatedRoute) {
    this.loadItem();
  }

  private loadItem() {
    const id = this.route.snapshot.params['id'];
      this.mockService.getOneItem(id).subscribe({
        next:value => {
          this.item = value;
          this.tallasDis = value.sizeAvalaible.split(',');
          this.tallasNoDis = value.sizeNotAvalaible.split(',');
        },
        error : err => console.log(err),
        complete : () => console.log("complete single item")
      })
  }

  protected readonly faStar = faStar;
  protected readonly faEnvelope = faEnvelope;
  protected readonly fa0 = fa0;
  protected readonly faHeart = faHeart;
}
