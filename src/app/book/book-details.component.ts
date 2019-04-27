import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
    //selector:"book-details",
    templateUrl:"./book-details.component.html"
})
export class BookDetailsComponent implements OnInit{

    book:Book;

    constructor(private bookService:BookService,
        private route:ActivatedRoute){ }


ngOnInit():void{
    this.route.paramMap.subscribe((map)=>{
        let bookId = Number( map.get("bookId"));
       console.log(bookId);
    

       this.bookService.findbookById(bookId).subscribe((data)=>{
          this.book= data;
         console.log(data);
      });

   });
}
//     book = {
//         "bookId": 102,
//         "imageUrl": "assets/images/head_first_servlet_&_jsp.jpg",
//         "title": "Head First Servlet & JSP",
//         "authors": [
//               {"firstName": "Kathy", "lastName": "Sierra"},
//               {"firstName": "Bert", "lastName": "Bates"}
//          ],
//          "category": "programming",
//          "publisher": "O Reilly",
//          "noOfPages": 928, 
//          "rating": 4.8,
//          "edition": 2,
//          "price": 1140,
//          "releaseDate": new Date(2014, 10, 28)
//    }
   
}