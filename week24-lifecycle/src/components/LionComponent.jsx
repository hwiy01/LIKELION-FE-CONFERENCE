import React from "react";
import styled from "styled-components";

class LionComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            growth: 'Baby Lion'
        }
    }

    componentDidMount() {
        alert('사자에게 밥을 주세요');
    }

    render() {
        const {growth} = this.state;
        
        console.log("나 render 됨");
        return(
            <Container>
                <h2>
                    {growth} 🦁
                </h2>
                <div>
                    <StyledButton onClick={()=>{this.setState({growth: 'Adult Lion'});}}> 사자 밥주기</StyledButton>
                </div>
            </Container>
        )
    }
}

export default LionComponent;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;
`
const StyledButton = styled.button`
    background-color: orange;
`