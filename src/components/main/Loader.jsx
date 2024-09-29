import React from 'react';

const Loader = () => {
    return (
        <div style={loaderStyle}>
            <div style={iconContainerStyle}>
                <i className="fas fa-spinner" style={iconStyle}></i>
               
            </div>
        </div>
    );
};

const loaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black background with opacity
    backdropFilter: 'blur(1px)', // Blur effect
    display: 'flex',
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    zIndex: 9999, // Ensure it overlays everything else
};

const iconContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the icon and text horizontally
    textAlign: 'center', // Center the text
    color: 'white', // Set text color
};

const iconStyle = {
    fontSize: '50px', // Adjust the size as needed
    animation: 'spin 1s linear infinite', // Animation for spinning effect
};

 

// Adding keyframes for spinning animation
const styles = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

// Create a style element and append it to the head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Loader;
