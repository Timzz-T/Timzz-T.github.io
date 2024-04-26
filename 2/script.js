const gifs = ['Images/rage.gif', 'Images/pc-man.gif', 'Images/rip-rage.gif', 'Images/youtube-rage.gif']

let currentgifnum = 1;

const gifElement = document.getElementById('makingif')


function cyclegifs() {
    gifElement.src = gifs[currentgifnum]
    currentgifnum += 1
    if (currentgifnum >= gifs.length) {
        currentgifnum = 0
    } 
}

function toggleMenu(id) {
    var element = document.getElementById(id);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}


document.getElementById('sidebarToggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var main = document.getElementById('main')
    if (sidebar.style.width === '200px') {
        sidebar.style.width = '50px'; // Collapse the sidebar
    } else {
        sidebar.style.width = '200px'; // Expand the sidebar
    }

    if (sidebar.style.width === '50px') {
        main.style.display = 'none';
    } else {
        main.style.display = 'block';
    }
});

document.getElementById('ss').addEventListener('click', function() {
    var makinggifs = document.getElementById('making')
    if (makinggifs.style.display === 'none') {
        makinggifs.style.display = 'block'
    } else {
        makinggifs.style.display = 'none'
    }
});


window.onload = function() {
    setInterval(cyclegifs, 4000)
}