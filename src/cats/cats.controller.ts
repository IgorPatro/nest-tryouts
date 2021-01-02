// eslint-disable-next-line prettier/prettier
import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Query, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Req() request: Request): string {
    console.log(request.body);
    console.log(`wywołano post /cats`);
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    console.log(`wywołano get /cats`);
    return 'This action returns all cats';
  }

  @Get(`:id`)
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  findOne(@Param() params): string {
    console.log(`wywołano get /cats/${params.id}`);
    return `This action returns cat with id ${params.id}.`;
  }

  @Get(`cats-website`)
  @Redirect(`https://www.cat.com/en_GB.html`, 302)
  getCatsWebsite(@Query('lang') lang) {
    console.log(lang, typeof lang);

    if (lang && lang === 'pl') {
      return { url: 'https://www.cat.com/pl_PL.html' };
    }
  }
}
