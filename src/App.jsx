import React from 'react'
import SideBar from './sidebar/SideBar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import SpreadsheetPage from './spreadsheet-page/SpreadsheetPage';
import DataAssetsPage from './data-assets-page/DataAssetsPage';
import UploadPage from './upload-page/UploadPage';

function App() {
    return (
        <Router>
            <div>
                <SideBar />
                <div className="page-content">
                    <Routes>
                        <Route exact path='/' component={<p>Hello World</p>}>
                            <Route exact path="/dataframes/:id" element={<SpreadsheetPage/>} />
                            <Route exact path="/dataframes" element={<DataAssetsPage/>} />
                            <Route exact path="/upload" element={<UploadPage/>} />
                        </Route>
                        
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;