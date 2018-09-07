import React from "react"
class Comp1 extends React.Component{
    constructor(...args){
        super(...args);
    }
    render(){
        return (
            <div className = "index">
                hello react!
            </div>
        );
    }
}
export default Comp1;