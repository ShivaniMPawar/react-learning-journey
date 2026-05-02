import tulips_pic from "./assets/tulip-image.jpg";
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={tulips_pic} alt="tulips"></img>
            <h2 className="card-title">Tulips</h2>
            <p className="card-text">Location: Amsterdam</p>
        </div>
    );

}
export default Card