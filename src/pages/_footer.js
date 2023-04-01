// import { Link } from 'react-router-dom';
import insta from '../images/_insta.png';
import lin from '../images/_in.png';
import fb from '../images/_fb.png';
import warn from '../images/_warning.png';
import gmail from '../images/_gmail.png';

function App() {
  return (
    <>
            <div className="container">
                <hr className="my-5"/>
                <div className="row">
                    <div className="col">

                        <ul className="d-flex list-unstyled mb-5 justify-content-center">
                            <li className="mr-2">
                                <a href="https://www.instagram.com/str00per" target='_blank' rel='noopener noreferrer' className="btn btn-icon-only btn-primary">
                                    <img src={insta}/>
                                </a>
                            </li>
                            <li className="mr-2">
                                <a href="https://www.linkedin.com/in/sourabh-bisht-80532a173" target='_blank' rel='noopener noreferrer' className="btn btn-icon-only btn-primary">
                                    <img src={lin} />
                                </a>
                            </li>
                            <li className="mr-2">
                                <a href="https://www.facebook.com/sourabh.bisht.73" target='_blank' rel='noopener noreferrer' className="btn btn-icon-only btn-primary">
                                    <img src={fb}/>
                                </a>
                            </li>
                            <li className="mr-2">
                                <div className="btn btn-icon-only btn-primary " >
                                    <img src={gmail} id="QR" className="zoomqr"/>
                                </div>
                            </li>

                        </ul>
                        <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                            <p className="font-weight-normal font-small mb-0"><img src={warn} className="btn-icon-only" />I am not going to build any website for anyone.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
}

export default App;
