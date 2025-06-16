// step 1: Define async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // step 2
    const dataContainer = document.getElementById('api-data'); // Step 3

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = ''; //Step 5: Clear loading text

        const userList = document.createElement('ul'); // Step 6

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        dataContainer.appendChild(userList); //Add list to page

    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.'; //Step 7
        console.error('Error fetching users:', error);
    }
}
//step 8: call function on DOM load
document.addEventListener('DOMContentLoaded', fetchUserData);