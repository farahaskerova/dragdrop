// const empties = document.querySelector('.empty');
// const containers = document.querySelectorAll('.container');


// empties.forEach(empty =>{
//     empty.addEventListener('dragstart', () => {
//         empty.classList.add('dragg');
//     })
// })

// empty.addEventListener('dragged', () => {
//     empty.classList.remove('dragg')
// })

// containers.forEach(container =>{
//     container.addEventListener('dragover', e =>{
//             console.log('dragover')
//         })

// })


const drag = document.querySelector('.drag');
const empties = document.querySelectorAll('.empty');

drag.addEventListener('dragstart', dragStart);
drag.addEventListener('dragend', dragEnd);


for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragover', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


function dragStart() {
    this.className += 'hold';
    setTimeout(() =>  (this.className = 'invisable'),0);
}

function dragEnd() {
    this.className = 'drag';
}

function dragOver(e) {
    e.preventDefault();
    // console.log('over');
}

function dragEnter(e) {
    e.preventDefault();
    this.className += 'hovered';
    // console.log('enter');
}

function dragLeave() {
    this.className = 'empty';
    // console.log('leave');
}

function dragDrop() {
    this.className = 'empty';
    this.append(drag)
    // console.log('drop');
}

