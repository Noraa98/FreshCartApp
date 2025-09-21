import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { filter } from 'rxjs';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root' // Means service is singleton and available app-wide
})
export class ProductService {

  private products: IProduct[] = [
    {
      ID: 1,
      Name: 'Labtop',
      Quantity: 10,
      Price: 25000,
      Img: 'imges/labtop.jpg',
      CategoryID: 1
    },
    {
      ID: 2,
      Name: 'Mobile',
      Quantity: 0,
      Price: 15000,
      Img: 'imges/mobile.jpeg',
      CategoryID: 1
    },
    {
      ID: 3,
      Name: 'HeadPhone',
      Quantity: 4,
      Price: 2500,
      Img: 'imges/headphone.jpeg',
      CategoryID: 3
    },
    {
      ID: 4,
      Name: 'Mouse',
      Quantity: 3,
      Price: 45000,
      Img: 'imges/mouse.jpeg',
      CategoryID: 3
    },
    {
      ID: 5,
      Name: 'Labtop',
      Quantity: 7,
      Price: 15000,
      Img:'imges/labtop.jpg',
      CategoryID: 1
    },
    {
       ID: 6,
       Name: 'Mobile',
       Quantity: 2,
       Price: 8000,
       Img: 'imges/mobile.jpeg',
       CategoryID: 2 
      },
      {
      ID: 7,
      Name: 'HeadPhone',
      Quantity: 4,
      Price: 2500,
      Img: 'imges/headphone.jpeg',
      CategoryID: 3
    },
    {
      ID: 8,
      Name: 'Mouse',
      Quantity: 3,
      Price: 45000,
      Img: 'imges/mouse.jpeg',
      CategoryID: 3
    },
  ]

  private categories: ICategory[] = [
    {
      ID: 1,
      Name: "Electronics"
    },
    {
      ID: 2,
      Name: "Accessories"
    },
    {
      ID: 3,
      Name: "Home Appliances"
    }
  ];

  getProductsByCatID(catID: number): IProduct[] {
    return this.products.filter(p => p.CategoryID == catID);
  }

  getProductByID(prodID: number): IProduct | undefined {
    return this.products.find(p => p.ID == prodID);
  }

  GetAllProducts(): IProduct[] {
    return this.products;
  }

  GetCategories(): ICategory[] {
    return this.categories;
  }

  GetCategoryName(catID: number): string {
    const cat = this.categories.find(c => c.ID === catID);
    return cat ? cat.Name : '';
  }

}
