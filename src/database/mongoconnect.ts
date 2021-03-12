import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Database connected');
}
);

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});
