import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DataFramesPage() {
    const [dataFramesList, setDataFramesList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/dataframes").then(function (res){
        console.log(res.data.data)
        setDataFramesList(res.data.data)
    })}, []) 

    return (
        <ul>
            {dataFramesList.map(dataFrame => {
                return (
                    <li>
                        <Link to={`/dataframes/${dataFrame.id}`} >{dataFrame.name}</Link>
                    </li>
                )})
            }
        </ul>
    );
}

export default DataFramesPage;