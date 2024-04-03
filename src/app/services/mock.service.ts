import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SliderAPI} from "../interfaces/SliderAPI";
import {ArticlesAPI} from "../interfaces/ArticlesAPI";
import {SingleArticle} from "../interfaces/singleArticle";



@Injectable({
  providedIn: 'root'
})
export class MockService {


  URL = "http://localhost:3001/api/";

  constructor(private http:HttpClient) { }


  getSliders():Observable<SliderAPI[]>{
    return this.http.get<SliderAPI[]>(this.URL+"slider")
  }
  getCards():Observable<SliderAPI[]>{
    return this.http.get<SliderAPI[]>(this.URL+"cards")
  }

  getCategories():Observable<SliderAPI[]>{
    return this.http.get<SliderAPI[]>(this.URL+"categories")
  }

  getArticles():Observable<ArticlesAPI[]>{
    return this.http.get<ArticlesAPI[]>(this.URL+"articles")
  }

  getOneItem(id:number):Observable<SingleArticle>{
    return this.http.get<SingleArticle>(this.URL+"article/"+id)
  }
}
