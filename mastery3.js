
    var wishListContainer=document.getElementById('destinationContainer')
function createDestinationCard(name,location,photo,description){


    let  card=document.createElement('div')
    card.className='card'
    wishListContainer.appendChild(card)
    
    let img=document.createElement('img')
    img.setAttribute('alt',name);
    let constPhotoUrl="https//cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg"
   if (photo.length===0){
           img.setAttribute('src',constPhotoUrl)
   }
   else{
 
     img.setAttribute('src',photo)
   }
   card.appendChild(img)
   
 
 
   let cardBody=document.createElement('div')
   cardBody.className="card-body"
//    card.appendChild(cardBody)
 
   let cardTitle=document.createElement('h3')
   cardTitle.innerText=name
   cardBody.appendChild(cardTitle)
 
   
   let cardLocation=document.createElement('h4')
   cardLocation.innerText=location
   cardBody.appendChild(cardLocation)
 
   if(description.length !=0){
     var cardDesc=document.createElement('p')
     cardDesc.className="card-text"
     cardDesc.innerText=description
     cardBody.appendChild(cardDesc)
   }
   
   var cardDel=document.createElement("button")
   cardDel.innerText="remove"
   cardBody.appendChild(cardDel)
   card.appendChild(cardBody)
   cardDel.addEventListener('click',function(event){
    wishListContainer.removeChild(card)
   })
   return card;
 }



    
       




let formEl=document.getElementById('destinationDetailsForm')
formEl.addEventListener('submit',function(event){
       event.preventDefault();
    let destName=document.getElementById('name').value
        
    console.log(destName);
    let destLocation=document.getElementById('location').value
          
    console.log(destLocation);
    let destPhoto=document.getElementById('photo').value
          
    console.log(destPhoto);
    let destDesc=document.getElementById('description').value
          
    console.log(destDesc);
    if( wishListContainer.children.length==0){
        document.getElementById('title').innerHTML="my wish list"
    }
    

    

    
    
      
 createDestinationCard(destName,destLocation,destPhoto,destDesc)



})
for(let i=0;i<detailsForms.length;i++){
    detailsForms.elements[i].value=""
}



