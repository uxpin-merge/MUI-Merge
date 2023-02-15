import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Dialog, DialogActions } from "@mui/material";
export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const [dialogState, setdialogState] = React.useState(true);



    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    var uxpinContainer = document.getElementById("properties-panel");
    var customizerContainer = document.getElementById("jack-button");
    uxpinContainer.prepend(customizerContainer)


    return (
        <div id="jack-drawer">
            {/* {["right"].map((anchor) => (
                <React.Fragment key={anchor}>

                    <Drawer
                        anchor={anchor}
                        open={true}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        disableBackdropTransition
                        variant="permanent"
                    ><Button onClick={() => console.log("true")} id="jack-button">{anchor}</Button>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))} */}

            <Dialog aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" open={dialogState}>
                <DialogActions >
                    <Button >Disagree</Button>
                    <Button autoFocus onClick={() => setdialogState(false)}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>


        </div>
    );
}
