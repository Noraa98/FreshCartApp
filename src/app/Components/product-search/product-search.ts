import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from "../products/products";
import { ICategory } from '../../Models/icategory';
import { ProductService } from '../../Services/product-service';

@Component({
  selector: 'app-product-search',
  imports: [FormsModule, Products],
  templateUrl: './product-search.html',
  styleUrl: './product-search.css'
})
export class ProductSearch {

  private productService = inject(ProductService);

  searchText: string ='';
  selectedCategoryID: string = '';
  categories: ICategory[] = [];

 ngOnInit() {
  this.productService.getAllProducts().subscribe(products => {
 
    this.categories = this.productService.getCategories();
  });
}

}
