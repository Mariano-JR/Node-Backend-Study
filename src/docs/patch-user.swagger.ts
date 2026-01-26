/**
 * @openapi
 * /users/{id}:
 *   patch:
 *      tags:
 *          - Users
 *      summary: Atualiza dados do usuário
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *              minimum: 1
 *            description: The user ID
 *      requestBody:
 *          required: false
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "John Doe"
 *      responses:
 *          200:
 *              description: Usuário atualizado
 *              content:
 *                  application:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          400:
 *              description: Usuário não encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ErrorResponse'
 *          404:
 *              description: Erro de validação
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ErrorResponse'
 */
