import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ContactItem from './components/userProfile/contactindex'
 


const initialContactLists=[

  {
        id:uuidv4(),
        name:"gopi krishan",
        mobileNo:9381324221,
        isFavourite:false
  },
  {
    id: uuidv4(),
    name:"Lakshman sai",
    mobileNo:2281324343,
    isFavourite:false
  },
  {
    id: uuidv4(),
    name:"manoj kuamar",
    mobileNo:4531324221,
    isFavourite:false
  },
  { 
    id: uuidv4(),
    name:"hemanth naidu",
    mobileNo:9381324221,
    isFavourite:false
  }
]



class App extends Component{
      state={
      ContactLists:initialContactLists,
      name:'',
      mobileNo:''
      }
      onChange=(event)=>{
        this.setState({
               name:event.target.value
        })
        
      }
      onMobileNo=(event)=>{
        this.setState(
          {
            mobileNo:event.target.value
          }
        )
      }
      onSubmit=(event)=>{
              event.preventDefault();
              const{name,mobileNo}=this.state
            const newContact={
              id:uuidv4(),
              name,
              mobileNo,
              isFavourite:false
            }
            this.setState(prevState=>({
                ContactLists:[...prevState.ContactLists,newContact],
                name:'',
                mobileNo:''
            }))
      }
      toggle=(id)=>{
      
        this.setState(prevState=>({
          ContactLists:prevState.ContactLists.map(eachList=>{
            if(id===eachList.id){
              return {...eachList,isFavourite:!eachList.isFavourite}
            }
            return eachList
          }),
  
          }))
        }
      

   render(){

         const {name,mobileNo,ContactLists}=this.state
    return(
      <div>
        <h1 className='heading'>Contacts</h1>
      <form className='form-style' onSubmit={this.onSubmit}>
      <input value={name} onChange={this.onChange} className='inp' placeholder='add name'/>
      <input value={mobileNo} onChange={this.onMobileNo}  className='inp' placeholder='add mobileNo'/>
      <button type="submit" className='btn-sub'>ADD CONTACT</button>
      </form>
      
        <ul className='con-conta'>
              {ContactLists.map(eachList=>(
                <ContactItem ContactLists={eachList} key={eachList.id}  toggle={this.toggle}/>
                
            ))}
            </ul>
            </div>
            
    )
   }

  }   
  
  




  
  export default App
  