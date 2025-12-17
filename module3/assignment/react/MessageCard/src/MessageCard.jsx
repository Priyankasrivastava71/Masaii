function MessageCard(props) {
  return (
    <div style={{ border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px"}} >
    
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </div>
  );
}

export default MessageCard;