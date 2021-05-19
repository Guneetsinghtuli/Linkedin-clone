import React from 'react'
import Styled from 'styled-components'

const Rightside = () => {
    return (
        <Container>
            <Card>
                <Top>
                    <span>Add to your feed</span>
                    <img src="images/feed-icon.svg" />
                </Top>
                <Middle>
                    <FeedCard>
                        <Avatar />
                        <div>
                            <span>#Linkedin</span>
                            <button>Follow</button>
                        </div>
                        
                    </FeedCard>
                    <FeedCard>
                        <Avatar />
                        <div>
                            <span>#WeDontRepeat</span>
                            <button>Follow</button>

                        </div>
                        
                    </FeedCard>
                </Middle>
                <Recommendation>
                <span>View All</span>
                <img src="images/right-icon.svg" />
                </Recommendation>

            </Card>
            <Card>
                <Ad>
                    <img src="images/linkedin-ad.jpg" />
                </Ad>
                
            </Card>
            
        
        

        
        </Container>
            
        
    )
}
const Container = Styled.div `
padding:10px 12px;`;
const Card= Styled.div `
background-color:white;
border:2px solid rgba(0,0,0,0.2);
border-radius:6px;
margin-bottom:20px;




`;
const Top=Styled.div `
display:flex;
justify-content:space-between;
font-size:16px;
font-weight:600;
color:rgba(0,0,0,0.6);
padding:10px 12px;
margin:8px 0 10px 0;
`;

const Middle = Styled.div `
`;
const FeedCard= Styled.div `
padding:10px 12px;


div{
    display:flex;
    flex-direction:column;
    span{
        line-height:1.5;
    }
    button{
        width:23%;
        padding:7px;
        border-radius:20px;
        background-color:white;
        border:2px solid rgba(0,0,0,0.6);
        color:rgba(0,0,0,0.8);
        :hover{
            background-color:rgba(0,0,0,0.3);
            color:rgba(0,0,0,1);
        }
        
    }
}
`;
const Avatar = Styled.div `
background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
background-position:center;
width:48px;
height:48px;
background-size:contain;
float:left;
margin-right:8px;

`;


const Recommendation= Styled.div `
padding:10px 12px;
display:flex;
align-items:center;
span{
    margin-right:10px;
}

`;
const Ad= Styled.div `
text-align:center;
`;


export default Rightside
