const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
 // clcik event
//  clearBtn.addEventListener('click', runEvent);
// double clcick event
// clearBtn.addEventListener('dblclick',runEvent)
//Mouse down
//  clearBtn.addEventListener('mousedown',runEvent)
//Mouse up
// clearBtn.addEventListener('mouseup',runEvent)
// Mouse enter
// card.addEventListener('mouseenter',runEvent)
//mouse leave
// card.addEventListener('mouseleave',runEvent)

//mouse move
card.addEventListener('mousemove', runEvent)
function runEvent(e){
    console.log(`EVENT TYPE:${e.type}`);

    heading.innerHTML = `MOUSEX ${e.offsetX} MOUSEY${e.offsetY}`;

    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`
}
