import { Link } from 'react-router-dom';

window.onscroll = function() {
    var direction = this.oldScroll > this.scrollY;    
    if(direction === false){
        document.getElementById("navbar-main").className = "right-flex pt-3 pb-2 navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent headroom--not-bottom headroom--not-top headroom--unpinned";
    }else if(direction === true){
        if (document.body.scrollTop || document.documentElement.scrollTop) {
            document.getElementById("navbar-main").className = "right-flex pt-3 pb-2 navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent headroom--not-bottom headroom--not-top headroom--pinned";
        }else{
            document.getElementById("navbar-main").className = "right-flex pt-3 pb-2 navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent headroom--not-bottom headroom--pinned headroom--top";
        }
    }
    this.oldScroll = this.scrollY;
  }

  function hamburger(val){
      if(val == 'close'){
        document.getElementById("navbar_global").className = "navbar-collapse collapse";
      }else{
        document.getElementById("navbar_global").className = "navbar-collapse collapse show";
      }
  }  

function App() {
  return (
    <>
<meta http-equiv='cache-control' content='no-cache'> </meta>
<meta http-equiv='expires' content='0'> </meta>
<meta http-equiv='pragma' content='no-cache'></meta>
        <header className="header-global"  >
          <nav id="navbar-main" aria-label="Primary navigation"  className="right-flex pt-3 pb-2 navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent headroom--not-bottom headroom--pinned headroom--top">
                  <div className="navbar-collapse collapse" id="navbar_global">
                    <div class="navbar-collapse-header float-right" onClick={() => hamburger('close')}  id="hamburger">
                        <p class="col-6 collapse-close float-right"><b>[X]</b></p>
                    </div>
                    <div className="container position-relative  float-right">
                      <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                        <li class="nav-item dropdown">
                            <span className="nav-link-inner-text ml-4"><Link to="/">Dashboard</Link></span>
                            <span class="fas fa-angle-down nav-link-arrow ml-2"></span>
                        </li>
                        <li class="nav-item dropdown">
                            <span className="nav-link-inner-text ml-4"><Link to="/_fd7e471d9e5696ea083f10720f169311">Professional</Link></span>
                            <span class="fas fa-angle-down nav-link-arrow ml-2"></span>
                        </li>
                        <li class="nav-item dropdown">
                            <span className="nav-link-inner-text ml-4"><Link to="/_d3da97e2d9aee5c8fbe03156ad051c99">KeySkills</Link></span>
                            <span class="fas fa-angle-down nav-link-arrow ml-2"></span>
                        </li>
                        <li class="nav-item dropdown">
                            {/* <span className="nav-link-inner-text ml-4"><Link to="/_d6b9ea32b921a9f56de32062ba4b94f3">Blogs</Link></span> */}
                            <span class="fas fa-angle-down nav-link-arrow ml-2"></span>
                        </li>
                        <li class="nav-item dropdown">
                            {/* <span className="nav-link-inner-text ml-4"><Link to="/_34e80a799d144cfe4af46815e103f017">Game section</Link></span> */}
                            <span class="fas fa-angle-down nav-link-arrow ml-2"></span>
                        </li>
                        <li class="nav-item dropdown">
                            {/* <span className="nav-link-inner-text ml-4"><Link to="/_65e84f4e55313aef8aa986ccff3e778b">Contact Me</Link></span> */}
                            <span class="fas fa-angle-down nav-link-arrow ml-2"></span>
                        </li>
                        <li class="nav-item dropdown">
                                {/* <span className="nav-link-inner-text ml-4"><Link to="/_f2fdea440d768b85591e936a803c3631">Sign In</Link></span> */}
                            <span class="fas fa-angle-down nav-link-arrow ml-2"></span>
                        </li>
                      </ul>
                      </div>
                  </div>
                  
                    <div class="d-flex align-items-center">
                        <button class="navbar-toggler ml-5 pl-10" type="button">
                            <span class="navbar-toggler-icon" onClick={() => hamburger()} id="hamburger"></span>
                        </button>
                    </div>
            </nav>
        </header>
        </>
  );
}

export default App;
