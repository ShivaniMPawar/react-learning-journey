
function Connect(){
    const connect1="LinkedIn";
    const connect2="GitHub";
    const connect3="Facebook";
    return(
        <ul>
            <li><a href='#'>Instagram</a></li>
            <li><a href='#'>{connect1}</a></li>
            <li><a href='#'>{connect2.toLowerCase()}</a></li>
            <li><a href='#'>{connect3.toUpperCase()}</a></li>
        </ul>
    );
}
export default Connect