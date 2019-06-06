import React from 'react';
import './Toolbar.css'
import Logo from '../../Assets/logo_sig.png'
import Man from '../../Assets/man.png'


const Toolbar =({drawerClickedHandler,show})=>{
        return(<header className="toolbar">
            <nav className="toolbar__navigation">
            
                <div className="toolbar__logo">
                 <img src ={Logo} alt ='logo' width ={50}/>
                </div>
                <div className="spacer"/>
                <div className="toolbar_navigation-items">
                 <ul>
                        <li>
                            TRIPS
                       </li>
                    

                    <li>
                        
                            RECENTLY VIEWED
                        </li>
                    
                    <li>
                           BOOKINGS
                        </li>
                        
                    </ul>
                </div>
                <div className="toolbar__logo">
                 <img src ={Man} alt ='logo' width = {50}/>
                </div>

            </nav>  
        </header>)
};


export default Toolbar;