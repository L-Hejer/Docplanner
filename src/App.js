import React from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import Cards from './components/cards.js'
import Statistic from './components/statistics.js'
import Office from './components/offices.js'
import Footer from './components/footer.js'

const menu=[
  {title:"About Us",link:"#",name:"aboutus"},
  {title:"Career",link:"#",name:"career"},
  {title:"Departments",link:"#",name:"departments",dropdown:['Marketing & PR','Customer success & sales','IT, Product, Design & UX','Finance & Administration','HR & more']}
]

const card=[
  {name:"service-patients", title:<h3>For patients</h3>, title2:<h2>Find a doctor, book a visit and <br/> solve any health-related doubt</h2>, image:<img src="https://www.docplanner.com/img/screen-marketplace@2x.png" className="image-pc1"/>, option:['CHOOSE COUNTRY','ARGENTINA','AUSTRALIA','BRAZIL','CHILE','COLOMBIA','CZECH','FRANCE','ITALY','MEXICO','PERU','POLAND','PORTUGAL','SPAIN','TURKEY','UK']},
  {name:"service-doctors", title:<h3>For doctors</h3>, title2:<h2>Save time managing visits and<br/> cut no-shows by half</h2>, image:<img src="https://www.docplanner.com/img/screen-saas@2x.png" className="image-pc2"/>}
]

const stat=[
  {name:"countries", image:<img scr="https://www.docplanner.com/img/flag.png" srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x"/>, title:<h5>Leader in <br/>10 countries</h5>,description:<p className="paragraphe-stat2">Poland, Turkey, Spain, Italy,<br/> Czech Republic, Mexico, Brazil,<br/> Colombia, Argentina and Chile</p>},
  {name:"appointments", image:<img scr="https://www.docplanner.com/img/visits.png" srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x"/>, title:<h5>1.5 million appointments</h5>, description:<p className="paragraphe-stat2">booked last month</p>},
  {name2:"patients", image2:<img scr="https://www.docplanner.com/img/patients.png" srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"/>, title2:<h5>30 million unique patients</h5>, description2: <p className="paragraphe-stat2">visit us every month</p>},
  {name2:"doctors", image2:<img scr="https://www.docplanner.com/img/doctors.png" srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"/>, title2:<h5>2 million active doctors</h5>, description2:<p className="paragraphe-stat2">trust in our solutions</p>}
]

const offices=[
  {name:"pays warsaw", image:<img scr="https://www.docplanner.com/images/warsaw.png" srcset="https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x"/>, title:<h5 className="offices-pays">Warsaw</h5>,button:<button className="seeopenings">SEE OPENINGS</button>},
  {name:"pays barcelona", image:<img scr="https://www.docplanner.com/images/barcelona.png" srcset="https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x"/>, title:<h5 className="offices-pays">Barcelona</h5>,button:<button className="seeopenings">SEE OPENINGS</button>},
  {name:"pays istanbul", image:<img scr="https://www.docplanner.com/images/istanbul.png" srcset="https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x"/>,title:<h5 className="offices-pays">Istanbul</h5>,button:<button className="seeopenings">SEE OPENINGS</button>},
  {name2:"pays rome", image2:<img scr="https://www.docplanner.com/images/rome.png" srcset="https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x"/>, title2:<h5 className="offices-pays">Rome</h5>, button2:<button className="seeopenings">SEE OPENINGS</button>},
  {name2:"pays mexicocity", image2:<img scr="https://www.docplanner.com/images/mexico-city.png" srcset="https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x"/>, title2:<h5 className="offices-pays">Mexico City</h5>, button2:<button className="seeopenings">SEE OPENINGS</button>},
  {name2:"pays curitiba", image2:<img scr="https://www.docplanner.com/images/curitiba.png" srcset="https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x"/>, title2:<h5 className="offices-pays">Curitiba</h5>, button2:<button className="seeopenings">SEE OPENINGS</button>}
]




function App() {

  return (
  <div>
  <Navbar menulist={menu}/>
  <Cards card={card}/>
  <Statistic stat={stat}/>
  <Office offices={offices}/>
  <Footer/>
  </div>
  );
}

export default App;
