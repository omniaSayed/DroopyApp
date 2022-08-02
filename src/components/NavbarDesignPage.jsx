import React from 'react';
import { FaAffiliatetheme } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

function NavbarDesignPage() {
  // const { SidebarDesignPage, setSidebarDesignPage } = useState(True);
  return (
    <>
<div className="NavDesignPage"> href="#" <Link to="#" className="menu-bars">
        <FaAffiliatetheme />
        </Link></div>
        <nav className={ Sidebar ? 'nav-menu active':'nav-menu'}>
            <ul className="nav-menu-items"></ul>
        </nav>;
    </>
  );
}
export default NavbarDesignPage;

