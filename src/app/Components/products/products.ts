import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../../Directives/product-card';
import { CreditCardPipe } from "../../Pipes/credit-card-pipe";
import { ProductService } from '../../Services/product-service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, ProductCard, CreditCardPipe, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnChanges, OnInit {

  // inject()
  private productService = inject(ProductService);
  private router = inject(Router);

  @Input() searchText: string = '';
  @Input() selectedCategoryID: string = '';

  today: Date = new Date();
  creditCardNumber = '1234567812345678';

  Productlist: IProduct[] = [];
  filteredList: IProduct[] = [];

  categoryMap: { [key: number]: string } = {};

  ngOnInit(): void {

    this.Productlist = this.productService.GetAllProducts();
    this.filteredList = [...this.Productlist];

    this.productService.GetCategories().forEach(cat => {
    this.categoryMap[cat.ID] = cat.Name;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['searchText'] || changes['selectedCategoryID']) {
      this.filterProducts();
    }
  }

  buyProduct(product: IProduct): void {
    if (product.Quantity > 0) {
      product.Quantity -= 1;
    }
    if (product.Quantity < 0) {
      product.Quantity = 0;
    }
  }

  filterProducts(): void {

    let tempList = [...this.Productlist];

    // Filter by product name if searchText is not empty
    if (this.searchText?.trim() !== '') {
      const text = this.searchText.toLowerCase();
      tempList = tempList.filter(p => p.Name.toLowerCase().includes(text));
    }

    // Filter by category if a category is selected
    if (this.selectedCategoryID) {
      const catID = Number(this.selectedCategoryID);
      tempList = tempList.filter(p => p.CategoryID === catID);
    }

    this.filteredList = tempList;
  }


  goToDetails(productID: number) {
    this.router.navigate(['/products', productID]).then(() => {
      console.log('Navigated to product', productID);
    });
  }

}
