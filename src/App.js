import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ProblemTab from './ProblemTab';
import Planets from './Planets';

function App() {
  const [activeTab, setActiveTab] = useState({ id: 1, name: 'New Tab' });
  const [tabs, setTabs] = useState([{ id: 1, name: 'New Tab' }]);
  const [searchValue, setSearchValue] = useState('');
  const [renamingTab, setRenamingTab] = useState(null);
  const renameInputRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleAddTab = () => {
    const newTab = { id: tabs.length + 1, name: 'New Tab' };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab);
  };

  const handleCloseTab = (tab) => {
    const newTabs = tabs.filter((t) => t.id !== tab.id);
    setTabs(newTabs);
    if (activeTab.id === tab.id) {
      setActiveTab(newTabs[0]);
    }
  };

  const handleRenameTab = (tab) => {
    setRenamingTab(tab);
  };

  const handleRenameInputChange = (e) => {
    const newTabs = tabs.map((tab) => {
      if (tab.id === renamingTab.id) {
        return { ...tab, name: e.target.value };
      }
      return tab;
    });
    setTabs(newTabs);
  };

  const handleRenameInputBlur = () => {
    setRenamingTab(null);
  };

  useEffect(() => {
    if (renamingTab) {
      renameInputRef.current.focus();
    }
  }, [renamingTab]);

  return (
    <div className="App">
      <div className="navbar">
        <input type="search" value={searchValue} placeholder='search' onChange={handleSearchChange} />
        <div className="tabs">
          {tabs.map((tab) => (
            <div key={tab.id} className={`tab ${activeTab.id === tab.id ? 'active' : ''}`} onClick={() => handleTabClick(tab)}>
              {renamingTab && renamingTab.id === tab.id ? (
                <input
                  ref={renameInputRef}
                  className="rename-input"
                  value={tab.name}
                  onChange={handleRenameInputChange}
                  onBlur={handleRenameInputBlur}
                />
              ) : (
                <span onDoubleClick={() => handleRenameTab(tab)}>{tab.name}</span>
              )}
              <span className="close-tab" onClick={(e) => { e.stopPropagation(); handleCloseTab(tab); }}>
                x
              </span>
            </div>
          ))}
          <div className="add-tab" onClick={handleAddTab}>
            +
          </div>
        </div>
      </div>
      
      <div className="content">
        {tabs.map((tab) => (
          <div key={tab.id} style={{ display: activeTab.id === tab.id ? 'block' : 'none' }}>
            <ProblemTab problem={'TwoSum'}></ProblemTab>
          </div>
        ))}
      </div>
      <Planets/>

    </div>
  );
}

export default App;