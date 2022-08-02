import React from 'react';
import SidebarItem from './SidebarDesignPageItem';
import items from '../data/sidebarDesignPageData';

export default function SidebarDesignPage() {
  return (
    <div className="sidebar">
      { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
  );
}
