import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  filterText = ""
  products: Product[] = [
    {
      id: 1,
      name: "Bal",
      description: "Organik Bal",
      price: 15.99,
    },
    {
      id: 2,
      name: "Pekmez",
      description: "Organik Pekmez",
      price: 20.99,
    },
    {
      id: 3,
      name: "Tarhana",
      description: "Organik ev yapımı tarhana",
      price: 45.99,
    },
    {
      id: 4,
      name: "Erişte",
      description: "Organik ev yapımı Erişte",
      price: 45.99,
    },
    {
      id: 5,
      name: "Reçel",
      description: "Organik ev yapımı Reçel",
      price: 45.99,
    },
  ];
  ngOnInit(): void {
  }

}
