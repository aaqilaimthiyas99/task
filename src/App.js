import './App.css';

function App() {

  return (
    <div className="App">
      <div className='header'>
        <div className='logo'>
          <img src='../assets/Logo.svg' alt=''/>
        </div>
        <nav className='navBar'>
          <h1> 
            SERVICES
          </h1>
          <h1> 
            ABOUT US
          </h1>
          <h1> 
            CONTACT US
          </h1>
          <h1> 
            CAREER
          </h1>
        </nav>
      </div>

      <div className='center'>
        <img src='../assets/background.png' alt='' className='backgroundImg'/>
        <div className='noteBox'>
          <div className='note'>
            <p>
              We crush your competitors, goals, and sales records - without the B.S.
            </p>
          </div>
          <button className='freeConsult'>
            <h1 className='desc'> GET FREE CONSULTATION </h1>
          </button>
        </div>
      </div>
      <div className='body'>
        <div className='box1'>
          <img src='../assets/image 2.png' alt='' className='image1'/>
          <div className='desc1'>
            <h1>
              Web & Mobile App Development
            </h1>
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </p>
            <button className='learnmore'> 
              <p> LEARN MORE </p> 
            </button>
          </div>
        </div>
        <div className='box2'>
          <div className='desc2'>
            <h1>
              Digital Strategy Consulting
            </h1>
            <p>
              Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <button className='learnmore2'> 
              <p> LEARN MORE </p> 
            </button>
          </div>
          <img src='../assets/image 1.png' alt='' className='image2'/>
        </div>
      </div>
      <div className='footer'>
        <div className='footerupper'>
          <div className='leftpart'>
            <img src='../assets/Logo.svg' alt='' className='footerlogo'/>
            <p>
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </div>
          <div className='rightpart'>
            <div className='technologies'>
              <h1>
                Our Technologies
              </h1>
              <p>
                <p1>ReactJS</p1> 
                <p2>Gatsby</p2> 
                <p3>NextJS</p3> 
                <p4>NodeJS</p4> 
                <p5>GraphQL</p5> 
                <p6>Laravel</p6> 
              </p>
            </div>
            <div className='services'>
              <h1>
                Our Services
              </h1>
              <p>
                <p1>Social media Marketing</p1>
                <p2>Web & Mobile App Development</p2>
                <p3>Data & Analytics</p3>
                <p4>Google Marketing solutions</p4>
                <p5>Search Engine Optimization</p5>
              </p>
            </div>
          </div>
        </div>
        <div className='footerlower'>
          <div className='line'/>
          <p> Privacy Policy | Terms & Conditions </p>
        </div>
      </div>
    </div>
  );
}

export default App;
