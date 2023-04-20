const ProjectItem=(props)=>{
    const {projectLists}=props
    const {imageURL,title,description,projectId}=projectLists
  
  return(
      
      
      <div className="project-con">
          
   <li>
      <img src={imageURL}  alt={`project-item${projectId}`} className="project-img"/>
   
        <div className="project-item-title">
         <h1>{title}</h1>
         </div>
         <div className="project-item-para">
         <p>{description}</p>
         </div>
   </li>
   </div>
  
  )

}
export default ProjectItem