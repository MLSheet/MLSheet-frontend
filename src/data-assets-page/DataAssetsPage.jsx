import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './dataframe-page.scss';
import EditIcon from '../components/icons/EditIcon';

function DataAssetsPage() {
    const [dataFramesList, setDataFramesList] = useState([])

    useEffect(() => {
        axios.get("http://192.168.0.142:3000/dataframes").then(function (res) {
            setDataFramesList(res.data.data)
        })
    }, [])

    return (
        <table className='dataframes-table'>
            <thead>
                <tr>
                    <th>DataFrame</th>
                    <th>Last Modified</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {dataFramesList.map(dataFrame => {
                    return (

                        <tr>
                            <td>{dataFrame.name}</td>
                            <td>{new Date(dataFrame.timestamp).toLocaleString()}</td>
                            <td><Link to={`/dataframes/${dataFrame.id}`}><EditIcon size={18} /></Link></td>
                        </tr>

                    )
                })
                }
            </tbody>
        </table>
    );
}

export default DataAssetsPage;