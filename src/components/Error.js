import React from 'react'

const Error = () => {
    return (
        <div >
            <div style={{textAlign: "center", justifyContent: "center" }}>
                <h1 style={{ fontSize: "40px" }}>404 Error Page</h1>
                <p style={{ fontSize: "30px" }}>Sorry this page does not exist.</p>
                <a href="/" style={{border:"2px blue solid" , background:"green" , padding:"15px", fontSize : "25px", color:"white"}}>Go Back</a>
            </div>
        </div>
    )
}

export default Error