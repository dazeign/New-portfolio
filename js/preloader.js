let progress = document.getElementById('progress');


var queue = new createjs.LoadQueue(false);

// queue.on("fileload", handleFileComplete);
queue.on('progress', event => {
    let progress = Math.floor(event.progress * 100);
    this.progress.style.width = progress + '%';
    if (progress == 100) {
        console.log('all done');
        document.querySelector('body').style.background = 'white'
    }
})
queue.on('complete', event => {
    gallery.classList.add('fadeIn');
    setTimeout(() => {
        progress.classList.add('expand');
    }, 500)

})