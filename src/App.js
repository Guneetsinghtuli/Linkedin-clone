import React from 'react'
import {useEffect} from 'react'
import styled from 'styled-components'
import './index.css'
import {connect} from 'react-redux'
import {signInAPI,getUserAuth} from './actions'
import {Redirect} from 'react-router'


var App;
App = (props) =>{
    useEffect(() => {
        props.getUserAuth();
    }, [])
    return(
        <Container>
        {props.user && <Redirect  to="/Home" />}
            <Header>
                <a href="/"><img src="images/login-logo.svg" /></a>
                <div>
                    <Join>Join Now</Join>
                    <Sign>Sign in</Sign>
                </div>
            </Header>
            <Section>
            <Hero>
                <h1>Welcome to your professional community</h1>
                <img src="images/login-hero.svg" />
                
            </Hero>
             <Form>
                 <Google onClick={()=>props.signIn()}>
                     <img src="images/google.svg" />
                     Sign in with Google
                 </Google>
             </Form>   
            </Section>
           
            
            
        </Container>
    )
}

const Container = styled.div `
padding:20px;
position:relative;
overflow:hidden;
`;
const Header =styled.header `
margin:auto;
padding:12px 0 16px;
max-width:1280px;
margin:0;
display:flex;
justify-content:space-between;
flex-wrap:nowrap; 
& > a{
    width:150px;
    height:24px;
    @media (max-width: 768px){
        padding:0 5px;
    }
}
`;

const Join = styled.a `
font-size:16px;
color:rgba(0,0,0,0.68);
font-weight:500;
padding:6px 9px;
line-height:15px;
border-radius:4px;
margin-right:12px;
transition-duration:170ms;
:hover{
    background-color:rgba(0,0,0,0.1);
    color:rgba(0,0,0,1);
}

`;
const Sign=styled.a `
border:2px solid #0072b1;
color:#0072b1;
font-weight:600;
font-size:16px;
line-height:40px;
padding:10px 12px;
border-radius:24px;
transition-duration:170ms;
:hover{
    background-color:rgba(158, 197, 255, 0.15);
    text-decoration:none;
}
`;

const Section=styled.div `
display:flex;
flex-wrap:wrap;
justify-content:initial;
padding-bottom:50px;
padding-top:50px;
min-height:700px;
position:relative;
width:100%;
max-width:1128px;
margin:auto;
@media (max-width:768px){
    margin:auto;

}
`;

const Hero=styled.div `
 width:100%;
padding:0 10px;


h1{
    max-width:1280px;
    width:55%;
    font-weight:200;
    line-height:60px;
    font-size:66px;
    color:#2977c9; 

@media(max-width:768px){
    text-align:center;
    font-size:20px;
    width:100%;
    line-height:2;
    
}
}
img{

height:670px;
width:700px;
position:absolute;
right:-150px;
bottom:-2px;

@media (max-width: 768px){
    position:initial;
    top:230px;
    width:initial;
    height:initial;
}
}

`;
const Form=styled.div `
width:410px;
@media (max-width:768px){
width:100%;
}
`;
const Google=styled.button `
display:flex;
z-index:1;
justify-content:center;
background-color:white;
align-items:center;
width:100%;
border-radius:24px;
height:56px;
vertical-align:middle;
transition-duration:170ms;
font-size:20px;
margin-bottom:300px;
color:grey;
border-color:2px solid black;
:hover{
    background-color:rgba(207,207,207,0.25);
    color:black;
    border-color:2px solid white;
}



`;




const mapStateToProps= (state) =>{
    return{
        user: state.userState.user,
    }
}

const mapDispatchToProps= (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
    getUserAuth: () => {
        dispatch(getUserAuth())
    },
});




export default connect(mapStateToProps,mapDispatchToProps)(App);

