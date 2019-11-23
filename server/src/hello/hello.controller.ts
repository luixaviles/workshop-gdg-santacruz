import { Controller, Get } from '@nestjs/common';

// localhost:4200/api/hello
// ng serve -o -> npm run serve
@Controller('hello')
export class HelloController {

  @Get()
  sayHello() {
    return 'Hola GDG Santa Cruz!';
  }
}
