// import profilePic from '../images/_profile_pic.jpg';
import gall1 from '../images/_gall1.jpg';
import gall2 from '../images/_gall2.jpg';
import gall3 from '../images/_gall3.jpg';
import '../css/index.css';
import Footer from './_footer.js';

function App() {
  return (
    <>

      <main>
         <section className="section section-lg pt-0">
            <div className="container">
               <div className="row align-items-center justify-content-around">
                  
                  <div className="col-md-12 col-lg-6">
                    <div className="row">
                        <div className="col-md-5 mr-3">
                           <div className="row mt-5 mt-lg-0">
                              <div className="col-md-12 pr-0">
                                <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3">
                                  <img className="rounded img-fluid" src={gall1} alt="girl face"/>
                                </div>
                              </div>
                              <div className="col-md-12 pr-0">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3">
                                    <img className="rounded img-fluid" src={gall2} alt="creative face" />
                                  </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-5 mt-6">
                           <div className="row">
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3">
                                    <img className="rounded img-fluid" src={gall3} alt=""/>
                                  </div>
                              </div>
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3">
                                    <img className="rounded img-fluid" src={gall1} alt="woman draw" />
                                  </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* <div className="col-12 col-lg-5 d-none d-lg-block">
                     <div className="row">
                        <div className="col-md-5 mr-3">
                           <div className="row mt-5 mt-lg-0">
                              <div className="col-md-12 pr-0">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3">
                                    <img className="rounded img-fluid" src={gall2} alt="girl face"/>
                                   </div>
                              </div>
                              <div className="col-md-12 pr-0">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3">
                                    <img className="rounded img-fluid" src={gall1} alt="creative face" />
                                  </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-5 mt-6">
                           <div className="row">
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3">
                                    <img className="rounded img-fluid" src={gall2} alt="girl picture"/>
                                  </div>
                              </div>
                              <div className="col-md-12 pl-2">
                                  <div className="card bg-primary shadow-soft rounded border-light p-2 mb-3">
                                    <img className="rounded img-fluid" src={gall3} alt="woman draw" />
                                  </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
         </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
