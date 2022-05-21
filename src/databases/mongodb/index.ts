import mongoose from 'mongoose';

mongoose.connect('');

mongoose.connection.on('connected', () => {
	console.log('MongoDB connected');
}
);
mongoose.connection.on('error', (err) => {
	console.log(err.message);
}
);

mongoose.connection.on('disconnected', () => {
	console.log('MongoDB disconnected');
}
);

mongoose.connection.on('reconnected', () => {
	console.log('MongoDB reconnected');
}
);