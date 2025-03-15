export async function createUser(req, res) {
    try{
        const {name, email, password} = req.body;
        const user = await User.create({name, email, password});
        res.status(201).json(user);
    }catch(error){
        console.error("Error creating user: ", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function getUsers(req, res) {
    try{
        const users = await User.findAll();
        res.status(200).json(users);
    }catch(error){
        console.error("Error getting users: ", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function getUser(req, res) {
    try{
        const {id} = req.params;
        const user = await User.findByPk(id);
        if(!user) return res.status(404).json({message: "User not found"});
        res.status(200).json(user);
    }catch(error){
        console.error("Error getting user: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}   

export async function updateUser(req, res) {
    try{
        const {id} = req.params;
        const {name, email, password} = req.body;
        const user = await User.findByPk(id);
        if(!user) return res.status(404).json({message: "User not found"});
        user.name = name;
        user.email = email;
        user.password = password;
        await user.save();
        res.status(200).json(user);
    }catch(error){
        console.error("Error updating user: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteUser(req, res) {   
    try{
        const {id} = req.params;
        const user = await User.findByPk(id);
        if(!user) return res.status(404).json({message: "User not found"});
        await user.destroy();
        res.status(200).json({message: "User deleted"});
    }catch(error){
        console.error("Error deleting user: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}