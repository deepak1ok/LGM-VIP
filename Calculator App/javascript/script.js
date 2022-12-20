let main = document.querySelector('main');
let container = document.querySelector('.container')
let display_sec = document.querySelector('.display-section')
let theme_sec = document.querySelector('.theme-section')
let num_sec = document.querySelector('.number-section');
let theme_change = document.querySelector('.theme-change');

var theme = document.querySelectorAll('.th');
var theme1 = document.querySelector('#th-1');
var theme2 = document.querySelector('#th-2');
var theme3 = document.querySelector('#th-3');
var resBtn = document.querySelector('#reset');
var delBtn = document.querySelector('#del');
var equalBtn = document.querySelector('#equal');
let numBtn = document.querySelectorAll('.num');
let span = document.querySelectorAll('span');
let p = document.querySelectorAll('p');



let text = '';

// Calculate
equalBtn.addEventListener('click', (e) => {
    if (text.length > 0) {
        text = Math.round(eval(text) * 1000000) / 1000000;
        document.querySelector(".display-section p").innerText = text;
        text = "" + text;
    }

});


// Reset
resBtn.addEventListener('click', (e) => {
    text = '';
    document.querySelector(".display-section p").innerText = text;
})
numBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (text.length == 0) {
            if (e.target.innerText != '.' && isNaN(e.target.innerText)) {
                text = text;
            } else {
                text += e.target.innerText;
            }
            document.querySelector(".display-section p").innerText = text;
        }
        // operator
        else if (((e.target.innerText == '/' || e.target.innerText == '+') || (e.target.innerText == '*' || e.target.innerText == '-'))) {
            if (isNaN(text.substring(text.length - 1, text.length))) {
                console.log(text.substring(text.length - 1, text.length))
                text = text;
            } else {
                text += e.target.innerText;
            }
            document.querySelector(".display-section p").innerText = text;
        }
        // .
        else if (e.target.innerText == '.') {
            if ((text.substring(text.length - 1, text.length)) == '.') {
                console.log(text.substring(text.length - 1, text.length))
                text = text;
            } else {
                text += e.target.innerText;
            }
            document.querySelector(".display-section p").innerText = text;
        }
        // delete back
        else if (e.target.innerText == 'DEL') {
            console.log(text)
            text = text.slice(0, -1);
            document.querySelector(".display-section p").innerText = text;
        }
        // decimal
        else if (e.target.innerText == '.') {
            text += e.target.innerText;
            document.querySelector(".display-section p").innerText = text;
        }
        // number
        else if (!isNaN(e.target.innerText)) {
            text += e.target.innerText;
            document.querySelector(".display-section p").innerText = text;
        } else {
            document.querySelector(".display-section p").innerText = text;
        }
    })
})



// key event
document.addEventListener('keydown', function(e) {
    if ((isFinite(e.key))) {
        text += e.key;
        document.querySelector(".display-section p").innerText = text;
    } else if ('+-/*'.includes(e.key)) {
        if (isNaN(text.substring(text.length - 1, text.length))) {
            text = text;
        } else {
            text += e.key;
        }
        document.querySelector(".display-section p").innerText = text;

    } else if (e.key === '.') {
        text += e.key;
        document.querySelector(".display-section p").innerText = text;
    } else if (e.key === '=' || (e.key === 'Enter')) {
        if (text.length > 0) {
            text = Math.round(eval(text) * 1000000) / 1000000;
            document.querySelector(".display-section p").innerText = text;
            text = "" + text;
        }
    } else if (e.key === 'Delete') {
        text = '';
        document.querySelector(".display-section p").innerText = text;

    } else if (e.key === 'Backspace') {
        text = text.slice(0, -1);
        document.querySelector(".display-section p").innerText = text;
    } else {
        text = text;
        document.querySelector(".display-section p").innerText = text;
    }
});

if (text.length > 20) {
    text = text;
    document.querySelector(".display-section p").innerText = text;
}






/* Theme JavaScript -----------------------------------------------------------------------------*/

theme1.addEventListener('click', () => {
    theme_change.style.backgroundColor = `hsl(${223}, ${31}%, ${20}%)`
    main.style.backgroundColor = `hsl(${222}, ${26}%, ${31}%)`;
    container.style.backgroundColor = `hsl(${222}, ${26}%, ${31}%)`;
    num_sec.style.backgroundColor = `hsl(${223}, ${31}%, ${20}%)`;
    display_sec.style.backgroundColor = `hsl(${224}, ${36}%, ${15}%)`;


    p.forEach(txt => {
        txt.style.color = `hsl(${0}, ${0}%, ${100}%)`;
    })
    span.forEach(txt => {
            txt.style.color = `hsl(${0}, ${0}%, ${100}%)`;
        })
        // btns
    numBtn.forEach(btn => {
            btn.style.color = 'black';
            btn.style.backgroundColor = `hsl(${30}, ${25}%, ${89}%)`;
            btn.style.boxShadow = `${0} ${4}px ${0} ${0.2}px hsl(${28}, ${16}%, ${65}%)`;
        })
        //reset
    resBtn.style.backgroundColor = `hsl(${225}, ${21}%, ${49}%)`;
    resBtn.style.color = `hsl(${0}, ${0}%, ${100}%)`;
    resBtn.style.boxShadow = `${0} ${4}px ${0} ${0.2}px hsl(${224}, ${28}%, ${35}%)`;
    //delete
    delBtn.style.backgroundColor = `hsl(${225}, ${21}%, ${49}%`;
    delBtn.style.color = `hsl(${0}, ${0}%, ${100}%)`;
    delBtn.style.boxShadow = `${0} ${4}px ${0} ${0}px hsl(${224}, ${28}%, ${35}%)`;
    //equal
    equalBtn.style.backgroundColor = `hsl(${6}, ${63}%, ${50}%)`;
    equalBtn.style.boxShadow = `${0} ${4}px ${0} ${0.2}px hsl(${6}, ${70}%, ${34}%)`;
    equalBtn.style.color = `hsl(${0}, ${0}%, ${100}%)`;
    //opacity
    theme1.style.backgroundColor = `hsl(${6}, ${63}%, ${50}%)`;
    theme1.style.opacity = 1;
    theme2.style.opacity = 0;
    theme3.style.opacity = 0;

})
theme2.addEventListener('click', () => {
    theme_change.style.backgroundColor = ` hsl(${0}, ${5}%, ${81}%)`
    main.style.backgroundColor = `hsl(${0}, ${0}%, ${90}%)`;
    container.style.backgroundColor = `hsl(${0}, ${0}%, ${90}%)`;
    num_sec.style.backgroundColor = `hsl(${0}, ${5}%, ${81}%)`;
    display_sec.style.backgroundColor = `hsl(${0}, ${0}%, ${93}%)`;

    p.forEach(txt => {
        txt.style.color = `hsl(${160}, ${10}%, ${19}%)`;
    })
    span.forEach(txt => {
            txt.style.color = `hsl(${160}, ${10}%, ${19}%)`;
        })
        // btns
        // btns
    numBtn.forEach(btn => {
        btn.style.color = 'black';
        btn.style.backgroundColor = `hsl(${45}, ${7}%, ${89}%)`;
        btn.style.boxShadow = `${0} ${4}px ${0} ${0.2}px hsl(${35}, ${11}%, ${61}%)`;
    })

    resBtn.style.backgroundColor = `hsl(${185}, ${42}%, ${37}%)`;
    resBtn.style.color = `hsl(${0}, ${0}%, ${100}%)`;
    resBtn.style.boxShadow = `${0} ${4}px ${0} ${0.2}px hsl(${185}, ${58}%, ${25}%)`;
    //delete
    delBtn.style.backgroundColor = `hsl(${185}, ${42}%, ${37}%)`;
    delBtn.style.color = `hsl(${0}, ${0}%, ${100}%)`;
    delBtn.style.boxShadow = `${0} ${4}px ${0} ${0}px hsl(${185}, ${58}%, ${25}%)`;
    //equal
    equalBtn.style.backgroundColor = `hsl(${25}, ${98}%, ${40}%)`;
    equalBtn.style.boxShadow = `${0} ${4}px ${0} ${0.2}px hsl(${25}, ${99}%, ${27}%)`;
    equalBtn.style.color = `hsl(${0}, ${0}%, ${100}%)`;
    //opacity
    theme1.style.opacity = 0;
    theme2.style.backgroundColor = `hsl(${6}, ${63}%, ${50}%)`;
    theme2.style.opacity = 1;
    theme3.style.opacity = 0;

})
theme3.addEventListener('click', () => {
    theme_change.style.backgroundColor = `hsl(${281}, ${89}%, ${26}%)`
    main.style.backgroundColor = `hsl(${268}, ${75}%, ${9}%)`;
    container.style.backgroundColor = `hsl(${268}, ${75}%, ${9}%)`;
    num_sec.style.backgroundColor = `hsl(${268}, ${71}%, ${12}%)`;
    display_sec.style.backgroundColor = `hsl(${268}, ${71}%, ${12}%)`;


    p.forEach(txt => {
        txt.style.color = `hsl(${52}, ${100}%, ${62}%)`;
    })
    span.forEach(txt => {
            txt.style.color = `hsl(${52}, ${100}%, ${62}%)`;
        })
        // btns
    numBtn.forEach(btn => {
            btn.style.color = `hsl(${52}, ${100}%, ${62}%)`;
            btn.style.backgroundColor = `hsl(${268}, ${47}%, ${21}%)`;
            btn.style.boxShadow = `${0} ${4}px ${0} ${0.2}px hsl(${290}, ${70}%, ${36}%)`;
        })
        //reset
    resBtn.style.backgroundColor = `hsl(${281}, ${89}%, ${26}%)`;
    resBtn.style.color = `hsl(${0}, ${0}%, ${100}%)`;
    resBtn.style.boxShadow = `${0} ${4}px ${0} ${0.2}px hsl(${285}, ${91}%, ${52}%)`;
    //delete
    delBtn.style.backgroundColor = `hsl(${281}, ${89}%, ${26}%)`;
    delBtn.style.color = `hsl(${0}, ${0}%, ${100}%)`;
    delBtn.style.boxShadow = `${0} ${4}px ${0} ${0}px hsl(${285}, ${91}%, ${52}%)`;
    //equal
    equalBtn.style.backgroundColor = `hsl(${176}, ${100}%, ${44}%)`;
    equalBtn.style.boxShadow = `${0} ${4}px ${0} ${0.2}px hsl(${177}, ${92}%, ${70}%)`;
    equalBtn.style.color = `hsl(${198}, ${20}%, ${13}%)`;

    //opacity
    theme1.style.opacity = 0;
    theme2.style.opacity = 0;
    theme1.style.backgroundColor = `hsl(${177}, ${92}%, ${70}%)`;
    theme3.style.opacity = 1;

})