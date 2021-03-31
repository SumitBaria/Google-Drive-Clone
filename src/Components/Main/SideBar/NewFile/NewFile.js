import React, { useState } from "react";
import "../../../../Styles/NewFile.css";
import AddIcon from "@material-ui/icons/Add";

import firebase from "firebase";
import { storage, db } from "../../../../firebase";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,

    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const NewFile = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  // const [filesize, setFilesize] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setUploading(true);

    const uploadTask = storage
      .ref(`files/${file.name}`)
      .put(file)
      .then(
        (snapshot) => {
          console.log(snapshot);
          // setFilesize(snapshot._delegate.bytesTransferred);
          storage
            .ref("files")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("files").add({
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: file.name,
                fileUrl: url,
                size: snapshot._delegate.bytesTransferred,
              });

              setUploading(false);
              setFile(null);
              // setFilesize(0);
              setOpen(false);
            });
        },
        (error) => {
          console.log(error);
          alert(error.message);
        }
      );

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     console.log(snapshot);
    //     setFilesize(snapshot._delegate.bytesTransferred);
    //   },
    //   (error) => {
    //     console.log(error);
    //     alert(error.message);
    //   },
    //   () => {
    //     storage
    //       .ref("files")
    //       .child(file.name)
    //       .getDownloadURL()
    //       .then((url) => {
    //         db.collection("files").add({
    //           timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    //           caption: file.name,
    //           fileUrl: url,
    //           size: filesize,
    //         });

    //         setUploading(false);
    //         setFile(null);
    //         setFilesize(0);
    //         setOpen(false);
    //       });
    //   }
    // );
  };

  return (
    <div className="newFileContainer">
      <div className="sideBarAdd" onClick={handleOpen}>
        <AddIcon fontSize="large" />
        <span>New</span>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          {uploading ? (
            <h2 id="simple-modal-title">File is Uploading...</h2>
          ) : (
            <>
              <h2 id="simple-modal-title">Upload Document</h2>
              <div className="modalUpload">
                <input
                  type="file"
                  className="modalInput"
                  onChange={handleChange}
                />
                <Button color="primary" onClick={handleUpload}>
                  Upload
                </Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default NewFile;
