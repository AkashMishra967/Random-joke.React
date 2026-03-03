import CommentsForm from "./commentForm";
import { useState } from "react";
import "./comment.css";
export default function Comment() {
    let [comments, setComments] = useState([
        {
            username: "@ak",
            remarks: "great job",
            rating: 4,
        },
    ]);


    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    };


    return (
        <>
            <h1> All Comment</h1>
            {comments.map((comment, idx) => (
                <div className="comment" key={idx}>
                    <span>{comment.remarks}</span>
                    &nbsp;
                    <span>(rating = {comment.rating})</span>
                    <p>- {comment.username}</p>
                </div>

            ))}


            <hr /><hr />
            <CommentsForm addNewComment={addNewComment} />
        </>
    )
}
