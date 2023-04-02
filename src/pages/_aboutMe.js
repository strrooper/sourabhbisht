
import Header from './_header.js';
import Footer from './_footer.js';
import about_me from '../images/about-us-1.jpg';
import a10 from '../images/s10.png';
import a12 from '../images/s12.png';
import coll from '../images/scoll.png';
import abc from '../images/check.png';

function App() {
  return (
    <>
    <Header/>
      <main>
         <div class="mobile_popup">
            For Better Experience Open in Webview
         </div>

         <section class="section section-lg section section-header pb-3">
            <div class="container">
               <div class="row align-items-center justify-content-around">
                  <div class="col-md-6 col-xl-6 mb-5">
                     <div class="card bg-primary shadow-soft border-light custom-radius3 p-3">
                        <img class="custom-radius3 img-fluid" src={about_me} alt="modern desk"/></div>
                  </div>

                  <div class="col-md-6 col-xl-5 text-center text-md-left">
                     <h4 class="h2 mb-4"> <u> Professional Details. </u> </h4>
                     <p>I’m a software Developer in finTech, with a passion for programming and some other tech stuff like Internet of Things (IoT).</p>
                     <p>Position: Software Development Engineer (SDE)</p>
                     <p>NBFC(fintech) : full time </p>
                     <p>Exp : 2yr 4m</p>
                     <p>Coding on  PHP/React.js/Javascript and help company in building complex web applications which further provide services to 100000+ active users</p>
                     <p> • Worked over such applications, which is being downloaded by 2k users every day.</p>
                     <p> • Handling an internal TMS(Ticket Management System) for 150+active agents.</p>
                     <p> • Developed an internal CRM system for 200+ active agents.</p>
                     <p> • Hands-on experience on a third party apis integration.(Transactional / Bank Verification / Okyc / OCR ) </p>
                     <p><b><u>Skills</u></b></p>
                     <p><b>Languages:-</b><br/> PHP* / JavaScript / React.js / Python / Html / Css / Bootstrap</p>
                     <p><b>Database:-</b><br/> Mysql* / Oracle / Redis</p>
                     <p><b>Version Control:-</b><br/> Git / Gitlab</p>
                     <p><b>Framework:-</b><br/> MVC / Asterisk </p>
                     <p><b>CMS:-</b><br/> Wordpress</p>
                     <p><b>PhotoEditor:-</b><br/> PhotoShop / Adobe Illustrator</p>
                     <p><b>VideoEditor:-</b><br/> AfterEffect / PremierPro / FinalCutPro / Camtasia </p>
                  </div>
               </div>
            </div>
         </section>

         <section class="pt-5">
            <div class="container">
               <div class="row justify-content-left mb-5">
                  <h2 class="h1"><u>Schooling-</u></h2>
               </div>
               <div class="row">
                  <div class="col-12 col-md-6 col-lg-4">
                     <div class="card bg-primary shadow-soft border-light text-center py-4 mb-5">
                        <div class="profile-image shadow-inset border border-light bg-primary rounded-circle p-3 mx-auto">
                           <img src={a10} class="card-img-top shadow-soft p-2 border border-light rounded-circle" alt="Neil Avatar"/>
                           </div>
                        <div class="card-body">
                           <h3 class="h5 mb-2">X-2014</h3>
                           <p class="px-lg-4"><a href='http://www.apsmeerut.com/' target='_blank' rel='noopener noreferrer' >Army Public School</a> <br/> Meerut, Uttar Pradesh</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4">
                     <div class="card bg-primary shadow-soft border-light text-center py-4 mb-5">
                        <div class="profile-image shadow-inset border border-light bg-primary rounded-circle p-3 mx-auto">
                           <img src={a12} class="card-img-top shadow-soft p-2 border border-light rounded-circle" alt="Bonnie Avatar"/></div>
                        <div class="card-body">
                           <h3 class="h5 mb-2">XII-2016</h3>
                           <p class="px-lg-4"><a href='http://www.aps1roorkee.ac.in/' target='_blank' rel='noopener noreferrer' >Army Public School</a> <br/> Roorkee, Uttarakhand</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4">
                     <div class="card bg-primary shadow-soft border-light text-center py-4 mb-5">
                        <div class="profile-image shadow-inset border border-light bg-primary rounded-circle p-3 mx-auto">
                           <img src={coll} class="card-img-top shadow-soft p-2 border border-light rounded-circle" alt="Christopher avatar"/></div>
                        <div class="card-body">
                           <h3 class="h5 mb-2">Graduation-2019</h3>
                           <p class="px-lg-4"><a href='https://www.cuchd.in/' target='_blank' rel='noopener noreferrer' >Chandigarh University</a> <br/> Mohali, Punjab</p>
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
