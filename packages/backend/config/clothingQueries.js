import prisma from "../utils/prisma/prisma";

export function handleError(error) {
    console.error("Error:", error);
    process.exit(1);
}

export async function handleFetchAllClothing() {
    const allClothing = await prisma.clothing.findMany();
    return allClothing;
}

export async function handleAddclothItem({ name, price, category, image_url}) {
    const clothItem = await prisma.clothing.create({
        data: {
            name,
            price,
            category,
            image_url,
        },
    });
    return clothItem;
}

export async function handleEditClothItem(id, name, price, category) {
    const clothItem = await prisma.clothing.update({
        where: {
            id,
        },
        data: {
            name,
            price,
            category,
        },
    });
    return clothItem;
}

export async function handleDeleteclothItem(id) {
    const clothItem = await prisma.clothing.delete({
        where: {
            id,
        },
    });
    return clothItem;
}

export async function handleStoreclothImage(id, image_url) {
    const clothItem = await prisma.clothing.update({
        where: {
            id,
        },
        data: {
            image_url,
        },
    });
    return clothItem;
}

export async function handleFilterByCategory(category) {
    const clothItems = await prisma.clothing.findMany({
        where: {
            category,
        },
    });
    return clothItems;
}

export async function handleMarkAvailability(id, availability) {
    const clothItem = await prisma.clothing.update({
        where: {
            id,
        },
        data: {
            availability,
        },
    });
    return clothItem;
}

export async function handleGetclothItem(id) {
    const clothItem = await prisma.clothing.findUnique({
        where: {
            id,
        }
    })
    return clothItem;
}
