import users from '../../users.json';

export function findAllUsers() {
    return users
}

export function findUserById(id: string) {
    const userData = users.find(user => String(user.id) === id)

    return userData
}

export function createUser(name: string) {
    if (name.length < 3) throw new Error('Name must have at least 3 characters')

    const newUser = {
        id: Date.now(),
        name,
    };

    users.push(newUser);
    return newUser
}

export function deleteUserById(id: string): boolean {
    const index = users.findIndex(user => String(user.id) === id)

    if (index === -1) {
        return false
    }
    
    users.splice(index, 1)
    return true
}