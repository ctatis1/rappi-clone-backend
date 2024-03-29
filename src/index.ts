import express from 'express';
import App from './services/ExpressApp';
import dbConnection from './services/Database'
import { PORT } from './config';

const StartServer = async () => {
    const app = express();
    
    console.clear();
    
    await dbConnection()

    await App(app)

    app.listen(PORT, () => {
        
        console.log(`App listening at port ${PORT}`)
    })
}

StartServer()
