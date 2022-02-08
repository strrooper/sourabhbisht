import Header from './_header.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <>
    <Header/>
      <section className="section section bg-soft pb-5 overflow-hidden z-2">
         <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-xl-8">
               <div class="row justify-content-center pt-6">
                    <div class="col-12 col-md-8 col-lg-6 justify-content-center">
                        <div class="card bg-primary shadow-soft border-light p-4">
                            <div class="card-header text-center pb-0">
                                <h2 class="h4">Sign in </h2>  
                            </div>
                            <div class="card-body">
                                <form class="mt-4" autocomplete="off">
                                    <div class="form-group">
                                        <div class="input-group mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><span class="fas fa-envelope"></span></span>
                                            </div>
                                            <input class="form-control"  placeholder="Username" type="text" required="" />
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <div class="form-group">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                                </div>
                                                <input class="form-control" placeholder="Password" type="password" required=""  />
                                            </div>
                                        </div>
                                    </div>
                                    <button  class="btn btn-block btn-primary">Sign in</button>
                                </form>
                              
                                <div class="d-block d-sm-flex justify-content-center align-items-center mt-4">
                                    <span class="font-weight-normal">
                                        Not registered?
                                        <a href="https://technext.github.io/neumorphism-ui/html/pages/sign-in.html#" class="font-weight-bold">Create account</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>
    </>
  );
}

export default App;
