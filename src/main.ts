import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TodasExpepciones } from './common/filtros/http-exceptions.filter';
import { TiempoSalidaInterceptor } from './common/interceptores/tiemposalida.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new TodasExpepciones());
  app.useGlobalInterceptors(new TiempoSalidaInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
