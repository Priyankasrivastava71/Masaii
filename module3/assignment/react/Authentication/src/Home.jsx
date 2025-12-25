import { Link } from "react-router-dom";

function Home(){

    return(
        <div style={{padding:"20px" }}>

        <h2>welcome home</h2>
        <Link to="/login">Go to Login</Link>
        </div>
    ) 
}
export default Home;