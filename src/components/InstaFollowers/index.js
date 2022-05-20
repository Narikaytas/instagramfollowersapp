 

const InstaFollowers =(props) =>{
    const {Followers,deleteUser} = props
    const {fName, fImage,fId} = Followers
    const onDelete =()=>{
        deleteUser(fId)
    }
    return(
        <>
            <div className="followersStyle">
            <li>
            <img src={fImage} alt='img'/>
            {fName}
            <button className="btn btn-outline-0 but" onClick={onDelete}><i className="fa-solid fa-trash"></i>
  </button>
            </li>
            </div>
        </>
    )
}
export default InstaFollowers