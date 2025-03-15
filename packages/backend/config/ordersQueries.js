import prisma from './prisma';

export function handleError(error) {
    console.error("Error:", error);
    process.exit(1);
}

export async function handleCreateOrder(user_id, total_price) {
    const order = await prisma.order.create({
        data: {
            user_id,
            total_price,
        },
    });
    return order;
}

export async function handleUpdateOrder(id, total_price) {
    const order = await prisma.order.update({
        where: {
            id,
        },
        data: {
            total_price,
        },
    });
    return order;
}

export async function handleDeleteOrder(id) {
    const order = await prisma.order.delete({
        where: {
            id,
        },
    });
    return order;
}


export async function handleGetOrder(id) {
    const order = await prisma.order.findUnique({
        where: {
            id,
        },
        include: {
            order_items: true, 
        },
    });
    return order;
}


export async function handleGetAllOrders() {
    const orders = await prisma.order.findMany({
        include: {
            order_items: true, 
        },
    });
    return orders;
}
