import React, { useState } from 'react';

interface Props {
    addPost: (message: string) => void;
}

const CreatePost: React.FC<Props> = ({ addPost }) => {
    const [message, setMessage] = useState('');

    return (
        <div id="create">
            <textarea
                required
                placeholder="What's on your mind?"
                rows={5} 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
            />

            <button 
                className="post-button"
                onClick={() => {
                    message == ''
                    ?
                    console.log("hi")
                    :
                    addPost(message);
                    setMessage('');
                }} 
            >Post</button>
        </div>
    );
}


export default CreatePost;
