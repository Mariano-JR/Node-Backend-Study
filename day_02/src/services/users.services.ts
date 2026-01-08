import users from '../../users.json';

export function findAllUsers() {
    return users
}

export function findUserById(id: string) {
    const userData = users.find(user => String(user.id) === id)

    return userData
}