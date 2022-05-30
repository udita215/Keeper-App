import React,{useState} from "react";
import "./CreateArea.css";


function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
      });
      function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }
    
      function submitNote(event) {
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        event.preventDefault();
      }
    

    return (
        <>
        <div>
            <form className="create-note">
            <input
             name="title"
             placeholder="Title"
             onChange={handleChange}
          value={note.title}
             >

            </input>
            <textarea
             name="content"
             onChange={handleChange}
            value={note.content}
             placeholder="Add something"
             rows="3"
            >

            </textarea>
            <button onClick={submitNote}>Add</button>
            </form>
        </div>

        </>
    )
}
export default CreateArea;