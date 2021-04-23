import React, { useState } from 'react';
import CreatePost from './CreatePost';
import Post from './Posts';


const PostList: React.FC = () => {

    interface iPost{
        id: number,
        time: string,
        text: string
    }
    
    const seedPosts: iPost[]  = [
        {
            id: 1,
            time: new Date().toLocaleTimeString(),
            text: "Lorem ipsum dolor sit amet, ne eum quando persius. Mel probatus pertinax antiopam ei, an falli epicuri recteque eam. Sonet soleat verear ad quo. Eu eum legere facilisi consulatu, quas consequuntur eum ut. His et suas graece eripuit, dolores concludaturque ius no."
            
        },
        {
            id: 2,
            time: new Date().toLocaleTimeString(),
            text: "Insolens percipitur cu eos. Ei per nostro repudiare, cibo latine mea ne, iusto mucius explicari qui eu. Quo ea partem aliquam epicurei, ne has rebum impedit. Atqui inimicus tincidunt per ut, in eros iudico eum. Cu ignota debitis vis, pri ad oblique feugait, alterum labores iracundia usu in. Et sed senserit recteque, no appellantur liberavisse mea."
        }
    ]

    const [idNum, setIdNum] = useState(3)
    const [posts, setPosts] = useState<iPost[]>(seedPosts);

    const handleAddPost = (message: string) =>{
        const newPost: iPost = {
            id: idNum,
            time: new Date().toLocaleTimeString(),
            text: message
        }
        setPosts([...posts, newPost]);
        setIdNum(idNum + 1)
    }

    const handleDeletePost = (id: number) => {
        setPosts(posts.filter(post => post.id != id))
        console.log(id, posts)
    }
     

    return (
        <div className='posts-container'>
            <h2>Fakebook</h2>

            <CreatePost addPost={handleAddPost} />

            {posts.map((post, i) => <Post key={i} id={post.id} text={post.text} time={post.time} handleDeletePost={handleDeletePost}/>)}
        </div>
    );
}

export default PostList;
