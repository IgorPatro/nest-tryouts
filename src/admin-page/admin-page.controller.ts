import { Controller, Get, HostParam, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller(`admin-panel`)
export class AdminPageController {
  @Get()
  getInfo(@HostParam('account') account: string, @Req() request: Request) {
    console.log(request.hostname);
    return account;
  }

  @Post()
  createUser(@Req() request: Request) {
    console.log(request.body);
    return request.body;
  }
}
