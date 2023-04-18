import './userProfile.css'

const UserProfile=(props)=>{
    const {userDetails,key,DeleteUser}=props
    const {imageUrl,name,role,uniqueNo}=userDetails
   const  onDelete=()=>{
              DeleteUser(uniqueNo)
    }
    return ( 
<li className="user-card-container">
    <img src={imageUrl} className="avatar"/>
    <div className="user_details-container">
    <h1 className="user-name">{name}</h1>
    <p className="user-designation">{role}</p>

    </div>
    <div className='btn'>
    <button className='delete-button' onClick={onDelete} >
        <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="cross" className='delete-img'/>
    </button>
    </div>
</li>
)
}
export  default UserProfile