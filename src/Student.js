import React ,{Component} from 'react'
class Student extends Component{
    constructor(){
        super();
        this.state={
            data:1  
        }
    }
    apple(){
        this.setState({data:this.state.data+1})
    }
   render(){
    return(
        <div>
        <h1>hello from student</h1>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>clickme</button>
        </div>
    )   
   } 
}
export default Student;
