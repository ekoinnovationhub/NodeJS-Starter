import express from 'express';
import profile from './profile'

const route = express.Router();
route.use('/profile', profile);

export default route;
