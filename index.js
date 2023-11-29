const app = require('./src/app.js');
const association = require('./src/utils/assoc_db');

const PORT = process.env.PORT;

association()
.then(()=>{
  app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}/`);
  });  
})
.catch(err=>{
  console.log(err.message);
});