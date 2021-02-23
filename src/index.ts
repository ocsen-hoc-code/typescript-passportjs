import app from '@src/app';
import dotnev from 'dotenv';
dotnev.config();
const port = process.env.PORT || 2021;
const server = app.listen(port, () => {
    console.log(`Server starting on url: http://127.0.0.1:${port}`)
});
export default server;