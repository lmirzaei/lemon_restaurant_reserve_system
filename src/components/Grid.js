import '../styles/Grid.css';
import React from 'react';
import "../styles/App.css";

function Grid() {
    return (
        <div className='Grid'>
            <h1> This is a sample Grid</h1>
            <div className='GridContainer'>
                <div className='grid-header'>One</div>
                <div className='grid-footer'>this is footer in grid</div>
                <div className='grid-content-left'>Three</div>
            </div>
        </div>

    );
}
export default Grid;