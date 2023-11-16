async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(url);
    return await response.json();
}

function toHTML(datas) {
    let html = "";

    for(data of datas) {
        html += `<tr>
    <td>${data.name}</td>
    <td>${data.username}</td>
    <td>${data.email}</td>
    <td>${data.phone}</td>
</tr>`;
    }

    return html;
}

//execute la fonction après que le DOM (document html) soit chargé
document.addEventListener('DOMContentLoaded', async () => {
    const target = document.querySelector("#user-table-body");

    target.innerHTML = "<tr><td colspan='4'>En cours de chargement</td></tr>";
    const users = await getUsers();
    const html = toHTML(users);

    target.innerHTML = html;
});