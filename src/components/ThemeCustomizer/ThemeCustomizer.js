import React from "react";
import PropTypes from "prop-types";
import { createTheme } from "@mui/material/styles";
import { ThemeContext } from "../UXPinWrapper/UXPinWrapperWithThemeCustomizer";
import { Dialog, DialogActions, Button, Drawer, Fab, Popper, Icon, Portal, IconButton, Stack } from "@mui/material";

//Will add custom font links to the header
const addFont = (link, index) => {
    let newFontLink = document.createElement("link");
    newFontLink.href = link;
    newFontLink.rel = "stylesheet";
    newFontLink.id = "muiCCustomFont" + index;
    document.head.appendChild(newFontLink);
    //console.log("added: ", newFontLink);
};

let messageData
let backtoTheme

function ThemeCustomizer(props) {

    const [dialogState, setdialogState] = React.useState(props.showCreator);

    const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);

    window.addEventListener("message", onMessageHandler);

    const [newCreatedTheme, setNewCreatedTheme] = React.useState();
    // alert(JSON.stringify(newCreatedTheme))

    function onMessageHandler(event) {
        if (typeof event.data === "string") {
            messageData = event.data;
            backtoTheme = JSON.parse(messageData);

            // console.log("messageData", messageData)
            // console.log("backtoTheme", createTheme(backtoTheme))
        }
    }

    // const boilerplateTheme = {
    //     backtoTheme
    //   };


    // React.useEffect(() => {


    // })




    function fabClick() {
        setdialogState(true)
    }


    React.useEffect(() => {

        alert("fired")
        console.log("messageData", messageData)
        console.log("backtoTheme", createTheme(backtoTheme))

        setdialogState(props.showCreator)
        setThemeOptions((oldTheme) => {
            let options = { ...props };

            options.currentTheme = oldTheme.theme;

            let newTheme;

            //if there is a theme object given, it will be the basis for any customizations

            if (props.themeObject && props.themeObject !== "") {
                options.currentTheme = createTheme({
                    ...JSON.parse(JSON.stringify(props.themeObject)),
                });
            }
            newTheme = options.currentTheme;


            // if (backtoTheme) {
            //     newTheme = createTheme({
            //         ...JSON.parse(JSON.stringify(backtoTheme)),
            //     });
            // }


            //GET ALL GOOGLE FONT NAMES AT ANY LEVEL OF THE THEME WITH RECURSION


            var traverse = function (o, fn) {
                for (var i in o) {
                    fn.apply(this, [i, o[i]]);
                    if (o[i] !== null && typeof (o[i]) == "object") {
                        traverse(o[i], fn);
                    }
                }
            }

            var obj = props.themeObject
            const fonts = []

            traverse(obj, function (k, v) {
                console.log(k + " : " + v);
                if (k == "fontFamily") {
                    //ADD SOURCING FOR EACH FONT FOUND IN THEME
                    let index = 0;
                    if (document.querySelectorAll("link[href='" + v + "']").length === 0) {
                        addFont('https://fonts.googleapis.com/css?family=' + v, index++);
                    }
                    fonts.push(v)
                }
            });

            // console.log("fonts", fonts)

            return {
                theme: newTheme,
            };
        });
    }, [props, setThemeOptions, themeOptions.themeCustomizerProps]); //only re-run if any of these change

    return (
        <div id='theme-customizer-container'>

            {dialogState ?
                <div id="jack-drawer">
                    <Drawer
                        anchor="right"
                        open={dialogState}
                        onClose={() => setdialogState(false)}
                        onOpen={() => setdialogState(true)}
                        variant="temporary"
                        sx={{
                            width: 1200,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: 1200,
                                boxSizing: 'border-box',
                            }
                        }}
                    >
                        <Stack direction="row" justifyContent="flex-end" sx={{ backgroundColor: "#000000" }}>
                            <IconButton aria-label="delete" onClick={() => setdialogState(false)} sx={{ color: "#ffffff" }}>
                                <Icon>cancel</Icon>
                            </IconButton>
                        </Stack>


                        <iframe src="https://jackbehar.github.io/mui-theme-creator/"
                            allow="clipboard-read; clipboard-write"
                            style={{ height: '100%', width: '100%', border: 'none' }}
                            title="Iframe Example"
                            id='destination'></iframe>



                    </Drawer>

                </div>
                :
                <></>
            }
            <Portal >
                <div id='poppertheme'>
                    <Fab autoFocus onClick={() => fabClick()} variant="contained" color="primary" size="xl" sx={{
                        position: 'absolute',
                        bottom: '50px',
                        right: '30px'
                    }}>
                        <Icon>palette</Icon>
                    </Fab>
                </div>
            </Portal>

            {JSON.stringify(props.themeObject)}

            <p>Should change global theme props</p>
            <div style={{ marginTop: "2em" }}>{props.children}</div>
        </div>
    );
}

ThemeCustomizer.propTypes = {
    themeObject: PropTypes.object,
    /**
 * @uxpinignoreprop
 */
    showCreator: PropTypes.bool,
};

export default ThemeCustomizer;