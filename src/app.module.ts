import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioModule } from './modules/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
