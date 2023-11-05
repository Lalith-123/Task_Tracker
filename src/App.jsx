import React, { useState } from "react";
import Header from "./Header";
import Heading from "./Heading";

function App(){

    const [selectedGrouping, setSelectedGrouping] = useState("Status");
    const [selectedOrdering, setSelectedOrdering] = useState("Priority");
    const [orderingOptions, setOrderingOptions] = useState(['Priority', 'Title']);

    return (<div>
    <div className="header">
        <Header
        selectedGrouping={selectedGrouping}
        setSelectedGrouping={setSelectedGrouping}
        selectedOrdering={selectedOrdering}
        setSelectedOrdering={setSelectedOrdering}
        orderingOptions={orderingOptions}
        setOrderingOptions={setOrderingOptions}
        />
    </div>
    <div className="screen">
        <Heading
        selectedOrdering={selectedOrdering}
        selectedGrouping={selectedGrouping}
        />
    </div>
    </div>
    );
}

export default App;