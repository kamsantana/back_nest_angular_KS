import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST'),
        // Corregido: TypeORM requiere el puerto como número.
        port: parseInt(config.get('PORT_DB'), 10), 
        username: config.get('USERNAME'),
        password: config.get('PASSWORD'),
        database: config.get('DATABASE'),
      });
      return dataSource.initialize();
    },
  },
];
