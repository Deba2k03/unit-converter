var inchss = document.getElementById('inch');
var feetss = document.getElementById('feet');

feet.addEventListener('input',function() {
    let f = this.value;
    let i = f*12;
    inchss.value=i;
});
inch.addEventListener('input',function() {
    let i = this.value;
    let f = i/12;
    if(!Number.isInteger(f)) {
        f = f.toFixed(2);
    }
    feetss.value=f;
});