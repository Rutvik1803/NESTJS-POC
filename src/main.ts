import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //Cross-Origin Resource Sharing
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
