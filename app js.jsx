import {Component} from 'react'
import TabItem from './components/userProfile/tabsindex'
import ProjectItem from './components/userProfile/projectindex'
import './App.css'
import Header  from './components/userProfile/headerindex'

const tabsList=[

   { 
    tabId:'STATIC',
    displayText:'Static'
   },
   {
     tabId:'RESPONSIVE',
     displayText:'Responsive'
   },
   {
    tabId:'DYNAMIC',
    displayText:'Dynamic'
   }
]
const projectLists=
   
    [
        {
          projectId: 0,
          category: 'STATIC',
          imageURL: 'https://media.istockphoto.com/id/1182863271/photo/musical-score.jpg?s=170667a&w=0&k=20&c=p1GaeNorWbRsx05y0oZa2hjZRYUBzDHImEJ6LnO1ruU=',
          title: 'Music Page',
          description:
            'The music page enables the users to browse through the images of all-time favorite music albums.',
        },
        {
          projectId: 1,
          category: 'STATIC',
          imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
          title: 'Tourism Website',
          description:
            'A tourism website enables the user to browse through the images of popular destinations.',
        },
        {
          projectId: 2,
          category: 'STATIC',
          imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
          title: 'Advanced Technologies',
          description:
            'A website that gives you a basic understanding of Advanced Technologies.',
        },
           {
             projectId: 3,
             category: 'STATIC',
             imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
             title: 'Happy Meals',
             description: 'Discover the best foods in over 1,000 restaurants.',
           },
        {
          projectId: 4,
          category: 'RESPONSIVE',
          imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
          title: 'VR Website',
          description:
            'VR Website enables users to explore AR and VR Products and Industry happenings.',
        },
        {
          projectId: 5,
          category: 'RESPONSIVE',
          imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
          title: 'Food Munch',
          description: 'Food Much Website is a user-centric food tech website.',
        },
        {
          projectId: 6,
          category: 'RESPONSIVE',
          imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
          title: 'Portfolio',
          description:
            'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
        },
       {
         projectId: 7,
         category: 'RESPONSIVE',
         imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
         title: 'Design',
         description:
           'A website to showcase the best features and give more information about the Design tool.',
       },
        {
          projectId: 8,
          category: 'DYNAMIC',
          imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
          title: 'Speed Typing Test',
          description:
            'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
        },
        {
          projectId: 9,
          category: 'DYNAMIC',
          imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
          title: 'Random Joke Page',
          description:
            'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
        },
        {
          projectId: 10,
          category: 'DYNAMIC',
          imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
          title: 'Sizing An Image',
          description:
            'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
        },
      ]


class App extends Component{
 

  state={activeTab:tabsList[0].tabId}
  update=tabId=>{
      this.setState({
        activeTab:tabId
      })
  }
      render(){
            const {activeTab}=this.state
            const filteredTabs=projectLists.filter(eachList=>activeTab===eachList.category)
        return(
            <div>
                <Header />
        <h1 className="title">Projects</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>
      
            <ul className='tabUl'>
             {tabsList.map(eachList=>
                 <TabItem tabsList={eachList} key={eachList.tabId} update={this.update}
                 isActive={activeTab===tabsList.tabId}/>
             )}
             </ul>
             <ul className='projectUl'>
                {filteredTabs.map(eachProject=>
                     <ProjectItem  projectLists={eachProject} key={eachProject.projectId}/>
                    )}
             </ul>

             </div>
        
        )
      }
}
export default App