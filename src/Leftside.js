import React from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux'
import {useEffect ,useState} from 'react'

const Leftside= (props) => {
    return (
        <Container>
        <ArtCard>
            <UserInfo>
                 <BackgroundImage />
                <a>
                    <Photo />
                    <Link>Welcome, {props.user ? (props.user.displayName) : "there"}!</Link>
                </a>
                <a>
                    <AddPhotoText>Add a Photo </AddPhotoText>
                </a>
            </UserInfo>
            <Widget>
                <a>
                <div>
                    <span>Connections</span>
                    <span>Grow your network</span>
                    
                </div>
                    <img src="images/widget-icon.svg" />
                </a>
                
            </Widget>
            <Item>
                <span>
                    <img src="images/item-icon.svg" />
                    My Items
                </span>
            </Item>
            

        </ArtCard>
        <ArtCard>
            <SecondCard>
                <div>
                    <a><span>Groups</span></a>
                    <a><span>Events</span></a>
                    <a><span>Follows Hashtags</span></a>
                </div>
                <img src="images/plus-icon.svg"/>
            </SecondCard>
            <Newitem>
                <a>
                <span>Discover More</span>
                </a>
            </Newitem>
            </ArtCard>
            
                
        </Container>
            
        
    )
}
const Container = Styled.div `


`;
const ArtCard =Styled.div `
background-color:#fff;
border:2px solid rgba(0,0,0,0.2);
text-align:center;
margin:7px 12px;
border-radius:6px;
position:relative;

`;
const UserInfo = Styled.div `
line-height:1.5;
margin-bottom:12px;
`;
const BackgroundImage=Styled.div `
background: url('images/card-bg.svg');
background-repeat:no-repeat;
padding:- 12px;

height:50px;
background-size:462px;
background-position:center;
`;
const Photo =Styled.div `
background-image:url('images/photo.svg');
box-sizing:border-box;
background-position:center;
background-size:60%;
background-color:white;
background-repeat:no-repeat;
border:2px solid white;
border-radius:50%;
margin:-32px auto 12px;
width:72px;
height:72px;
`;
const Link = Styled.div `
font-size:16px;
line-height:1.5;
color:rgba(0,0,0,0.9);
font-weight:600;
`;
const AddPhotoText = Styled.div `
color:#0a66c2;
margin-top:6px;
font-size:12px;
line-height:1.3;
font-weight:400;
`;
const Widget = Styled.div `
/* border-bottom:2px  solid rgba(0,0,0,0.2); */
border-top:2px solid rgba(0,0,0,0.2);

& > a{
    text-decoration:none;
    display:flex;
    padding:10px 12px;
    align-items:center;
    justify-content:space-between;
    :hover{
        background-color: rgba(0,0,0,0.2);
    }
    div{
        display:flex;
        text-align:left;
        flex-direction:column;
        span{
            font-size:12px;
            line-height:1.5;
            &:first-child{
                color:rgba(0,0,0,0.7);
                font-weight:500;

            }
            &:nth-child(2){
                color:rgbs(0,0,0,1);
            }
        }
    }
 }


`;

const Item= Styled.div `
border-top:2px solid rgba(0,0,0,0.2);
text-align:left;
padding:10px 12px;
font-size:12px;
img{
    height:14px;
}
span{
    display:flex;
    align-items:center;
}
:hover{
    background-color:rgba(0,0,0,0.2);
}

`;

const SecondCard=Styled.div `
padding:10px 12px;
display:flex;
text-align:left;
line-height:1.9;
justify-content:space-between;
font-size:12px;
div{
    display:flex;
    flex-direction:column;
    span{
        :hover{
            color:#0a88c2;
            
        }
}
}

`;

const Newitem = Styled.div `
color:rgba(0,0,0,0.7);
font-size:12px;
display:flex;
text-align:left;
padding:12px 12px;
border-top:2px solid rgba(0,0,0,0.2);
font-weight:600;
:hover{
    background-color: rgba(0,0,0,0.3);
}
`;

const mapStateToProps = (state) => {
    return {
        user:state.userState.user,
    };
}


export default connect(mapStateToProps)(Leftside);
