import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import "reflect-metadata";
import { useContainer } from 'class-validator';

async function bootstrap() {
  /**
   * @description - Instance of the app;
   */
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  
  /**
   * @description - Create pipe on the app
   */
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
 );
  
  useContainer(app.select(AppModule),{fallbackOnErrors:true});

  /**
   * @description - Swagger configuration
   * @return SwaggerModule.build()
  */
  const config= new DocumentBuilder()
  .setTitle("Loja")
  .setDescription("API Da loja")
  .setVersion("1.0-alpha")
  .addTag("loja")
  .build()

  
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup("api",app,document);

  /**
   * @description - Run the app
   */
  await app.listen(3000);
}
bootstrap();
