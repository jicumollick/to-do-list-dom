
let count = 0;

document.getElementById('plus').addEventListener('click', function(e){
    count++;
    document.getElementById('count').innerText = count;
})

document.getElementById('minus').addEventListener('click',function(e){
    
    count--;
    if(count < 0){
        count = 0;
    }
    document.getElementById('count').innerText = count;   
})

