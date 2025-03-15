export async function createOrder(req, res) {
    try{
        const order = await Order.create(req.body);
        res.status(201).json(order);
    }catch(error){
        console.error("Error creating order: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getOrders(req, res){
    try{
        const orders = await Order.findAll();
        res.status(200).json(orders);
    }catch(error){
        console.error("Error getting orders: ", error);
        res.status(500).json({message: "Internal server error"});
    }   
}

export async function getOrderById(req, res){
    const orderId = req.params.id;
    try{
        const order = await Order.findByPk(orderId);
        res.status(200).json(order);
    }catch(error){
        console.error("Error getting order: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updateOrder(req, res){
    try{
        const orderId = req.params.id;
        const order = await Order.findByPk(orderId);
        if(!order) return res.status(404).json({message: "Order not found"});
        order.update(req.body);
        res.status(200).json(order);
    }catch(error){
        console.error("Error updating order: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteOrder(req, res){
    try{
        const orderId = req.params.id;
        const order = await Order.findByPk(orderId);
        if(!order) return res.status(404).json({message: "Order not found"});
        await order.destroy();
        res.status(200).json({message: "Order deleted"});
    }catch(error){
        console.error("Error deleting order: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getOrdersByUserId(req, res){
    const userId = req.params.id;
    try{
        const orders = await Order.findAll({where: {userId}});
        res.status(200).json(orders);
    }catch(error){
        console.error("Error getting orders: ", error);
        res.status(500).json({message: "Internal server error"});
    }   
}

export async function getOrdersByClothingId(req, res){
    const clothingId = req.params.id;
    try{
        const orders = await Order.findAll({where: {clothingId}});
        res.status(200).json(orders);
    }catch(error){
        console.error("Error getting orders: ", error);
        res.status(500).json({message: "Internal server error"});
    }   
}