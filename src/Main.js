import React from 'react'
import ReactPlayer from 'react-player'
import {useEffect ,useState} from 'react'
import { connect } from 'react-redux'
import Styled from 'styled-components'
import Postmodal from './Postmodal'
import { getArticleAPI } from '../src/actions'

const Main = (props) =>{

    useEffect(() => {
        props.getArticles();

    }, []);






    const [showModal,setShowModal] =useState("close");

    const handleClick = (e) => {
        
        e.preventDefault();
        
        if(showModal == "close"){
            setShowModal("open");
        }
        else{
            setShowModal("close");
        }
        
        
    }
    {console.log(props.loading)}



    return(
        <Container>
            <MainCard>
                <ShareCard>
                
                    <Post>
                        <div> 
                        {props.user && props.user.photoURL ? (
                            <img src={props.user.photoURL} />
                        ) :(
                            <img src="images/user.svg" />
                        )}
                            <button onClick={handleClick} style={{cursor: "pointer"}}disabled={props.loading ? true : false} >Start a post</button>
                        </div>                        
                    </Post>
                    <Media>
                        <div>
                        <button>
                            <img src="images/image-icon.svg" />   
                            <span>Photo</span>                     
                        </button>
                        <button>
                            <img src="images/video-icon.svg" />
                            <span>Video</span>                        
                        </button>
                        <button>
                            <img src="images/event-icon.svg" />
                            <span>Event</span>                        
                        </button>
                        <button>
                            <img src="images/article-icon.svg" />
                            <span>Write an article</span>                        
                        </button>


                        </div>
                    
                        
                    </Media>
                </ShareCard>
            </MainCard>
            


            <>
            {
                props.articles.length == "0" ? <Nopost><p> There are no articles</p></Nopost>:
            <Content>
               
                {props.loading && <img src="images/1496.gif"/> }
                {props.articles.length > 0 && 
                props.articles.map((article,key) => (
            
            <PostCard key={key}>
                <Head>
                    <img src={article.actor.image}/>
                    <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                    </div>
                    <button>
                        <img src="images/dots.svg" />
                    </button>
                </Head>
                <Description><p>{article.description}</p></Description>
                <Body>
                    {
                        article.sharedImg ==  " " ? (
                            <ReactPlayer width={'100%'}  url={article.video} />
                    ):( 
                        article.sharedImg && <img src={article.sharedImg} />

                    )
                    }
                </Body>
                <PostBody>
                    <button><img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"/>6</button>
                    <span>|  2 Comments</span>
                </PostBody>
                <Like>
                    <div>
                        <button>
                            <img src="images/like-icon.svg"/>
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="images/comment-icon.svg"/>
                            <span>Comment</span>
                        </button>
                        <button>
                            <img src="images/share-icon.svg"/>
                            <span>Share</span>
                        </button>
                        <button>
                            <img src="images/send-icon.svg"/>
                            <span>Send</span>
                        </button>
                    </div>
                </Like>
            </PostCard>
            ))};
            </Content>
            



            }
            </>
            <Postmodal handleClick={handleClick}  showModal={showModal} />

            
            
        </Container>

    )
}

const Container =Styled.div `

padding:10px 12px;

`;
const MainCard= Styled.div `
padding:10px 12px;
background-color:white;
border:2px solid rgba(0,0,0,0.2);
border-radius:10px;
margin-bottom:20px;
`;
const Nopost = Styled(MainCard) `
text-align:center;
font-size:18px;
font-weight:600;
color:#0072b1;
`;
const ShareCard= Styled.div `

display:flex;
flex-direction:column;

`;
const Post=Styled.div `

div{
    display:flex;

    &:first-child{
        display:flex;
        align-items:center;
        padding:10px 12px;
        img{
            width:48px;
            border-radius:50%;
            margin-right:15px;
        }
    }
    button{
        background-color:white;
        width:100%;
        padding:13px;
        text-align:left;
        color:rgba(0,0,0,0.5);
        font-size:14px;
        font-weight:600;
        border:1px solid rgba(0,0,0,0.3);
        border-radius:24px;
        :hover{
            background-color:rgba(0,0,0,0.1);
            font-family:Arial;
        }
        
    }
    
}



`;
const Photo= Styled.div `
width:30px;
height:30px;
img{
    border-radius:50
    
}

`;

const Media = Styled.div `
div{
    display:flex;
    justify-content:space-around;
    button{
        display:flex;
        align-items:center;
        background-color:white;
        border:none;
        border-radius:4px;
        margin:4px 6px;
        span{
            font-weight:600;
            color:rgba(0,0,0,0.6);
            font-size:14px;
            padding:9px 1px;
        }
        img{
            margin:0 4px;
        }
        :hover{
            background-color:rgba(0,0,0,0.1);
        }
    }
    @media (max-width:768px){
        flex-direction:column;
    }
    
}
`;

const  Content = Styled.div `
text-align:center;
& > img{
    width:64px;
}

`;

const PostCard=Styled(MainCard) `
padding:0;
`;
const Head=Styled.div `
display:flex;
align-items:center;
text-align:left;
font-size:14px;
overflow:hidden;
position:relative;
padding:10px 12px;

div{
    display:flex;
    flex-direction:column;
    span:first-child{
        
        
        font-size:16px;
        font-weight:600;
    }
    span:nth-child(2){
        font-size:12px;
    }
    span:last-child{
        font-size:12px;
    }
        
    
}

img{
    width:48px;
    border-radius:50%;
    margin-right:8px;
}
button{
    position:absolute;
    right:0;
    top:8px;
    box-content:border-box;
    background:transparent;
    border:none;
    img{
        width:25px;
        
    }
    
}
`;

const Body = Styled.div `
margin:-2px;
border:0;
padding:0;
display:flex;
align-items:center;
overflow:hidden;
box-content:border-box;

img{
height:100%;
width:100%;
}
`;

const PostBody = Styled.div `
display:flex;
align-items:center;
justify-content:initial;
padding:7px;
border-bottom:1px solid rgba(0,0,0,0.2);

    span{
    font-size:12px;
    font-weight:500;

    }
    button{
        display:flex;
        align-items:center;
        background:transparent;
        border:none;
        
        img{
            margin-right:4px;
        }
        
    }

`;


const Description = Styled.div `
text-align:left;
p{
    padding:16px 9px;
    margin:0;
}
`;

const Like=Styled.div `
display:flex;

align-items:center;
padding:8px;
button{
    display:inline-flex;
    align-items:center;
    margin:0 5px;
    padding:9px 6px;
    border:none;
    align-items:center;
    background:transparent;
    border-radius:6px;
    color:rgba(0,0,0,0.6);
    :hover{
            background-color:rgba(0,0,0,0.1);
           
        }
    span{
        font-weight:500;
        margin-left:4px;
        font-size:14px;
    }
}
`;

const mapStateToProps= (state) =>{
    console.log(state)
    return{
        
        loading:state.articleState.loading,
        user: state.userState.user,
        articles: state.articleState.articles, 
    };
};

const mapDispatchToProps = (dispatch) => ({
    getArticles : () => dispatch(getArticleAPI()), 
})

export default connect(mapStateToProps,mapDispatchToProps)(Main)

