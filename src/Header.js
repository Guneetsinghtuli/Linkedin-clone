import Styled from 'styled-components'
import React from 'react'
import './index.css'
import { connect } from 'react-redux';
import { signOutAPI } from './actions'



let Header;
Header = (props) =>{
    
    return (
        <Container>
        
            <Content>
                <Logo>
                    <a href="/Home"><img src="images/linkedin.png" /></a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <SearchIcon>
                        <img src="images/search-icon.svg"/>
                    </SearchIcon>

                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a href=""><img src="images/nav-home.svg"/><span>Home</span></a>
                        </NavList>
                        <NavList>
                            <a href=""><img src="images/nav-network.svg"/><span>My Network</span></a>
                        </NavList>
                        <NavList>
                            <a href=""><img src="images/nav-jobs.svg" /><span>Jobs</span></a>
                        </NavList>
                        <NavList>
                            <a href=""><img src="images/nav-messaging.svg" /><span>Messages</span></a>
                        </NavList>
                        <NavList>
                            <a href=""><img src="images/nav-notifications.svg" /><span>Notifications</span></a>
                        </NavList>
                        <User>
                            <a>
                                
                                {props.user && props.user.photoURL  ? (<img src={props.user.photoURL} />) : (<img src="images/user.svg" />)}
                                <span>Me
                                <img src="images/down-icon.svg"/></span>
                            </a>
                            <SignOut onClick={() => props.signOut()}>
                                <a >Sign Out</a>
                            </SignOut>
                        </User>
                        <Work>
                            <a>
                                <img src="images/nav-work.svg"/>
                                <span>
                                    Work
                                    <img src="images/down-icon.svg"/>
                                </span>

                            </a>
                        </Work>
                        
                        

                    </NavListWrap>
                    
                </Nav>
            </Content>
        </Container>
    )
};

const Container=Styled.div `
background-color:white;
padding:4px 10px;
position:fixed;
z-index:99;
top:0;
width:100%;
vertical-align:middle;
align-items:center;



`;
const Content=Styled.div `
    display:flex;
    align-items:center;
    margin:auto;
    flex-wrap:no-wrap;
    max-width:1128px;
`;

const Logo=Styled.span `
margin-right:12px;
font-size:0;
`;


const Search = Styled.div `
position:relative;
flex-grow:1;
& > div{
    max-width:280px;
    input{
        border:none;
        background-color:#eef3f8;
        padding-left:40px;
        width:100%;
        line-height:2;
        font-weight:400;
        font-size:14px;
        border-color:2px solid black;
        border-radius:4px;
        pointer-event:none;
    }
    
}
`;

const SearchIcon =Styled.div `
img{
        position:absolute;
        top:8px;
        left:12px;
        z-index:1;
    }
`;


const Nav=Styled.div `
margin:auto;
display:block;
width:40%;

@media (max-width:768px){
    /* display:none; */
    position:fixed;
    bottom:0;
    left:0;
    background-color:white;
    width:100%; 
}
`;
const NavListWrap=Styled.ul `
display:flex;

list-style-type:none;
align-items:center;
justify-content:space-around;

`;

const NavList=Styled.li `
display:flex;
align-items:center;
gap:10px;

.active{
    border-bottom:3px solid black;
}


a{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    font-weight:400;
    position:relative;
    min-width:82px;
    min-height:52px;
    line-height:1.5;
    border-bottom:3px solid white;
    :hover , :active {
        border-bottom:3px solid black;
        span{
            color:rgba(0,0,0,0.9);
        }
        
    }
    @media (max-width:768px){
        min-width:70px
    }

}

span{
    display:flex;
    align-items:center;
    text-decoration:none;
    color:grey;
    font-size:12px;
    
    
}


`;


const SignOut =Styled.div `
position:absolute;
top:50px;
cursor: pointer;
border-radius:0 0 4px 4px;
text-align:center;
font-size:12px;
width:100px;
background-color:white;
transition-duration:170ms;
display:none;
a:hover{
    border:0 ;
}

`;



const User = Styled(NavList) `
a > img {
    height:24px;
    width:24px;
    border-radius:50%;  
}
span{
    display:flex;
    align-items:center;
}


:hover{
    ${SignOut}{
        
        display:flex;
        align-items:center;
        justify-content:center;
    }
}
`;







const Work = Styled(User) `
border-left:2px solid rgba(0,0,0,0.08)
`;

const mapStateToProps= (state) =>{
    return{
        user: state.userState.user,
    }
}
const mapDispatchToProps = (dispatch) =>({
    signOut: () => dispatch(signOutAPI()),
});



export default connect(mapStateToProps,mapDispatchToProps)(Header);




