let button = document.querySelector('.addTask');
let arr = [];

button.addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.querySelector('input');
    console.log(arr);
    let tasks = document.querySelector('.tasks');

    let task = document.createElement('div');
    task.setAttribute('class', 'task');
    
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
    
    let span = document.createElement('span');
    span.innerText = input.value;
    task.appendChild(span);

    arr.push(task);

    arr.map((ele, index) => {
        tasks.appendChild(ele)
    })

    removeButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(arr);

        task.remove();
        let index = removeButton.getAttribute('id');
        for(var i = 0; i<arr.length; i++){
            let ele = arr[i];
            let id = ele.querySelector('.removeButton').getAttribute('id');
            console.log(id);
        }
        arr.splice(index, 1);

        for(var i = index; i<arr.length; i++){
            let ele = arr[i];
            console.log(ele)
            let id = ele.querySelector('.removeButton').getAttribute('id');
            id = parseInt(id);
            ele.querySelector('.removeButton').setAttribute('id', id-1);
        }
        // for(var i = 0; i<arr.length; i++){
        //     let ele = arr[i];
        //     let id = ele.querySelector('.removeButton').getAttribute('id');
        //     console.log(id);
        // }

        console.log(arr);


    })
    upButton.addEventListener('click', (e) => {
        e.preventDefault();

        let index = removeButton.getAttribute('id');
        if (index > 0) {
            removeButton.setAttribute('id', index - 1);

            let prevElement = arr[index - 1];
            prevElement.querySelector('.removeButton').setAttribute('id', index);

            let temp = arr[index - 1];
            arr[index - 1] = arr[index];
            arr[index] = temp;

            tasks.innerHTML = '';

            arr.map((ele, index) => {
                tasks.appendChild(ele)
            })
        }
    })
    downButton.addEventListener('click', (e) => {
        e.preventDefault();

        let index = removeButton.getAttribute('id');
        index = parseInt(index);
        if (index < arr.length-1) {
            
            removeButton.setAttribute('id', index+1);

            let nextElement = arr[index+1];
            console.log(index+1, arr, nextElement);
            nextElement.querySelector('.removeButton').setAttribute('id', index);

            let temp = arr[index + 1];
            arr[index + 1] = arr[index];
            arr[index] = temp;

            tasks.innerHTML = '';
            arr.map((ele, index) => {
                tasks.appendChild(ele)
            })
        }

    })

});