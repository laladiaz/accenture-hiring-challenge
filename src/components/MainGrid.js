import "./styles/MainGrid.css";
import { NavLink } from 'react-router-dom';

const MainGrid = ({posts}) =>{
    
    return (
        <section className="grid-posts">
        {posts.map((post)=>(
                <NavLink to='/one-post' className="post" key={post.id}>
                    <p className="post-title">{post.title}</p>
                    <p className="post-body">{post.body}</p>
                </NavLink>
            ))
        }
        </section>
    )
}

export default MainGrid;