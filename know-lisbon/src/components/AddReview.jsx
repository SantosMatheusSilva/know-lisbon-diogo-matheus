import React, { useState } from "react";
import axios from "axios";

export default function AddReview(props) {
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [comments, setComments] = useState([]);
    const { id, setPlace, place } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = { user_name: name, comment };
        const updatedPlace = { ...place, comments: [...comments, newComment] };
        setPlace((previous) => ({ ...previous, comments: [...comments, newComment] }));
        axios.put(`http://localhost:5000/data/${id}`, updatedPlace)
            .then(() => {
                setComment("");
                setName("");
                axios.get(`http://localhost:5000/data/${id}`)
                    .then(response => {
                        setComments(response.data.comments);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
    };
    return (
        <section>
            <div className="comments-container">
                <h2>Reviews</h2>
                {comments.map((comment, index) => {
                    return (
                        <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <h3 style={{ padding: "0px", margin: "0px" }}>{comment.user_name}</h3>
                            <p style={{ padding: "0px", margin: "0px" }}>{comment.comment}</p>
                        </div>
                    )
                })}
            </div>
            <h2 style={{ display: "flex", alignItems: "flex-start", fontSize: "20px" }}>
                Leave a Review
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="comment-div" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <label htmlFor="name">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="comment-div" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <label htmlFor="comment">
                            Review:
                        </label>
                        <textarea
                            type="text"
                            name="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            cols={70} rows={10} />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}