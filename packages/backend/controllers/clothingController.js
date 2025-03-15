export async function createClothing(req, res) {
    try{
        const clothing = await Clothing.create(req.body);
        res.status(201).json(clothing);
    }catch(error){
        console.error("Error creating clothing: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getClothingById(req, res){
    const clothingId = req.params.id;
    try{
        const clothing = await user;
        res.status(200).json(user);
    }catch(error){
        console.error("Error getting user: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getAllClothing(req, res){
    try{
        const clothing = await Clothing.findAll();
        res.status(200).json(clothing);
    }catch(error){
        console.error("Error getting clothing: ", error);
        res.status(500).json({message: "Internal server error"});
    }   
}

export async function updateClothing(req, res){
    try{
        const clothing = await clothing;
        res.status(200).json(clothing);
    }catch(error){
        console.error("Error updating clothing: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteClothing(req, res){
    try{
        const clothing = await clothing;
        res.status(200).json({message: "Clothing deleted"});
    }catch(error){
        console.error("Error clothing user: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}