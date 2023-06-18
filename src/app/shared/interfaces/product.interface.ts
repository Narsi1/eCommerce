export interface IProductData {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  selectedQuantity: number;
}

// The code defines two interfaces: `IProductData` and `IProduct`. Here's a breakdown of each interface:

// 1. `IProductData`:
//    - `products`: An array of `IProduct` objects representing a collection of products.
//    - `total`: The total number of products.
//    - `skip`: The number of products skipped in the collection.
//    - `limit`: The maximum number of products returned in a single query or request.

// 2. `IProduct`:
//    - `id`: The unique identifier for the product.
//    - `title`: The title or name of the product.
//    - `description`: A brief description or summary of the product.
//    - `price`: The price of the product.
//    - `discountPercentage`: The discount percentage applied to the product, if any.
//    - `rating`: The rating or average customer rating for the product.
//    - `stock`: The available quantity or stock of the product.
//    - `brand`: The brand or manufacturer of the product.
//    - `category`: The category or classification of the product.
//    - `thumbnail`: The URL or path to the product's thumbnail image.
//    - `images`: An array of URLs or paths to additional images of the product.
//    - `selectedQuantity`: The quantity of the product selected by the user or added to the cart.

// These interfaces provide a structure for defining and working with product data in a TypeScript or Angular application.
// They define the properties and their types, allowing for type checking and ensuring consistency when
// working with product - related data.
