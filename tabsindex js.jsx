import './tabs.css'
const TabItem=(props)=>{
    const{tabsList,update,isActive}=props
    const {displayText,tabId}=tabsList
  const updateTab=()=>{
    update(tabId)
  }
   const colorBtn= isActive ? 'active-btn':''
    return(
        <div className='tab-container'>
          <li className="tab-item-container">
            <button onClick={updateTab}>{displayText}</button>
          </li>
          </div>
    )
}

export default TabItem