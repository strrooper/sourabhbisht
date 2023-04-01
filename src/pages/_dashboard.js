import  { useEffect as onStart }  from 'react';
import profilePic from '../images/profile_pic.jpg';



import '../css/index.css';
import Header from './_header.js';
import Footer from './_footer.js';




var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};



function dName() {
  
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

function App() {
  onStart(() => { dName();});
  return (
    <>
      <Header/>
         <section className="section section bg-soft pb-5 overflow-hidden z-2" >
             <div className="container z-2">
                 <div className="row justify-content-center text-center pt-2">
                     <div className="col-lg-8 col-xl-8">
                        <h1>Here I'm 
                          <b><span className="txt-rotate" data-period="1000" data-rotate='[ " Sourabh Bisht.", " i_trooper."]'></span></b>
                        </h1>
                         <p className="lead px-md-6 mb-2">_software<strong>Developer</strong></p>
                         <strong>Abraham Lincoln </strong> <span>reportedly said that, given eight hours to chop down a tree, he’d spend six sharpenning his axe.</span>
                     </div>
                 </div>
             </div>
         </section>
         <div className="container">
           <div className="row align-items-center justify-content-around">
             <div className="col-md-6 col-xl-6 mb-5 mt-3">
               <div className="card bg-primary shadow-soft border-light custom-radius p-3">
                 <img className="custom-radius img-fluid" loading="eager" src={profilePic} alt="modern desk"/>
                </div>
              </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
              <div className="col-15 col-lg-15">
                <div className="card bg-primary shadow-soft border-light mb-6">
                  <div className="card-body px-5 py-5 text-center text-md-left">
                    <div className="row align-items-center">
                      <div className="col-md-12">                          
                          <h3 className="mb-3">My Story</h3>
                          <p className="mb-5">                                 
                                Okay so basically, I belong to a small village <b>Kansola</b> in the Chamoli district <b>Uttarakhand</b>. <br/> 
                                <b>Surviving</b> in Kansola means that you have to walk miles to fulfill all your basic needs  as there's no facility available. <br/>
                                But these hurdles make me realize that you should always "<b>Try till you make it</b>", being a village boy I was far off technology <br/> 
                                stuff so that was the reason the technology attracted me the most once I migrated to city for further studies. There I interacted <br/>
                                with a new environment, where I found a very interesting <b>machine</b> called a "<b>computer !!</b>" that hits my mind completely. <br/>
                                After that, I found a new kind of <b>excitement</b> in me to learn about how these things work. As I belong to a middle family <br/> 
                                it's very hard for me to afford a computer at that time so I started learning through my school classes and develop my skills <br/>
                                as I can.The <b>beginning</b> of my real <b>journey</b> start when I was in my 10th standard and my father bought me a computer,<br/>
                                it's time to beat the situation. <br/>
                                So, I started putting my all hard work into learning the <b>programming</b> languages in my 11th standard and I knew I'm going to <br/>
                                learn this at the end of my 12th standard. We all have heard many times about the life-changing <b>opportunity</b>,<br/> 
                                yes it's really happened to me as well when I joined a coaching class where I meet <b>Sanjeev sir</b>. He's the one who <b>enlightens</b> <br/>
                                my path towards the right way, he taught me <b>PHP</b> In the easiest way by using tactics that really enhance my skills and also help<br/> 
                                me to understand how <b>Facebook's</b> back end operates. By getting this knowledge I'm able to create a base <b>structure</b> of Facebook,<br/> 
                                after that, I have also learned some other languages like <b>C++</b> . <br/>And yes I learned php first , not C.<br/>
                                As I always want to make my career in the technology field, because I know that I have the potential to create useful solutions<br/> 
                                that will be going to help society.It's very heart-wrenching that I haven't learned much during my <b>graduation</b>, but yes I really <br/>
                                get to know how to tackle the problem and how to use the logic which is required to become a good programmer.<br/>
                                After completing my graduation i jumped into the IT industry to gain real-life <b>experience</b> and start my career as a software developer.<br/> 
                                As of now I'm <b>growing</b> and learning day by day which is really required for every person not only for a programmer because <br/>
                                we are facing many problems in our real life and if we know how to tackle <b>problems</b> with the right approach. <br/>
                                Then nothing will stop us, and we will easily analyze the problem and convert it into code, and still, if we are not able to <br/>
                                find the solution then we should change our approach. We should never lose our hope always try with a <b>positive</b> approach, <br/>
                                we will definitely going to find a solution. Hence, this is me who never stops and always ready for the situation that will <br/>
                                force me to think <b>out of the box</b> and I'll be back with an effective <b>solution</b> for that specific problem.
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>

    
  <Footer/>
        </>
  );
}

export default App;
