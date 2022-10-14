import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UploadPage() {

    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData()
        formData.append('df_name', name)
        formData.append('file', selectedFile)
        axios({
            method: 'post', 
            url: 'http://localhost:3000/upload-csv',
            data: formData,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
            }
        })
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Uploaded file:</label>
                <input
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                />
                <input type="submit" />
            </form>
        </div>
    );
}

export default UploadPage;
