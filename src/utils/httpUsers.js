const API_USERS = 'https://jsonplaceholder.typicode.com/users';

export async function getUsers () {
    const res = await fetch(API_USERS);
    return await res.json(); 
}