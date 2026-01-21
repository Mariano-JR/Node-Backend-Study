/**
 * @openapi
 * /users/{id}:
 *   put:
 *      tags:
 *        - Users
 *      summary: Substitui dados do usuário
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *            minimum: 1
 *          description: The user ID
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - name
 *              properties:
 *                name:
 *                  type: string
 *                  example: "Mary Doe"
 *      responses:
 *        200:
 *          description: Usuário substituido
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        400:
 *          description: Usuário não encontrado
 *        404:
 *          description: Erro de validação
 */
