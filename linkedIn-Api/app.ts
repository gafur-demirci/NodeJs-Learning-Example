const express = require('express');
import userRouters  from './routes/user/UserRoute';

const app = express();
const port = 3000;

// app.get('/', (req: any, res: any) => {
//     res.send('Hello World!');
// });

app.use('/users', userRouters);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
