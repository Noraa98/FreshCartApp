import { environment } from "../../../environments/environment.development";


const domain = environment.Domain;

export const API_URLS = {
  // Authentication
  login: `${environment.Domain}auth/login`,   // POST { username, password }
  register: `${environment.Domain}users`,     

 // Product URLs
  products: `${environment.Domain}products`,
  productById: (id: number | string) => `${environment.Domain}products/${id}`,
  productCategories: `${environment.Domain}products/categories`,
  productsByCategory: (category: string) => `${environment.Domain}products/category/${category}`,
  
  
}
