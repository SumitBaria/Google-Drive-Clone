import {
  Modal,
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { auth, db } from "../../../firebase";
import DescriptionIcon from "@material-ui/icons/Description";
import "../../../Styles/MainBody.css";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => {
  return createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,

      // border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  });
});

const MainBody = () => {
  const [files, setFile] = useState([]);
  // const username = localStorage.getItem("User:");
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   return setOpen(true);
  // };

  useEffect(() => {
    db.collection("files")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setFile(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            file: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="mainBodyContainer">
      <Grid container spacing={3} className="mainBodyGrid">
        {files.map(({ id, file }) => {
          if (file.username == auth.currentUser.displayName) {
            return (
              <Grid item xs={6} sm={6} md={3} key={id}>
                <a href={file.fileUrl} className="mainBodyATag">
                  <Card className="mainBodyCard">
                    <CardActionArea>
                      <CardMedia className="mainBodyFileIcon">
                        <DescriptionIcon
                          className="mainBodyFileIconImage"
                          fontSize="large"
                        />
                      </CardMedia>

                      <CardContent>
                        <Typography gutterBottom className="mainBodyCardTitle">
                          {file.caption}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </a>
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
};

export default MainBody;
