/* eslint-disable camelcase */
import { dirname, join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const nodeConfig = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,
	host: process.env.HOST || 'localhost',
	apiBase: process.env.API_BASE || '/api/v1',
	basePath: join(dirname(__dirname), '.'),
	mongo: {
		uri: process.env.MONGO_URI || 'mongodb://localhost:27017/app',
	}
	,
	jwt: {
		secret: process.env.JWT_SECRET || 'secret'
	},
	redis: {
		host: process.env.REDIS_HOST || 'localhost',
		port: process.env.REDIS_PORT || 6379,
		password: process.env.REDIS_PASSWORD || '',
		db: process.env.REDIS_DB || 0
	},
	socket: {
		host: process.env.SOCKET_HOST || 'localhost',
		port: process.env.SOCKET_PORT || 3000
	},
	email: {
		host: process.env.EMAIL_HOST || 'smtp.gmail.com',
		port: process.env.EMAIL_PORT || 587,
		secure: process.env.EMAIL_SECURE || false,
		auth: {
			user: process.env.EMAIL_USER || '',
			pass: process.env.EMAIL_PASSWORD || ''
		},
		from: process.env.EMAIL_FROM || '',
	},
	aws: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
		region: process.env.AWS_REGION || '',
		bucket: process.env.AWS_BUCKET || '',
		url: process.env.AWS_URL || '',
	},
	facebook: {
		clientID: process.env.FACEBOOK_CLIENT_ID || '',
		clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
		callbackURL: process.env.FACEBOOK_CALLBACK_URL || '',
	},
	google: {
		clientID: process.env.GOOGLE_CLIENT_ID || '',
		clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		callbackURL: process.env.GOOGLE_CALLBACK_URL || '',
	},
	cloudinary: {
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
		api_key: process.env.CLOUDINARY_API_KEY || '',
		api_secret: process.env.CLOUDINARY_API_SECRET || '',
	},
};

