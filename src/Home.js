import Styled from 'styled-components'
import React from 'react'
import Main from './Main'
import Rightside from './Rightside'
import Leftside from './Leftside'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

let Home;
Home = (props) => {
    return(
        
        <Container>
        {!props.user && <Redirect to="/" />}
            <Section>
                <h5><a>Hiring in a hurry?  </a></h5>
                <p>Find Talented pros in record time with UpWork and keep business moving</p>
            </Section>
            <Layout>
                
                <Leftside />
                <Main />
                <Rightside />
                
            </Layout>
        </Container>
        

        
        

    )

}


const Container=Styled.div `

position:relative;
top:50px;
width:100%;
margin:auto;
`;

const Section=Styled.div `
display:flex;
min-height:50px;
box-sizing:content-box;
justify-content:center;
text-align:center;
align-items:center;
padding:10px 12px;
text-decoration:underline;
h5{
    color:blue;
    font-size:14px;
    a{
        font-weight:600;
    }
    
}
p{
    font-size:14px;
    font-weight:600;
    margin:0;
}
@media (max-width:768px){
    flex-direction:column;
    padding:0 5px;
    min-height:0;
}
`;


const Layout = Styled.div `
margin:25px 0 ;
padding:25px;
display:grid;
grid-template-areas:"Left Main Right";

grid-template-columns:minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
column-gap:25px;
row-gap:25px;
grid-template-row:auto;
@media (max-width:768px){
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
}
`;




const mapStateToProps = (state) => {
    return {
        user:state.userState.user,
    };
}

export default connect(mapStateToProps)(Home)