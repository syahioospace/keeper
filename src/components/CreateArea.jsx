import React, { useState } from "react";
import './createarea.css'
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) { 
  const [isExpanded, setExpanded] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(e) { 
    const { name, value } = e.target

    setNote(prevNote => { 
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(e) { 
    props.onAdd(note)
    setNote({
      title: "",
      content: ""
    })
    e.preventDefault()
  }

  function expand() { 
    setExpanded(true)
  }

  return (
    <div>
      <form action="" className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}

        <textarea
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note ..."
        />

        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  )
}

export default CreateArea