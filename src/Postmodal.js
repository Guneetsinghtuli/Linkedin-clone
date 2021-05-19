import Styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import ReactPlayer from 'react-player';
import {connect } from 'react-redux';
import firebase from 'firebase'
import {postArticleAPI} from './actions/index'
const Postmodal = (props) => {
    const [editorText,setEditorText] = useState("");
    const [shareImage,setShareImage] = useState("");
    const [shareVideo,setShareVideo] = useState("");
    const [assetArea,setAssetArea] = useState("")

    const handleChange = (e) => {
        const image= e.target.files[0];

        if(image === '' || image === undefined){
            alert("No Image")
        }
        setShareImage(image);
    }
    const postArticle =(e) => {
        e.preventDefault();
        
        const payload={
            image:shareImage,
            video:shareVideo,
            user: props.user,
            description:editorText,
            timestamp: firebase.firestore.Timestamp.now(),
            
        }; 
        props.postArticle(payload);
        reset(e);


    };


    const switchAssetArea = (area) =>{
        setShareVideo("");
        setShareImage("");
        setAssetArea(area);
    }
    
    const reset = (e) =>{
        setEditorText("");
        setShareImage("");
        setShareVideo("") 
        setAssetArea("");
        props.handleClick(e);
    }
    return(
        <>
        {props.showModal === "open" &&
        <Container>
            <Content>
                <Header>
                    <span>Create a Post</span>
                    <button onClick={(event) => reset(event)}><img src="images/close-icon.svg"/></button>
                </Header>
                <Userinfo>
                    {props.user.photoURL ? (<img src={props.user.photoURL} />) : (<img src="images/user.svg" />)}
                    
                    <span>{props.user.displayName}</span>
                </Userinfo>
                <Creation>
                    <Textarea>
                        <textarea 
                        value={editorText} 
                        onChange={(e) => setEditorText(e.target.value)}
                        placeholder="What do you want to talk about?"
                        autoFocus={true}
                        >
                            
                        </textarea>
                    </Textarea>
                    {assetArea === 'image' 
                    ? (
                    <Uploadedimage>
                    
                        <input type="file" accept="image/gif, image/jpeg , image/png" name="image"
                            style={{display:"none"}}
                            onChange={handleChange}
                            id="file"
                        />
                        <p>
                            <label htmlFor="file" style={{color:'#0a88c2'}}> Click me</label>
                        </p>
                        {shareImage && <img src={URL.createObjectURL(shareImage)} />}
                        </Uploadedimage>
                        ) : (
                            assetArea === "media" &&
                        <>
                        <input type="text" placeholder="Enter the link" 
                            value={shareVideo}
                            onChange={(e) => setShareVideo(e.target.value)}
                            style={{height:"30px",fontSize:"16px",padding:"7px",fontWeight:"600",marginBottom:"20px",color:"#0a88c2"}}
                        />
                        {shareVideo && (
                            <ReactPlayer width={"100%"} url={shareVideo} />
                        ) }

                        </>
                        )
                    }
                    
                    <Attacharea>
                        <div>
                            <button className="but" onClick={() => setAssetArea("image")}><img src="images/image-icon.svg"/></button>
                            <button className="but" onClick={() => setAssetArea("media")}><img src="images/video-icon.svg"/></button>
                            <button className="but"><img src="images/chat-icon.svg" />Anyone</button>
                        </div>
                        <Postbutton onClick={(event) => {postArticle(event)}}>
                            <button disabled={!editorText ? true : false }>Post</button>
                        </Postbutton>    
                        
                        
                    </Attacharea>
                </Creation>
            </Content>
        </Container>
        }
        </>
    )
        
}
const Container = Styled.div `
position:fixed;
overflow:scroll;
left:0;
right:0;
top:0;
bottom:0;
z-index:9999;
animation:fadeIn;
background-color:rgba(0,0,0,0.7);
animation-duration:  0.5s;

`;

const Content=Styled.div `
width:100%;
max-width:552px;
background-color:white;
border-radius:4px;
overflow:initial;
position:relative;
display:flex;
top:35px;
margin:0 auto;
display:flex;
flex-direction:column;

`;



const Header= Styled.div `

display:block;
padding:16px 18px;
font-size:18px;
display:flex;
justify-content:space-between;
align-items:center;
font-weight:100;
border-bottom:2px solid rgba(0,0,0,0.2);
button{
    padding:6px ;
    border-radius:50%;
    background-color:white;
    border:none;
    transition-duration:170ms;
    :hover{
        background-color:rgba(0,0,0,0.2)
    }
    
}

`;
const Userinfo= Styled.div `
padding:16px 25px;
display:flex;
justify-content:initial;
align-items:center;
img{
height:48px;
width:auto;
border-radius:50%;
margin-right:12px;
}
span{
font-size:16px;
font-weight:600;
}
`;


const Creation = Styled.div `
display:flex;
flex-direction:column;
justify-content:space-between;
padding:18px 25px;
`;

const Textarea = Styled.div `

padding:10px 20px;
textarea{
    border:none;
    width:100%;
    min-height:100px;
    resize:none;
    border:none;
    outline:none;
    font-size:18px;
    :active{
        border:none;
        font-size:16px;

    }
    
}
`;

const Attacharea= Styled.div `
display:flex;
justify-content:space-between;
padding:18px 10px 0 10px;
div{
    display:flex;
    .but{
        
        :hover{
                background-color:rgba(0,0,0,0.1);
        }
    }
    button{
        display:flex;
        align-items:center;
        
        &:nth-child(3){
            img{
                margin-right:6px;
                pointer-events:none;
            }
        }
    }
}
button{
    background:transparent;
    border:none;
    border-radius:4px;
    padding:10px;
    font-size:14px;
    border-radius:24px;
    
    
}
`;


const Postbutton= Styled.div `
button{
    :disabled{
        background-color:rgba(0,0,0,0.1);
        color:grey;
    }
    transition-duration:300ms;
    background-color:#0a88c2;
    color:white;
    font-weight:500;
    font-size:16px;
    line-height:1.5;
    
}
`;

const Uploadedimage = Styled.div `
text-align:center;
img{
    width:100%;
}
`;


const mapStateToProps = (state) => {
    return {
        user:state.userState.user,
    };
}

const mapDispatchToProps= (dispatch) =>({

    postArticle : (payload) => dispatch(postArticleAPI(payload)),
});



export default connect(mapStateToProps,mapDispatchToProps)(Postmodal);