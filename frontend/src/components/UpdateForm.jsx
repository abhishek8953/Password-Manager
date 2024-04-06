import notesStore from "../stores/notesStore";


export default function UpdateForm() {
  const store=notesStore();

  if (!store.updateForm._id) return <></>;
  return (
    <div>
      <h2>Update pass</h2>
      <form onSubmit={store.updateNote}>
        <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.title}
          name="title"
        />
        <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.body}
          name="body"
        />
        <button type="submit">Update pass</button>
      </form>
    </div>
  );
}
