import { serverError, serverResponse } from '../helper/serverResponse';
/**
 * @export
 * @class Profile
 */
class Profile {
/**
   * @name add
   * @async
   * @static
   * @memberof Users
   * @param {Object} req express request object
   * @param {Object} res express response object
   * @returns {JSON} JSON object with details of new user
   */
  static async add(req, res) {
    try {
        const { domain_id, id } = req.body;
        serverResponse(req, res, 201, {message: 'profile added sucessfully', data: {domain_id, id}});
    } catch (error) {
      return serverError(req, res, 500, { message: error.message });
    }
  }

  /**
   * @name remove
   * @async
   * @static
   * @memberof Users
   * @param {Object} req express request object
   * @param {Object} res express response object
   * @returns {JSON} JSON object with details of new user
   */
  static async remove(req, res) {
    try {
        const { id } = req.params;
        serverResponse(req, res, 200, {message: `profile removed successfully ${id}`});
    } catch (error) {
      return serverError(req, res, 500, { message: error.message });
    }
  }
}

export default Profile;