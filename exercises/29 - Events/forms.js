/* eslint-disable */


const wes = document.querySelector('.wes');

wes.addEventListener('click', e => {
    
    // before leaving page, check if user wants to leave..
    const shouldChangePage = confirm('This website can be malasious! 🐛 Do you want to prossed ?');
    
    // If user dont' want to leave,
    if(!shouldChangePage) {
        // prevent default behaviour 🔥
        e.preventDefault();
    }

})