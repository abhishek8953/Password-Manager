import notesStore from "../stores/notesStore"


export default function(){

    const store=notesStore();
    

    if(store.updateForm._id) return <></>

    return(
        
            <div>
              <h2>Create Password</h2>
              <form onSubmit={store.createNote}>
                <input
                  onChange={store.updateCreateFormField}
                  value={store.createForm.title}
                  name="title"
                />
                <input
                  onChange={store.updateCreateFormField}
                  value={store.createForm.body}
                  name="body"
                />
    
                <button type="submit">Submit</button>
              </form>
            </div>
         
    )
}