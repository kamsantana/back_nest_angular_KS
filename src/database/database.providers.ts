import { ConfigService } from "src/config/config.service";
<<<<<<< HEAD
import { DataSource } from "typeorm";

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory:(config: ConfigService)=>{
            const dataSource = new DataSource({
                type:'postgres',
                host:config.get('HOST'),
                port: +config.get('PORT_DB') ,
                username: config.get('USERNAME'),
                password: config.get('PASSWORD'),
                database: config.get('DATABASE')
            });
            return dataSource.initialize();
        }
    },
];

 
=======
import { DataSource } from "typeorm"

export const databaseProvider=[
  {
    provide: 'DATABASE_CONNECTION',
<<<<<<< HEAD
    inject: [ConfigService],
    useFactory:(config: ConfigService)=>{
      const dataSource= new DataSource({
        type:'postgres',
        host:config.get('HOST'),
        port: +config.get('PORT_DB'),
        username: config.get('USERNAME'),
        password: config.get('PASSWORD'),
        database: config.get('DATABASE')
=======
    useFactory: () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5434,
        username: 'postgres',
        password: '1234',
        database: 'BackKevinSantana'
>>>>>>> 4a9809b2427c7b74d5d37d8276df98b472b8bfb5
      });
      
      return dataSource.initialize();
    }
  }
]
>>>>>>> 05d7e95f278df52d41d2f44427b0d5c03e1ff5c4
