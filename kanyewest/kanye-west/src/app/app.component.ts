import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Kanye-West Quote';
  quote: any
  myQuotes: Array<any> = []
  favs: Array<any> = []
  myQuote: any

  ngOnInit() {
    this.api.getQuote().subscribe((data) => {
      console.log(data)
      this.quote = data
    })
  }

  addToFavourite(val: string) {
    if(this.favs.length == 0) {
      this.favs.push(val)
    } else {
      let arr = this.favs
      arr.push(val)
      let res = [...new Set(arr)]
      this.favs = res
    }
  }

  addMyQuotes() {
    let arr = this.myQuotes
    arr.push(this.myQuote)
    this.myQuotes = [...new Set(arr)]
    this.myQuote = ''
  }

  getQuote() {
    this.api.getQuote().subscribe((data) => {
      console.log(data)
      this.quote = data
    })
  }

  constructor(private api: ApiService) {

  }
}