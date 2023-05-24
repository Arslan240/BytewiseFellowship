import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsup: '👍',
    wow: '😮',
    heart: '💖',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => dispatch(reactionAdded({postId: post.id, reaction:name}))}
            >
                {console.log(post.reactions[name])}
                <span style={{cursor:'pointer', backgroundColor: '#8e8e8e', borderRadius:'5px', padding:'5px'}}>{emoji}</span> <span style={{margin: '0 5px'}}>{post.reactions[name]}</span>
            </button>
        )
    })
    return (
        <div>{reactionButtons}</div>
    )
}

export default ReactionButtons