//USERS

/**
 * @api {post} /login Login
 * @apiName UserLogin
 * @apiGroup Users
 * @apiParam {string} email Obrigatório
 * @apiParam {string} password Obrigatório
 * @apiSuccessExample {json} Success-Response:
 * {
  "user": {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@email.com",
    "createdAt": "2021-01-06T04:02:29.091Z",
    "updatedAt": "2021-01-06T04:02:29.091Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA5OTEzMjg5fQ.gPO3-dzzn3Ary24uPgCEAgJzK3s6tR_VHI_2irtlyvs"
}
*/

/**
 * @api {post} /register Register
 * @apiName UserRegister
 * @apiGroup Users
 * @apiParam {string} name Obrigatório
 * @apiParam {string} email Obrigatório
 * @apiParam {string} password Obrigatório
 * @apiSuccessExample {json} Success-Response:
 * {
  "user": {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@email.com",
    "createdAt": "2021-01-06T04:02:29.091Z",
    "updatedAt": "2021-01-06T04:02:29.091Z"
  }
}
*/

/**
 * @api {get} /users/:id Show
 * @apiName UserShow
 * @apiGroup Users
 * @apiParam {number} :id id do usuário a ser buscado
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "id": 2,
 *   "name": "Jane Doe",
 *   "email": "jane@email.com",
 *   "createdAt": "2021-01-06T04:02:29.091Z",
 *   "updatedAt": "2021-01-06T06:18:06.368Z"
 * }
 */

 /**
  * @api {put} /users/:id Edit
  * @apiName UserEdit
  * @apiGroup Users
  * @apiParam {number} :id id do usuário a ser editado
  * @apiSuccessExample {json} Success-Response:
  * {
  *   "message": "item editado!"
  * }
*/

/**
  * @api {delete} /users/:id Remove
  * @apiName UserRemove
  * @apiGroup Users
  * @apiParam {number} :id id do usuário a ser removido
  * @apiSuccessExample {json} Success-Response:
  * {
  *   "message": "item removido!"
  * }
*/

//SHOPS

