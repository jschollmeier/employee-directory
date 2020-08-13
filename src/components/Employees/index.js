import React, { Component } from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import API from "../../utils/API";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import FriendsCard from "../FriendsCard";






class Employees extends Component {
  
  state = {
    data: []
  };
  componentDidMount(){
  API.employees()
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        
        
        
        this.setState({data: res.data.results})
        
      })
      .catch(err => this.setState({ error: err.message }));
      
      

    }
    loopData(){
        var element=[];
        for (let i = 0; i < 20; i++) {
            element[i] = this.state.data[i];
            
        }
        console.log(element);
        return element;
    }
    
    render(){
        
        console.log(this.loopData())
        var testy = this.loopData();
        if(testy[1]===undefined){
            console.log("this happend")
            return (<div>Undefined</div>)
            
        }
       else{
        return (

    <Wrapper>
      <Title>Employee Directory</Title>
      <React.Fragment>
      {testy.map((friendObj, i) => <FriendsCard key={i} results={friendObj} />)}
      </React.Fragment>
    </Wrapper>

  )}};
}

export default Employees;
