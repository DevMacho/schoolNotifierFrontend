

fetch("https://schoolnotifier.herokuapp.com/")
.then((response) => response.json())
.then((data) => createLIs(data))

function createLIs(data){
    const announcementsUl = document.getElementById("anouncements");
    for(const i of data){
            const li = document.createElement('li');
            announcementsUl.appendChild(li);
            li.classList.add("anouncement");
            const h3 = document.createElement('h3');
            li.appendChild(h3)
            const titleNode = document.createTextNode(i.title);
            h3.appendChild(titleNode);
            h3.classList.add('title');
            const content = document.createElement('p');
            content.classList.add('content');
            li.appendChild(content);
            const contentNode = document.createTextNode(i.content);
            content.appendChild(contentNode);
            const id = document.createElement('p')
            li.appendChild(id)
            id.classList.add("id")
            const idNode = document.createTextNode(i.id);
            id.appendChild(idNode);
    }
}
