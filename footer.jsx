import React  from "react";
import './index.css';
const Footer=()=>{
    return(
        <footer>
            <div className="footer">
                <div className="per">
                    <h3> LOCATION:</h3>
                    <p>Chennai institute of Technology
                    <br></br>Sarathy nagar,Kundrathur,Chennai,Tamil Nadu 600069
                    </p>
                    <div className="contact"><h3>CONTACT ME:</h3>
                    <p>
                       <span> Phone Number:</span>9655777619
                        <br></br>
                       <span>Gmail:</span>charu5050@gmail.com
                    </p>
                    </div>
                </div>
                <div className="sub">
                    <h3>SUBCRIBE</h3>
                    <label>Enter your email address:</label>
                    <br></br>
                    <input type="text" required></input>
                    <br></br>
                    <button>Subcribe</button>
                </div>
            </div>

        </footer>
      
    )
}
export default Footer