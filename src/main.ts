import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  /**
   * @description - Instance of the app;
   */
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");

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
