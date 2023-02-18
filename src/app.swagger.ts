import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const initSwagger = (app: INestApplication) => {
    
    const config = new DocumentBuilder()
    .setTitle('Star Wars API')
    .setDescription('API con temática de star wars desarrollada con nest.js y typeScript')
    .setVersion('1.0')
    .addTag('star-wars')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    
    SwaggerModule.setup('swagger', app, document);
};