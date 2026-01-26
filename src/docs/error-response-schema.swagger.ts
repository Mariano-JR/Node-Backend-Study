/**
 * @swagger
 * components:
 *   schemas:
 *     ErrorResponse:
 *       type: object
 *       required:
 *         - statusCode
 *         - error
 *         - message
 *       properties:
 *         statusCode:
 *           type: integer
 *           example: 404
 *         error:
 *           type: string
 *           example: Application Error
 *         message:
 *           type: string
 *           example: User not found
 */
