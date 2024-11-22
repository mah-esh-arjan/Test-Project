

const Post = ({title, content, author}) => {

    return(
        <>
          <h1>{title}</h1>
          <h2>{author}</h2>
          <h3>{content}</h3>
        </>
    )
}

export default Post