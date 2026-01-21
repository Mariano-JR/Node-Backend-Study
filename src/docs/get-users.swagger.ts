/**
 * @openapi
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Listar usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
