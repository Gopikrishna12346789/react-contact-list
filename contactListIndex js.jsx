import './contact.css'
const ContactItem=(props)=>{
      const{ContactLists,toggle}=props
      const{name,mobileNo,id,isFavourite}=ContactLists

  const starImgUrl = isFavourite
  ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
  : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  const onToggleButton=()=>{
     toggle(id)
  }
    return(
        <div className='main-box'>
           <div className='box'>
           <li>
             <div className='flo'>
                <p>{name}</p>
             </div>
             
             
             <div className='flo'>
                <p>{mobileNo}</p>
                </div>
                
                
                <div className='flo'>
                <button type="submit" onClick={onToggleButton}><img src={starImgUrl}/></button>
                </div>
             
        
           </li>
           </div>
    </div>
    )
}
export default ContactItem