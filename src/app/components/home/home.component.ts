import { Component } from '@angular/core';
import {MockService} from "../../services/mock.service";
import {SliderAPI} from "../../interfaces/SliderAPI";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  sliders !:SliderAPI[];
  cards !:SliderAPI[];
  categories !: SliderAPI[];
   constructor(private mockServide:MockService) {
    this.getSliders();
    this.getCards();
    this.getCategories();
  }

   private getSliders() {
     return  this.mockServide.getSliders().subscribe({
      next: value => this.sliders = value,
      error:err => console.log(err),
      complete:()=> console.log('done')
    })
  }

  private getCards() {
    return this.mockServide.getCards().subscribe({
      next: value => this.cards = value,
      error:err => console.log(err),
      complete:()=> console.log('done')
    })
  }

  private getCategories() {
    return this.mockServide.getCategories().subscribe({
      next: value => {
        this.categories = value;
        console.log(value);
      },
      error:err => console.log(err),
      complete:()=> console.log('done')
    })
  }
}
