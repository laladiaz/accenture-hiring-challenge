import "./styles/MainGrid.css"

const MainGrid = ({posts}) =>{
    
    return (
        <section className="grid-posts">
        {posts.map((post)=>(
                <div className="post" key={post.id}>
                    <p className="post-title">{post.title}</p>
                    <p className="post-body">{post.body}</p>
                </div>
            ))
        }
        </section>
    )
}

export default MainGrid;