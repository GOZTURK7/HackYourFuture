import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {

    const user = req.body;
    if(!user.firstName || !user.lastName || !user.age){
        return res.status(400).json({msg: `Input must include firstName, lastName and age parameter`});
    }else{
        let userWithId = {...user, id:uuidv4()}

        users.push(userWithId);
    
        res.json({msg: `User with the name: ${userWithId.firstName} ADDED to the database!`})
    }
  
};

export const getUsers = (req, res) => {
    res.send(users);
};

export const getUser = (req, res) => {

    const { id } = req.params;

    const foundUser = users.find(user => user.id === id);

    if(foundUser){
        res.send(foundUser);
    }else{
        res.status(400).json({msg: `User NOT FOUND with the id ${id}`});
    }

    
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const isUserExist = users.some(user => user.id === id);
    if(isUserExist){
        users = users.filter(user => user.id !== id);
        res.json({msg: `User with the id: ${id} DELETED from database`});
    }else{
        res.status(400).json({msg: `User NOT FOUND with the id ${id}`});
    }
    
}; 

export const updateUser = (req, res)=>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;

    const user = users.find((user)=>user.id === id);
    if(user){
        if(firstName) user.firstName=firstName;
        if(lastName) user.lastName=lastName;
        if(age) user.age=age;
        res.json({msg: `User with the id ${id} UPDATED`});
    }else{
        res.status(400).json({msg: `User NOT FOUND with the id ${id}`});
    };
};