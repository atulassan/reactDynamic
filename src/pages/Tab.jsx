import React, { useState } from 'react';

const TabContent = [{ title: 'Home', content: 'Welcome to the Home tab!' },
{ title: 'About', content: 'Learn more About us here.' },
{ title: 'Contact', content: 'Get in touch through the Contact tab.' }];

function Tab() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }
    return (
        <div className="tab-container">
            <div className="tab-header">
                {TabContent.map((tab, index) =>
                    <div className="tab-button">
                        <button
                            key={index}
                            className={activeTab === index ? 'active' : ''}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.title}
                        </button>
                    </div>
                )}
            </div>
            <div className="tab-content">
                { TabContent.map((tab, index) =>
                    activeTab === index && (
                        <div key={index} className="tab-panel">
                            <h2>{tab.title}</h2>
                            <p>{tab.content}</p>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Tab;