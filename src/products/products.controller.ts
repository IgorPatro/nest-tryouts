import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body()
    completeBody: {
      title: string;
      description: string;
      price: number;
    },
  ) {
    const generetedID = this.productsService.insertProduct(
      completeBody.title,
      completeBody.description,
      completeBody.price,
    );
    return { id: generetedID };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodID: string) {
    return this.productsService.getSingleProduct(prodID);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodID: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    this.productsService.updateProduct(prodID, prodTitle, prodDesc, prodPrice);

    return this.productsService.getSingleProduct(prodID);
  }
}
