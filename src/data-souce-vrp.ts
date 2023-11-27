import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource_vrp = new DataSource({
    type: "postgres",
    host: "192.168.10.210",
    port: 5432,
    username: "postgres",
    password: "Via7216",
    database: "01351",
    synchronize: false,
    logging: true,
	entities: [`${__dirname}/**/entityVt/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})