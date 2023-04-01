import React, { Component } from 'react';
import Header from './_header.js';

class app extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newValue : '',
            value :'',
            errormessage:'',
            event:'',
        }
    }


    componentDidMount() {

                var self = this;
                var typingTimer;
                var doneTypingInterval = 900;
                
                document.body.addEventListener('keydown', keydown);

                function keydown(e) {
                    self.setState({ errormessage:'Typing...'});
                    self.setState({ value: e.key });
                    doneTyping();
                    clearTimeout(typingTimer);
                };

                function doneTyping () {
                    var newValue = self.state.value;
                    var oldValue = self.state.newValue;
                    self.setState({ newValue: oldValue+newValue });
                    if(self.state.newValue === 'hesoyam' ){
                        // self.setState({ errormessage:'congratulations!!'});
                        setTimeout(goToPrivilege, doneTypingInterval);
                    }else{
                        setTimeout(reset, doneTypingInterval);
                    }
                    
                }
                function goToPrivilege(){
                  self.setState({ errormessage:'congratulations!!'});
                  //   window.open(window.location.origin+"/Y0hKcGRtbHNaV2RsWVhOallYZGxlSE4zUVVWVFF3PT0");
                }
                function reset(){
                  self.setState({ newValue:''});
                  self.setState({ errormessage:'Try Again...'});
                }
       
       
    // document.addEventListener("mousemove", handleCursor);
    // function handleCursor(event) {
    //     var eye = document.getElementsByClassName(".eye");
    //     console.log(eye);
    //     // var x = (eye.offset().left) + (eye.width() / 2);
    //     // var y = (eye.offset().top) + (eye.height() / 2);
    //     // var rad = Math.atan2(event.pageX - x, event.pageY - y);
    //     // var rot = (rad * (180 / Math.PI) * -1) + 180;
    //     // eye.css({
    //     // '-webkit-transform': 'rotate(' + rot + 'deg)',
    //     // '-moz-transform': 'rotate(' + rot + 'deg)',
    //     // '-ms-transform': 'rotate(' + rot + 'deg)',
    //     // 'transform': 'rotate(' + rot + 'deg)'
    //     // });
    // }

    }    

    displayReport = (id) => {
        this.setState({ display: id });
    }

    
 

    render() {
        return (
            <>
                <Header />
                <section className="section section bg-soft pb-5 overflow-hidden z-2">
                  <div className="container z-2">
                     <div className="row pt-2 justify-content-center text-center">
                        <div className="col-lg-8 col-xl-8">
                           <div class="row mb-4 mb-lg-6">
                              <div class="col-12 col-md-8 text-md-center mx-auto">
                                 <h2 class="h1 font-weight-light mb-4">Contact<span class="font-weight-bold"> Me</span></h2>
                                 <p class="lead">for contacting me you have to type <span class="font-weight-bold">hesoyam</span> and your your typing speed should above 40 wpm.</p>
                {/* <section class="move-area"> */}
                    {/* <div class='.eyecontainer'>
                        <div class='eye'></div>
                        <div class='eye'></div>
                    </div> */}
                {/* </section> */}
                                    <div class="toast bg-primary shadow-inset text-dark fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                       <div class="toast-header text-dark">
                                          <strong class="mr-auto ml-2">{this.state.errormessage}</strong>
                                       </div>
                                       <div class="toast-body">
                                          {this.state.newValue}
                                       </div>
                                    </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </>
        )
    }
}

export default app;
