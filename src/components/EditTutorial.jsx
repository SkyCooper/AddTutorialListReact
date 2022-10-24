import { useEffect, useState } from "react";

const EditTutorial = ({ edititem, editTutorial }) => {
  const { id, title, description } = edititem;
  const [newtitle, setNewtitle] = useState(title);
  const [newdescription, setNewdescription] = useState(description);

  useEffect(() => {
    setNewtitle(title);
    setNewdescription(description);
  }, [title, description]);

  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
            </div>

            <div className="modal-body">
              <p>Title</p>
              <input
                type="text"
                value={newtitle}
                onChange={(e) => setNewtitle(e.target.value)}
              />
              <br />
              <p>Description</p>
              <input
                type="text"
                value={newdescription}
                onChange={(e) => setNewdescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() => editTutorial(id, newtitle, newdescription)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
