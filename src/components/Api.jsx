// services/api.js
const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
};

const fetchUser = async (userId) => {
    return fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

const fetchPosts = async (userId) => {
    return fetchData(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
};

export { fetchUser, fetchPosts };
