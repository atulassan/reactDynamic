import React, {useState} from 'react';

function GroupBy() {
    const [data, setData] = useState([
        { id: 1, category: 'A', value: 10 },
        { id: 2, category: 'B', value: 20 },
        { id: 3, category: 'A', value: 30 },
        { id: 4, category: 'B', value: 40 },
        { id: 5, category: 'C', value: 50 }
    ]);

    const groupedData = data.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {}); 

    console.log('Grouped Data:', groupedData, Object.entries(groupedData));
    
    return ( 
        <div className="group-by">
            <h1>Group By Example</h1>
            <p>This page will demonstrate how to group data in JavaScript.</p>
            <div className="grouped-results">
                {Object.entries(groupedData).map(([category, items]) => (
                    <div key={category} className="group">
                        <h2>Category: {category}</h2>
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    ID: {item.id}, Value: {item.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default GroupBy;