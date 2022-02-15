
let count = 0;

document.getElementById('add-btn').addEventListener('click',function(){
    count++;
    let inputValue = document.getElementById('user-input').value;

if(inputValue == ""){
    alert('please enter a value');
}else {

    const mainContainer = document.getElementById('table-container');

    const tableContainer = document.createElement('tr');
    tableContainer.innerHTML = `<th>${count}</th>
    <td>${inputValue}</td>
    <td><button class='btn btn-danger delete-btn'>Delete</button>
    <button class='btn btn-success done-btn'>Done</button></td>`;

    mainContainer.appendChild(tableContainer);
    
}

document.getElementById('user-input').value = '';

const deleteButton = document.getElementsByClassName('delete-btn');
const doneButton = document.getElementsByClassName('done-btn');

for(let button of deleteButton){
    button.addEventListener('click',function(e){
        e.target.parentNode.parentNode.style.display = 'none';
    })
}

for(let button of doneButton){
    button.addEventListener('click',function(e){
        e.target.parentNode.parentNode.style.textDecoration = 'line-through';
    })
}
})

 function deleteAll(){
    const mainContainer = document.getElementById('table-container');
    mainContainer.textContent = '';
 }

