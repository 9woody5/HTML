let mobileBtn = document.querySelector('.mobile-btn');
mobileBtn.addEventListener('click', function(){
  let gnb = document.querySelector('.gnb');

  //gnb.classList.add('on');
  //gnb.classList.remove('on');

  gnb.classList.toggle('on');
});