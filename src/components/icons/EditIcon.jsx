import React from 'react';

function EditIcon({size=18, color='black'}) {
    return ( 
        <svg version="1.1" 
        id="edit" 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" 
        y="0px" 
        width={size} // added size here
        height={size} // added size here
        fill={color}
        viewBox="0 0 1000 1000">
        <path d="M968.161,31.839c36.456,36.456,36.396,95.547,0,132.003l-43.991,43.991L792.138,75.83l43.991-43.991  C872.583-4.586,931.704-4.617,968.161,31.839z M308.238,559.79l-43.96,175.963l175.963-43.991l439.938-439.938L748.147,119.821  L308.238,559.79z M746.627,473.387v402.175H124.438V253.373h402.204l124.407-124.438H0V1000h871.064V348.918L746.627,473.387z"/>
        </svg>
    );
}

export default EditIcon;