import React from 'react';

interface Props {
    text: string,
    time: string,
    id: number,
    handleDeletePost: (id: number) => void
}

const Post: React.FC<Props> = ({ id, text, time, handleDeletePost}) => (
    
    <div className="post">   
        <div className="timeIconContainer">
            <p className="postTime">{time}</p>
            <i 
                onClick={() => handleDeletePost(id)}
                className="fas fa-trash">
            </i>
        </div>
        <p className="postText">{text}</p>     
    </div>
);

export default Post;
