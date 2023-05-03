function User(props){
    console.log(props.name  )
   
    return(
        <div>
            <h1>Name:{props.name}</h1>
            <h1>email:{props.email}</h1>
            <h1>User component {45+56}</h1>
            <h4>Address:{props.other.address}</h4>
            <h4>Mobile:{props.other.mobile}</h4>
        </div>
    );  
}

export default User;