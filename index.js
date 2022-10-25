let topLeft = document.getElementById('topLeft');
let topRight = document.getElementById('topRight');
let bottomLeft = document.getElementById('bottomLeft');
let bottomRight = document.getElementById('bottomRight');
let topLeftText = document.getElementById('topLeftText');
let topRightText = document.getElementById('topRightText');
let bottomLeftText = document.getElementById('bottomLeftText');
let bottomRightText = document.getElementById('bottomRightText');

let element = document.getElementById('element');
let button = document.getElementById('button');


function changeTopLeftRadius (border) {

    element.style.borderTopLeftRadius = `${border}px`;
    topLeft.style.borderTopLeftRadius = `${border}px`;
    topRight.style.borderTopLeftRadius = `${border}px`;
    bottomLeft.style.borderTopLeftRadius = `${border}px`;
    bottomRight.style.borderTopLeftRadius = `${border}px`;
    
}

function changeTopRightRadius (border) {

    element.style.borderTopRightRadius = `${border}px`;
    topLeft.style.borderTopRightRadius = `${border}px`
    topRight.style.borderTopRightRadius = `${border}px`;
    bottomLeft.style.borderTopRightRadius = `${border}px`
    bottomRight.style.borderTopRightRadius = `${border}px`

}

function changeBottomLeftRadius (border) {

    element.style.borderBottomLeftRadius = `${border}px`;
    topLeft.style.borderBottomLeftRadius = `${border}px`
    topRight.style.borderBottomLeftRadius = `${border}px`;
    bottomLeft.style.borderBottomLeftRadius = `${border}px`
    bottomRight.style.borderBottomLeftRadius = `${border}px`
}

function changeBottomRightRadius (border) {

        element.style.borderBottomRightRadius = `${border}px`;
        topLeft.style.borderBottomRightRadius = `${border}px`
        topRight.style.borderBottomRightRadius = `${border}px`;
        bottomLeft.style.borderBottomRightRadius = `${border}px`
        bottomRight.style.borderBottomRightRadius = `${border}px`
    }

topLeft.addEventListener('keyup', () => {
    changeTopLeftRadius(topLeft.value);
    topLeftText.innerText = `border-top-left-radius: ${topLeft.value}px`;
    if(topLeft.value == '')
    {
        topLeftText.innerText = ``;
    }
});

topRight.addEventListener('keyup', () => {
    changeTopRightRadius(topRight.value);
    topRightText.innerText = `border-top-right-radius: ${topRight.value}px`;
    if(topRight.value == '')
    {
        topRightText.innerText = ``;
    }
});

bottomLeft.addEventListener('keyup', () => {
    changeBottomLeftRadius(bottomLeft.value);
    bottomLeftText.innerText = `border-bottom-left-radius: ${bottomLeft.value}px`;
    if(bottomLeft.value == '')
    {
        bottomLeftText.innerText = ``;
    }
});

bottomRight.addEventListener('keyup', () => {
    changeBottomRightRadius(bottomRight.value);
    bottomRightText.innerText = `border-bottom-right-radius: ${bottomRight.value}px`;
    if(bottomRight.value == '')
    {
        bottomRightText.innerText = ``;
    }
});


