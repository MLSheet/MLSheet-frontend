import React, { useState, useEffect } from 'react'
import Header from './header/Header';
import axios from 'axios';
import Spreadsheet from "react-spreadsheet";

function App() {
    const [datasheetData, setDatasheetData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/dataframes/2c0ac302-351b-4b3d-b322-c0ee14963b62').then(function (res){
        console.log(res.data.data.data)
        setDatasheetData(res.data.data.data)
    })}, []) 
    
    

    return (
        <div>
            <Header />
            <Spreadsheet
            data={datasheetData}
            />
        </div>
    )
}

export default App;