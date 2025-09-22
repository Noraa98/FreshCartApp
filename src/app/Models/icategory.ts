export interface ICategory {
  ID : number;
  Name : string;
  OriginalName?: string;         // Original name from API (e.g., "men's clothing")
  Description?: string;          // Category description
  ProductCount?: number;         // Number of products in this category
  CreatedAt?: Date;             // When category was created/loaded
  UpdatedAt?: Date;
}
