import Header from './_header.js';
import L1 from '../images/_pl1.png';
import L2 from '../images/_pl2.png';
import L3 from '../images/_pl3.png';
import L4 from '../images/_pl4.png';
import L5 from '../images/_pl5.png';
import L6 from '../images/_pl6.png';
import L7 from '../images/_pl7.png';



function App() {
  return (
    <>
    <Header/>

                     <h1 style={{ color: 'white'}} >Reviews
                     </h1>
                     <div class="parallax">
                        <div class="parallax__layer parallax__layer__0">
                           <img src={L1} alt="" />
                        </div>
                        <div class="parallax__layer parallax__layer__1">
                           <img src={L2} alt=""/>
                        </div>
                        <div class="parallax__layer parallax__layer__2">
                           <img src={L3} alt="" />
                        </div>
                        <div class="parallax__layer parallax__layer__3">
                           <img src={L4} alt="" />
                        </div>
                        <div class="parallax__layer parallax__layer__4">
                           <img src={L5} alt="" />
                        </div>
                        <div class="parallax__layer parallax__layer__5">
                           <img src={L6} alt="" />
                        </div>
                        <div class="parallax__layer parallax__layer__6">
                           <img src={L7} alt="" />
                        </div>
                        <div class="parallax__cover"></div>
                     
                     </div>

                     <div className="container z-2 parallax_text">
                        <div className="row justify-content-center text-center">
                           <div className="col-lg-8 col-xl-8">
                              asdfawesfwe
                           </div>
                        </div>
                     </div>
    </>
  );
}

export default App;
