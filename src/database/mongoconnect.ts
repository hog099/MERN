import mongoose from 'mongoose'

mongoose.connect('', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Database connected');

});

export default mongoose;