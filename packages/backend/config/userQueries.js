import prisma from './prisma';

export function handleError(error) {
    console.error("Error:", error);
    process.exit(1);
}

export async function handleCreateUser(email, password, role, name, phone){
    const user = await prisma.user.create({
        data: {
            email,
            password,
            role,
            name,
            phone,
        }
    });
    return user;
}


export async function handleUpdateUser(id, name, email, password, phone, role){
    const user = await prisma.user.update({
        where: {
            id,
        },
        data: {
            name,
            email,
            password,
            phone,
            role
        }
    });
    return user;
}

export async function handleDeleteUser(id){
    const user = await prisma.user.delete({
        where: {
            id,
        }
    });
    return user;
}

export async function handleGetUser(id){
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    });
    return user;
}

export async function handleGetAllUsers(){
    const users = await prisma.user.findMany();
    return users;
}

