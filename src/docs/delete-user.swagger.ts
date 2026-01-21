/**
 * @openapi
 * /users/{id}:
 *   delete:
 *      tags:
 *        - Users
 *      summary: Deletar usuário
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *            minimum: 1
 *          description: The user ID
 *      responses:
 *        204:
 *          description: Usuário deletado
 *        404:
 *          description: Usuário não encontrado
 */
