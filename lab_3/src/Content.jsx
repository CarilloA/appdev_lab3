import React from 'react';
import one from './assets/1.png';
import two from './assets/2.png';
import three from './assets/3.png';
import './App.css';  // Import your CSS file

function Content() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: 'black' }}>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card zoom-card">
                            <img src={one} className="card-img-top" alt="First" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card zoom-card">
                            <img src={two} className="card-img-top" alt="Second" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card zoom-card">
                            <img src={three} className="card-img-top" alt="Third" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
