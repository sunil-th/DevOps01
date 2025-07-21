import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
import Logo from './Assets/Logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";


function Dashboard() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); 
 
    return () => clearInterval(interval);
  }, []);

    const closeSidebar = () => {
      setIsOpen(false);
    };
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
      if (!isOpen) {
        document.querySelector('.sidebar_content').classList.add('show-sidebar');
      } else {
        document.querySelector('.sidebar_content').classList.remove('show-sidebar');
      }
    };
    
  
  return (
    <div className='Dashbord'>
    
    <div className='main1'>
      <div className="navbar1">
        <div className="navbar__logo1">
          <img src={Logo} alt="Company Logo"  />
          
        </div>
        
        <div className='Marketing' >

        <span> MANAGEMENT DASHBOARD</span>
        </div>
        
        
        <div className="time">
          <span>{dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}</span>
        </div>
        
        
<div className="logout" >
<a href="logout" class="logout" style={{textDecoration:'none'}}>Logout</a>

</div>


      </div>
<div className='Home'>

      <div className='sidebar_content' onClick={closeSidebar}>
        
      <div className='sidebar-container'>
        
  <div className='nav-option option1' >
  <i className='bi bi-house-door'style={{ color: 'black' }}></i>
  <a href="/industrytype"style={{textDecoration:'none',color: 'black'}}>Industry Type</a>
  </div>

  <div className='nav-option option1'>
    <i className='bi bi-list-task'style={{ color: 'black' }}></i>
    <a href="/sectors"style={{textDecoration:'none',color: 'black'}}>Sectors</a>
  </div>

  <div className='nav-option option1'>
    <i className='bi bi-calendar-check'style={{ color: 'black' }}></i>
    <a href="/segment"style={{textDecoration:'none', color: 'black'}}>Segment</a>
  </div>

  <div className='nav-option option1'>
    <i className='bi bi-list-task'style={{ color: 'black' }}></i>
    <a href="/leadstatus"style={{textDecoration:'none', color: 'black'}}>Lead Status</a>
  </div>

  <div className='nav-option option1'>
    <i className='bi bi-file-text'style={{ color: 'black' }}></i>
    <a href="/assign"style={{textDecoration:'none', color: 'black'}}>Assign</a>
  </div>

  <div className='nav-option option1'>
    <i className='bi bi-calendar-event'style={{ color: 'black' }}></i>
    <a href="/transfer"style={{textDecoration:'none', color: 'black'}}>Transfer</a>
  </div>

  <div className='nav-option option1'>
    <i className='bi bi-credit-card'style={{ color: 'black' }}></i>
    <a href="/bin"style={{textDecoration:'none', color: 'black'}}>Bin</a>
  </div>

  <div className='nav-option option1'>
    <i className='bi bi-power'style={{ color: 'black' }}></i>
    <a href="/workorder"style={{textDecoration:'none', color: 'black'}}>WorkOrder</a>
  </div>

  <div className='nav-option option1'>
    <i className='bi bi-eye'style={{ color: 'black' }}></i>
    <a href="/sowing"style={{textDecoration:'none', color: 'black'}}>Sowing</a>
  </div>

  <div className='nav-option option1'>
    <i className='bi bi-clock-history'style={{ color: 'black' }}></i>
    <a href="/history"style={{textDecoration:'none', color: 'black'}}>History</a>
  </div>

  <div className='nav-option option1'>
    <i className='bi bi-file-earmark-bar-graph'style={{ color: 'black' }}></i>
    <a href="/reports"style={{textDecoration:'none', color: 'black'}}>Reports</a>
  </div>

  <div className='nav-option option1'>
    <i className='bi bi-briefcase'style={{ color: 'black' }}></i>
    <a href="/jobpost"style={{textDecoration:'none', color: 'black'}}>Job post</a>
  </div>
  
  <div className='nav-option option1'>
    <i className='bi bi-gear'style={{ color: 'black' }}></i>
    <a href="/setting"style={{textDecoration:'none', color: 'black'}}>Setting</a>
  </div>
</div>


        </div>
      </div>

    </div>
   </div>
  );
}
export default Dashboard;
