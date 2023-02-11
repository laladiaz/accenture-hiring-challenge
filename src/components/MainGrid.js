

const MainGrid = ({posts}) =>{
    
    console.log(posts);

    return (
        <main className="grid-posts">
            {
                posts.map((post)=>{
                    <div className="div-post" key={posts.id}>
                        <p>{post.title}</p>
                    </div>
                })
            }
        </main>
    )
}

export default MainGrid;