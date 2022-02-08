// import profilePic from '../images/_profile_pic.jpg';
import gall1 from '../images/gall1.jpg';
import gall2 from '../images/gall2.jpg';
import gall3 from '../images/gall3.jpg';
import gall4 from '../images/gall4.jpg';
import gall5 from '../images/gall5.jpg';
import gall6 from '../images/gall6.jpg';
import gall7 from '../images/gall7.jpg';
import gall8 from '../images/gall8.jpg';
import gall9 from '../images/gall9.jpg';

import ps1 from '../images/ps1.jpg';
import ps2 from '../images/ps2.jpg';
import ps3 from '../images/ps3.jpg';
import ps4 from '../images/ps4.jpg';
import ps5 from '../images/ps5.jpg';
import ps6 from '../images/ps6.jpg';
import ps7 from '../images/ps7.jpg';
import ps8 from '../images/ps8.jpg';

import iot_project from '../images/iot_project.mp4';
// import after_3 from '../images/after_3.mp4';
import after_3 from '../images/iot_project.mp4';

import '../css/index.css';
import Header from './_header.js';
import Footer from './_footer.js';
function App() {
  return (
    <>
    <Header/>

      <main>
         <section className="section section-lg">
   
            <div className="container">
            
            <div className="col-12 pt-2 col-md-8 text-md-center mx-auto">
               <h2 className="h1 font-weight-light mb-4"><span className="font-weight-bold">Photography</span></h2>
               <p className="lead">capture some moments...............................................................................</p>
            </div>
            <div className="container">
               <div className="row align-items-center ml-9">
                  <div className="col-lg-5">
                     <div className="row" style={{width:'450px'}}>
                        <div className="col-md-5 mr-3">
                           <div className="row mt-5 mt-lg-0">
                              <div className="col-md-12 pr-0">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={gall1} alt=""/>
                                   </div>
                              </div>
                              <div className="col-md-12 pr-0">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={gall5} alt="" />
                                  </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-5 mt-6">
                           <div className="row">
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={gall3} alt=""/>
                                  </div>
                              </div>
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={gall4} alt="" />
                                  </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-12 col-lg-5 d-none d-lg-block">
                     <div className="row" style={{width:'450px'}}>
                        <div className="col-md-5 mr-3">
                           <div className="row mt-5 mt-lg-0">
                              <div className="col-md-12 pr-0">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={gall9} alt=""/>
                                   </div>
                              </div>
                              <div className="col-md-12 pr-0">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={gall6} alt="" />
                                  </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-5 mt-6">
                           <div className="row">
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={gall7} alt=""/>
                                  </div>
                              </div>
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={gall8} alt="" />
                                  </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               </div>
            </div>
            
         
         <div className="mt-7">
            <div className="col-12 col-md-8 text-md-center mx-auto">
               <h2 className="h1 font-weight-light mb-4"><span className="font-weight-bold">After Effect Edits</span></h2>
                  <p className="lead">After Effect...............................................................................</p>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/onRW3UqjQsY" title="" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tDu_1dp8Lyo" title="" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <iframe width="560" height="315" src={after_3} title="" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
         </div>

         <div className="mt-7">
            <div className="col-12 col-md-8 text-md-center mx-auto">
               <h2 className="h1 font-weight-light mb-4"><span className="font-weight-bold">IOT Project</span></h2>
               <p className="lead">A lightbulb that can be switched on using a smartphone app is an IoT device,
                        as is a motion sensor or a smart thermostat in your office or a connected streetlight. 
                        An IoT device could be as fluffy as a child's toy or as serious as a driverless truck. 
                        Some larger objects may themselves be filled with many smaller IoT components, 
                        such as a jet engine that's now filled with thousands of sensors collecting and 
                        transmitting data back to make sure it is operating efficiently. At an even bigger scale, 
                        smart cities projects are filling entire regions with sensors to help us understand and control the environment.</p>
               <iframe width="560" height="315" src={iot_project} title="" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
         </div>

         <div className="mt-7">
            <div className="col-12 col-md-8 text-md-center mx-auto">
               <h2 className="h1 font-weight-light mb-4"><span className="font-weight-bold">PhotoShop</span></h2>
               <p className="lead">PhotoShop...............................................................................</p>

               <div className="row align-items-center ml-9">
                  <div className="col-lg-5">
                     <div className="row" style={{width:'450px'}}>
                        <div className="col-md-5 mr-3">
                           <div className="row mt-5 mt-lg-0">
                              <div className="col-md-12 pr-0">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={ps1} alt=""/>
                                   </div>
                              </div>
                              <div className="col-md-12 pr-0">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={ps2} alt="" />
                                  </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-5 mt-6">
                           <div className="row">
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={ps4} alt=""/>
                                  </div>
                              </div>
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={ps3} alt="" />
                                  </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-12 col-lg-5 d-none d-lg-block">
                     <div className="row" style={{width:'450px'}}>
                        <div className="col-md-5 mr-3">
                           <div className="row mt-5 mt-lg-0">
                              <div className="col-md-12 pr-0">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={ps5} alt=""/>
                                   </div>
                              </div>
                              <div className="col-md-12 pr-0">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={ps6} alt="" />
                                  </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-5 mt-6">
                           <div className="row">
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={ps7} alt=""/>
                                  </div>
                              </div>
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3 zoom">
                                    <img className="rounded img-fluid" src={ps8} alt="" />
                                  </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
