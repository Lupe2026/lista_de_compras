const categories = ["Alimentação", "Higiene e Limpeza", "Utensílios Domésticos", "Cama, Mesa e Banho", "Bazar"];
let shoppingList = JSON.parse(localStorage.getItem('myList')) || [
 //   { id: 1, name: 'Arroz', category: 'Alimentação' },
 //   { id: 2, name: 'Sabonete', category: 'Higiene e Limpeza' }
];

function renderList() {
    const container = document.getElementById('listsContainer');
    container.innerHTML = '';

    categories.forEach(cat => {
        const filteredItems = shoppingList.filter(item => item.category === cat);
        if (filteredItems.length > 0) {
            const section = document.createElement('div');
            section.className = 'category-section';
            section.innerHTML = `<h3 class="category-title">${cat}</h3><ul id="list-${cat}"></ul>`;
            container.appendChild(section);

            const ul = section.querySelector('ul');
            filteredItems.forEach(item => {
                const li = document.createElement('li');
                if (item.checked) li.classList.add('completed');

                li.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px; flex: 1;" onclick="toggleCheck(${item.id})">
                        <input type="checkbox" ${item.checked ? 'checked' : ''}>
                        <span>${item.name}</span>
                    </div>
                    <div class="actions">
                        <button class="btn-edit" onclick="editItem(${item.id})">Edit</button>
                        <button class="btn-delete" onclick="deleteItem(${item.id})">X</button>
                    </div>
                `;
                ul.appendChild(li);
            });
        }
    });
    localStorage.setItem('myList', JSON.stringify(shoppingList));
}

// Alternar entre marcado e desmarcado
function toggleCheck(id) {
    const item = shoppingList.find(i => i.id === id);
    item.checked = !item.checked;
    renderList();
}

// Função para desmarcar tudo de uma vez
function uncheckAll() {
    if (confirm("Deseja desmarcar todos os itens da lista?")) {
        shoppingList.forEach(item => item.checked = false);
        renderList();
    }
}

function addItem() {
    const name = document.getElementById('itemInput').value;
    const category = document.getElementById('categoryInput').value;
    if (!name) return;

    shoppingList.push({ 
        id: Date.now(), 
        name: name, 
        category: category, 
        checked: false // Novo item sempre começa desmarcado
    });
    document.getElementById('itemInput').value = '';
    renderList();
}

function deleteItem(id) {
    shoppingList = shoppingList.filter(item => item.id !== id);
    renderList();
}

function editItem(id) {
    const item = shoppingList.find(i => i.id === id);
    const newName = prompt("Editar item:", item.name);
    if (newName) {
        item.name = newName;
        renderList();
    }
}

renderList();

window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    
    // Define o tempo de 4000 milissegundos (4 segundos)
    setTimeout(() => {
        splash.classList.add('hidden');
        
        // Remove do DOM após a transição para não atrapalhar o toque na tela
        setTimeout(() => {
            splash.style.display = 'none';
        }, 500); 
    }, 4000);
 });
