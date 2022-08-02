import React from 'react';
import SidebarItem from './SidebarDesignPageItem';
import items from '../data/sidebarDesignPageData.json';

export default function Sidebar() {
  return (
    <div className="sidebar">
      { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
  );
}
