import React from 'react'
import Header from './header/Header';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import SpreadsheetPage from './spreadsheet-page/SpreadsheetPage';
import DataFramesPage from './dataframes-page/DataFramesPage';
import UploadPage from './upload-page/UploadPage';

function App() {
    return (
        <Router>
            <div>
                <Header />

                <Routes>
                    <Route exact path='/' component={<p>Hello World</p>}>
                        <Route exact path="/dataframes/:id" element={<SpreadsheetPage/>} />
                        <Route exact path="/dataframes" element={<DataFramesPage/>} />
                        <Route exact path="/upload" element={<UploadPage/>} />
                    </Route>
                    
                </Routes>
            </div>
        </Router>
    )
}

export default App;