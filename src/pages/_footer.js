// import { Link } from 'react-router-dom';
import insta from '../images/insta.png';
import lin from '../images/in.png';
import fb from '../images/fb.png';
import warn from '../images/warning.png';
import gmail from '../images/gmail.png';

function App() {
  return (
    <>
            <div className="container">
                <hr className="my-5"/>
                <div className="row">
                    <div className="col">

                        <ul className="d-flex list-unstyled mb-5 justify-content-center">
                            <li className="mr-2">
                                <a href="https://www.instagram.com/i_trooper" target='_blank' rel='noopener noreferrer' className="btn btn-icon-only btn-primary">
                                    <img src={insta}/>
                                </a>
                            </li>
                            <li className="mr-2">
                                <a href="https://www.linkedin.com/in/sourabh-bisht-80532a173" target='_blank' rel='noopener noreferrer' className="btn btn-icon-only btn-primary">
                                    <img src={lin} />
                                </a>
                            </li>
                            <li className="mr-2">
                                {/* <a href="https://www.facebook.com/sourabh.bisht.73" target='_blank' rel='noopener noreferrer' className="btn btn-icon-only btn-primary">
                                    <img src={fb} className="fb_image"/>
                                </a> */}
                                {/* <div className="btn btn-icon-only btn-primary " >
                                    <img src={gmail} id="QR" className="zoomqr"/>
                                </div> */}
                            </li>
                            <li className="mr-2">
                                <div className="btn btn-icon-only btn-primary " >
                                    <img src={gmail} id="QR" className="zoomqr"/>
                                </div>
                            </li>

                        </ul>
                        <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                            <p className="font-weight-normal font-small mb-0"><img src={warn} className="btn-icon-only" />No code has zero defects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
}

export default App;
