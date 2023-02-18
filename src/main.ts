import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const port = 3000;
  
  const logger = new Logger();

  initSwagger(app);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
    }),
  );
  
  await app.listen(port);

  logger.log(`Server is running in port ${port}`);
};
bootstrap();
