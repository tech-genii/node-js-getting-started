const express = require('express')
import todos from './db/db';
import cors from 'cors';
const path = require('path')
const PORT = process.env.PORT || 5000


const app = express();

app.use(cors())

app.get('/api/v1/todos',(req,res)=>{
  res.status(200).send({
    success: 'true',
    message:'todos retrieved successfuly',
    todos:todos
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

// express()
  // .use(express.static(path.join(__dirname, 'public')))
  // .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  // .listen(PORT, () => console.log(`Listening on ${ PORT }`))
