import { Controller, Get, Req, Param, Query, HttpCode, Res, HttpStatus }
  from '@nestjs/common';
import {Request, Response} from 'express';

const SPEAKERS = [
  {
    id: 0,
    fullname: 'Roberto Perez',
    email: 'email@gmail.com',
    description: 'Fullstack developer'
  },
  {
    id: 1,
    fullname: 'Maria Rodriguez',
    email: 'maria@gmail.com',
    description: 'Angular developer'
  },
];

@Controller('speaker')
export class SpeakerController {
  @Get()
  getSpeakers(@Req() request: Request) {
    console.log('Request method', request.method);
    console.log('Request params', request.params);
    return SPEAKERS;
  }

  // @Get(':id') // api/speaker/2?version=1
  // @HttpCode(201)
  // getSpeaker(@Param() params: any,
  //            @Query('version') version: number) {
  //   console.log('getSpeaker:', params.id);
  //   if(version > 2) {
  //     return SPEAKERS[params.id];
  //   }
  //   return '';
  // }

  @Get(':id') // api/speaker/2?version=1
  getSpeaker(@Param() params: any,
             @Query('version') version: number,
             @Res() res: Response) {
    console.log('getSpeaker. Id:', params.id);
    console.log('getSpeaker. version:', version);
    if(version > 2) {
      // return SPEAKERS[params.id];
      res.status(HttpStatus.OK).send(SPEAKERS[params.id]);
    }
    res.status(HttpStatus.BAD_REQUEST).send();
  }

}
