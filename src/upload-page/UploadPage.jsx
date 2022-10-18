import React, { useState, useEffect } from 'react';
import  { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UploadPage() {

    const navigation = useNavigate()

    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData()
        formData.append('df_name', name)
        formData.append('file', selectedFile)
        formData.append('timestamp', new Date().toISOString().split('.')[0] + 'Z')
        axios({
            method: 'post', 
            url: 'http://192.168.0.142:3000/upload-csv',
            data: formData,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
            }
        }).then((res) => {
            console.log(res)
            navigation(`/dataframes/${res.data.data.id}`)
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
