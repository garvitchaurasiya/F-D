function onsubmit(e){
    // e.preventDefault();
    console.log('hi');
}

let button = document.querySelector('.addTask');
// let list = document.createElement('ol')
let arr = [];
// console.log(list);
button.addEventListener("click", (e)=>{
    e.preventDefault();
    let input = document.querySelector('input');
    console.log(arr);
    let tasks = document.querySelector('.tasks');

    let task = document.createElement('div');
    task.setAttribute('class', 'task');
    task.innerHTML=input.value;
    
    let removeButton = document.createElement('button')
    removeButton.innerHTML = '✕'
    removeButton.setAttribute('class', 'removeButton')
    removeButton.setAttribute('id', arr.length)
    console.log(removeButton)
    task.appendChild(removeButton);
    
    let upButton = document.createElement('button')
    upButton.innerHTML = '↑'
    upButton.setAttribute('class', 'upButton')
    task.appendChild(upButton);

    let downButton = document.createElement('button')
    downButton.innerHTML = '↓'
    downButton.setAttribute('class', 'downButton')
    task.appendChild(downButton);
    
    arr.push(task);
    
    arr.map((ele, index)=>{
        tasks.appendChild(ele)
    })

    removeButton.addEventListener('click', (e)=>{
        e.preventDefault();
        
        task.remove();
        let index = removeButton.getAttribute('id');
        arr.splice(index, index);
    })
    upButton.addEventListener('click', (e)=>{
        e.preventDefault();
        
        console.log(arr);

        let index = removeButton.getAttribute('id');
        console.log(index);
        let temp = arr[index-1];
        arr[index-1] = arr[index];
        arr[index] = temp;

        // console.log(arr[index])
        // console.log(arr[index].get)
        // console.log(arr[index].task.removeButton);

        console.log(arr);
        console.log('hii')
        tasks.innerHTML = '';
        arr.map((ele, index)=>{
            tasks.appendChild(ele)
        })
    })
    downButton.addEventListener('click', (e)=>{
        e.preventDefault();
        
        let index = removeButton.getAttribute('id');
        arr.splice(index, index);
    })

});