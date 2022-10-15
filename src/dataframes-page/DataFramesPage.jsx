import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './dataframe-page.scss'

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
                    <table>
                        <thead>
                            <tr>
                                <th>DataFrame</th>
                                <th>Last Modified</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{dataFrame.name}</td>
                                <td>{dataFrame.timestamp}</td>
                                <td><Link to={`/dataframes/${dataFrame.id}`}>Edit</Link></td>
                            </tr>
                        </tbody> 
                    </table>
                )})
            }
        </ul>
    );
}

export default DataFramesPage;