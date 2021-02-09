import 'module-alias/register';
import app from '@src/app';
import dotnev from 'dotenv';
dotnev.config();
const port = process.env.PORT || 2021;
const server = app.listen(port, () => {
    console.log(`Server starting on port ${port}`)
});
export default server;