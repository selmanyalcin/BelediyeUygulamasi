export default function Comment(props) {
  return (
    <div className="CommentMain">
      <div className="CommentorPP">
        <img className="HeaderPP" src={props.creatorPhoto} />
      </div>
      <div className="CommentText">
        <p style={{ fontWeight: "bold" }}>{props.creator}</p>
        <p style={{ marginTop: "-10px" }}>{props.comment}</p>
      </div>
    </div>
  );
}
