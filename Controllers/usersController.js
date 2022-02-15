import { v4 as uuidv4 } from 'uuid';

let users = []

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {

    const user = req.body;
    const userId = uuidv4();

    const userWithId = { ... user, id: userId }

    users.push(userWithId);
    
    res.send(`${user.firstName} was successfully added!`)
}

export const getUserById = (req, res) => {

    const { id } = req.params;
    const userById = users.find((user) => user.id == id);
    
    res.send(userById);
}

export const deleteUser = (req, res) => {

    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with ID: ${id} has been deleted.`);
}

export const updateUser = (req, res) => {

    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const userToUpdate = users.find((userToUpdate) => userToUpdate.id == id);

    if(firstName) {
        userToUpdate.firstName = firstName;
    }

    if(lastName) {
        userToUpdate.lastName = lastName;
    }

    if(age) {
        userToUpdate.age = age;
    }

    res.send(`User with ID: ${id} has been updated.`);
}