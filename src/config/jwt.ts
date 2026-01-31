export const jwtConfig = {
    secret: process.env.JWT_SECRET || 'dev-secret',
    expiredIn: '1d' as const,
}