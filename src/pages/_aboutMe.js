import PhpLogo from '../images/_php.png';
import ReactLogo from '../images/_reactjs.png';
import JsxLogo from '../images/_jsx.png';
import Header from './_header.js';
import Footer from './_footer.js';

function App() {
  return (
    <>
    <Header/>
    
            <section class="section section-lg">
                <div class="container">
                
                    <div class="row justify-content-center pt-2">
                        <div class="col-12 col-md-13">
                            <div class="alert alert-secondary shadow-soft mb-4 mb-lg-5" role="alert">
                                <span class="alert-inner--icon icon-lg"><span class="fas fa-exclamation-circle"></span></span>
                                <span class="alert-heading">Hi!</span>
                                <p>I am 34.102.136.180 or you can call me sourabhbisht.com and I am made of react js.
                                 i am an open-source front-end JavaScript library for building user interfaces or UI components.
                                 It is maintained by Facebook and a community of individual developers and companies. 
                                 React can be used as a base in the development of single-page or mobile applications.

                                </p>
                                <hr/>
                                <p class="mb-0">....</p>  
                            </div>
                        </div>
                    </div>
                </div>


                <div class="section section-md pt-0">
            <div class="container">
               <div class="row justify-content-center mt-6">
                  <div class="col-md-12 col-lg-10">
                     <div class="timeline timeline-one">
                        
                        <div class="timeline-item text-left">
                           <div class="card border-light shadow-inset p-3">
                              <div class="card-body bg-primary shadow-soft rounded border border-light p-3">
                                <h3 class="h4 my-2">
                                        <div class="icon icon-shape-lg border-light rounded-circle ">
                                            <a href="https://reactjs.org/" target='_blank' rel='noopener noreferrer'> 
                                                <span class="icon icon-md icon-shape-sm-ttl shadow-soft border border-light rounded-circle">
                                                    <img src={ReactLogo} alt="" style={{ borderRadius:'50%'}} />
                                                </span>
                                            </a>
                                        </div>
                                        <ttl className="ml-2">React JS</ttl>
                                 </h3>
                                 <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
                                          It lets you compose complex UIs from small and isolated pieces of code called “components”. 
                                          We'll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.
                                          And these components have been used to make me
                                          </p>
                              </div>
                           </div>
                        </div>
                        <div class="timeline-item">
                           <div class="card border-light shadow-inset p-3">
                              <div class="card-body bg-primary shadow-soft rounded border border-light p-3">
                                 <h3 class="h4 my-2">
                                     <div class="icon icon-shape-lg border-light rounded-circle ">
                                       <a href="https://medium.com/@artofofiare/neumorphism-the-right-way-a-2020-design-trend-386e6a09040a" target='_blank' rel='noopener noreferrer'>
                                          <span style={{ fontSize:'1.25rem'}} className="icon icon-shape-sm-ttl shadow-soft border border-light rounded-circle" >
                                             N
                                          </span>
                                       </a>
                                    </div> 
                                    <ttl className="ml-2">Neumorphism Designe</ttl>
                                </h3>
                                 <p>Neumorphism, or soft UI, is a visual style that combines background colors, shapes, 
                                    gradients, highlights, and shadows to ensure graphic intense buttons and switches. 
                                    All that allows achieving a soft, extruded plastic look, and almost 3D styling..</p>
                              </div>
                           </div>
                        </div>

                        <div class="timeline-item text-left">
                           <div class="card border-light shadow-inset p-3">
                              <div class="card-body bg-primary shadow-soft rounded border border-light p-3">
                                <h3 class="h4 my-2">
                                        <div class="icon icon-shape-lg border-light rounded-circle ">
                                            <a href="https://reactjs.org/" target='_blank' rel='noopener noreferrer'> 
                                            <span style={{ fontSize:'1.25rem'}} className="icon icon-shape-sm-ttl shadow-soft border border-light rounded-circle" >
                                             F
                                            </span>
                                            </a>
                                        </div>
                                        <ttl className="ml-2">Nunito Sans Google Font</ttl>
                                 </h3>
                                 <p>Nunito is a well balanced sans serif typeface superfamily, with 2 versions: The project began with Nunito,
                                    created by Vernon Adams as a rounded terminal sans serif for display typography. 
                                    Jacques Le Bailly extended it to a full set of weights, and an accompanying regular non-rounded terminal version, Nunito Sans.</p>
                              </div>
                           </div>
                        </div>
                        <div class="timeline-item">
                           <div class="card border-light shadow-inset p-3">
                              <div class="card-body bg-primary shadow-soft rounded border border-light p-3">
                                 <h3 class="h4 my-2">
                                     <div class="icon icon-shape-lg border-light rounded-circle ">
                                       <a href="https://medium.com/@artofofiare/neumorphism-the-right-way-a-2020-design-trend-386e6a09040a" target='_blank' rel='noopener noreferrer'>
                                          <span className="icon icon-md icon-shape-sm-ttl shadow-soft border border-light rounded-circle" >
                                          <img src={PhpLogo} alt="" style={{ borderRadius:'50%'}} />
                                          </span>
                                       </a>
                                    </div> 
                                    <ttl className="ml-2">PHP</ttl>
                                </h3>
                                 <p>PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites.
                                        <small>
                                            <li>It is powerful enough to be at the core of the biggest blogging system on the web (WordPress)!</li>
                                            <li>It is deep enough to run the largest social network (Facebook)!</li>
                                        </small>
                                        </p>
                              </div>
                           </div>
                        </div>

                        <div class="timeline-item text-left">
                           <div class="card border-light shadow-inset p-3">
                              <div class="card-body bg-primary shadow-soft rounded border border-light p-3">
                                <h3 class="h4 my-2">
                                        <div class="icon icon-shape-lg border-light rounded-circle ">
                                            <a href="https://reactjs.org/" target='_blank' rel='noopener noreferrer'> 
                                            <span className="icon icon-md icon-shape-sm-ttl shadow-soft border border-light rounded-circle" >
                                                <img src={JsxLogo} alt="" style={{ borderRadius:'50%'}} />
                                            </span>
                                            </a>
                                        </div>
                                        <ttl className="ml-2">JSX</ttl>
                                 </h3>
                                 <p>JSX is still just JavaScript with some extra functionality. 
                                     With JSX, you can write code that looks very similar to HTML or XML, 
                                     but you have the power of seamlessly mixing JavaScript methods and variables into your code. 
                                     JSX is interpreted by a transpiler, such as Babel, and rendered to JavaScript code that the UI Framework
                                    (React, in this case) can understand. This whole website is build using jsx.</p>
                              </div>
                           </div>
                        </div>
                        <div class="timeline-item">
                           <div class="card border-light shadow-inset p-3">
                              <div class="card-body bg-primary shadow-soft rounded border border-light p-3">
                                 <h3 class="h4 my-2">
                                     <div class="icon icon-shape-lg border-light rounded-circle ">
                                       <a href="https://www.mulesoft.com/resources/api/what-is-an-api" target='_blank' rel='noopener noreferrer'>
                                          <span style={{ fontSize:'1.25rem'}} className="icon icon-shape-sm-ttl shadow-soft border border-light rounded-circle" >
                                             A
                                          </span>
                                       </a>
                                    </div> 
                                    <ttl className="ml-2">API</ttl>
                                </h3>
                                 <p>An API (Application Programming Interface) is a set of functions that allows applications to access 
                                    data and interact with external software components, operating systems, or microservices. To simplify, 
                                    an API delivers a user response to a system and sends the system's response back to a user.</p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>

                
            </section>


        <Footer/>
    </>
  );
}

export default App;
