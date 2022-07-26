const features=document.querySelector('.features');
const company=document.querySelector('.company');

const arrowUp1=document.querySelector('.arrow-up1');
const arrowDown1=document.querySelector('.arrow-down1');
const arrowUp2=document.querySelector('.arrow-up2');
const arrowDown2=document.querySelector('.arrow-down2');

const featuresItems=document.querySelector('.features-items');
const companyItems=document.querySelector('.company-items');

const nav=document.querySelector('.nav-items');
const more=document.querySelector('.more');
const ligne1=document.querySelector('.ligne1')
const ligne2=document.querySelector('.ligne2')
const ligne3=document.querySelector('.ligne3')

const links=document.querySelectorAll('.nav-items li,button')


features.addEventListener('click',()=>{
 if( arrowUp1.style.display==="inline"){
    arrowUp1.style.display="none";
    arrowDown1.style.display="inline";
    featuresItems.style.display="none"
 }else{
    arrowUp1.style.display="inline";
    arrowDown1.style.display="none";
    featuresItems.style.display="block";
    
 }
   
   

})
company.addEventListener('click',()=>{
   if( arrowUp2.style.display==="inline"){
      arrowUp2.style.display="none";
      arrowDown2.style.display="inline";
      companyItems.style.display="none"
   }else{
      arrowUp2.style.display="inline";
      arrowDown2.style.display="none";
      companyItems.style.display="block"
   
   }
     
     
  
  })

  more.addEventListener('click',()=>{
   nav.classList.toggle('nav-active');
   ligne1.classList.toggle('ligne1an');
   ligne2.classList.toggle('ligne2an');
   ligne3.classList.toggle('ligne3an');
  
   links.forEach((link,index)=>{
      if(link.style.animation){
          link.style.animation=''
      }
      else{
        link.style.animation=`navLinkFade 0.5s ease forwards ${index/15}s`
     
      }
    })

})