const mongoose = require('mongoose');
const AuthorDB = 'authorDb';
mongoose.connect(`mongodb://localhost/${AuthorDB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log(`Established connection with ${AuthorDB}`))
    .catch((err)=>console.log('Something went wrong connecting to the database ',err));