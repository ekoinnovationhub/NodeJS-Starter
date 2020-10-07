import express from 'express';
import Profile from '../controllers/Profile';
import CommonValidator from '../middleware/CommonValidator'
import emptyBody from '../middleware/emptyBody';

const route = express.Router();

/**
 * @swagger
 * /api/v1/access/profile/:
 *  get:
 *    summary: Route for creating a profile in access microservice
 *    description: creating a profile in access microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, profile has been created before
 */
route.post('/', emptyBody, CommonValidator.checkProfileInput(), Profile.add);

/**
 * @swagger
 * /api/v1/access/profile/:id
 *  delete:
 *    summary: Route for creating a profile in access microservice
 *    description: creating a profile in access microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, profile has been created before
 */
route.get('/', Profile.remove);

export default route;