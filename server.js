require('dotenv').config()
const app = require('./src/app');

app.get('/', (req, res) => {
  res.send('✅ Backend is live!');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
