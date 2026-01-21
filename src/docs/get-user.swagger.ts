/**
 * @openapi
 * /users/{id}:
 *   get:
 *      tags:
 *        - Users
 *      summary: Buscar usuário por id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *            minimum: 1
 *          description: The user ID
 *      responses:
 *        200:
 *          description: Usuário encontrado
 *          content:
 *          application/json:
 *            schema:
 *            type: object
 *            items:
 *              $ref: '#/components/schemas/User'
 *        404:
 *          description: Usuário não encontrado
 */
