import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodID = Math.random().toString(36).substr(2, 9);
    const newProduct = new Product(prodID, title, desc, price);
    this.products.push(newProduct);
    return prodID;
  }

  getProducts() {
    // to copy the array, not editing this one
    return [...this.products];
  }

  getSingleProduct(productID: string) {
    const product = this.findProduct(productID)[0];

    // copy as well
    return { ...product };
  }

  updateProduct(
    productID: string,
    title: string,
    description: string,
    price: number,
  ) {
    // here needs to be exception if typeof return from func isn't array
    const [product, index] = this.findProduct(productID);

    this.products[index] = {
      ...product,
      title: title || product.title,
      description: description || product.description,
      price: price || product.price,
    };
  }

  private findProduct(id: string): [Product, number] | NotFoundException {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      return new NotFoundException('Could not find product');
    }
    return [product, productIndex];
  }
}
