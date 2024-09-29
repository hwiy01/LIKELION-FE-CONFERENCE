import React from "react";

class MyComponent extends React.Component{
    constructor(){
        //컴포넌트 rule 설정...
        super()
        this.state = {
            city: 'Hwasung'
        }
        console.log('나는 constructor다');
    }

    componentDidMount() {
        console.log('나 mount 됨');
    }
    componentDidUpdate() {
        console.log('나 update 됨');
    }

    render() {
        const {name} = this.props;
        const {city} = this.state;
        
        console.log("나 render 됨");
        return(
            <div>
                <h1>Hello there, {name}, {city}</h1>
                <button onClick={()=>{this.setState({city: 'Dongak'});}}>change city</button>
            </div>
        )
    }
}

export default MyComponent;