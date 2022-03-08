let imagens= document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal="";
var modal_img = document.querySelector('#modal_img');
var images = ['01.jpeg','02.jpeg','03.jpeg','04.jpeg','05.jpeg','06.jpeg','07.jpeg','08.jpeg','09.jpeg','10.jpeg','11.jpeg','12.jpeg','13.jpeg','14.jpg','15.jpeg','20.jpg','21.jpg','18.jpg','22.jpeg','23.jpeg','24.jpeg']
var i = 0;

function prev(){
    if(i>= images.length - 1) i= -1;
    i++;
    return setImg();
    

}

function next(){
    if(i<= 0) i = images.length;
    i--;
    return setImg();

}

function setImg(){
    return modal_img.setAttribute('src', 'imagens/'+images[i]);
}



for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');

    });
    
}

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});