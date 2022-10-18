import React, { useState, useEffect } from 'react';
import Spreadsheet from "react-spreadsheet";
import { useParams } from 'react-router-dom'
import axios from 'axios';

function SpreadsheetPage() {

    const [datasheetData, setDatasheetData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://192.168.0.142:3000/dataframes/${id}`).then(function (res){
        console.log(res.data.data.data)
        setDatasheetData(res.data.data.data)
    })}, []) 

    return (                 
    <Spreadsheet
        data={datasheetData}
    /> );
}

export default SpreadsheetPage;
