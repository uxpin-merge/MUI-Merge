import React from "react";
import PropTypes from "prop-types";
import { createTheme } from "@mui/material/styles";
import { ThemeContext } from "../UXPinWrapper/UXPinWrapperWithThemeCustomizer";
import { Dialog, DialogActions, Button, Drawer, Fab, Popper, Icon, Portal, IconButton, Stack } from "@mui/material";



function ThemeCustomizer(props) {


    let testTheme = {
        "palette": {
            "mode": "light",
            "primary": {
                "contrastText": "#ffffff",
                "dark": "#1565c0",
                "light": "#42a5f5",
                "main": "#ff0000"
            },
        }

    }


    const [dialogState, setdialogState] = React.useState(false);
    const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);
    const [createdTheme, setCreatedTheme] = React.useState(testTheme);

    window.addEventListener("message", onMessageHandler);

    function onMessageHandler(event) {
        if (typeof event.data === "string") {

            messageData = event.data;
            alert("messagedata: ", messageData)
            // setCreatedTheme(messageData)

        }
    }

    //RUN WHEN createdTheme state changes
    // React.useEffect(() => {

    //     alert("createdThemeChange: ")

    //     setThemeOptions((oldTheme) => {

    //         let options = { ...props };

    //         options.currentTheme = oldTheme.theme;

    //         let newTheme;

    //         options.currentTheme = createTheme(createdTheme)

    //         console.log("new theme: ", options.currentTheme)

    //         newTheme = options.currentTheme;

    //         return {
    //             theme: newTheme,
    //         };
    //     });


    // }, [createdTheme]); //only re-run if any of these change



    function fabClick() {

        let newCreatedTheme = {
            "palette": {
                "mode": "light",
                "primary": {
                    "contrastText": "#ffffff",
                    "dark": "#1565c0",
                    "light": "#42a5f5",
                    "main": "#000000"
                },
            }

        }
        // setCreatedTheme(newCreatedTheme)


        setdialogState(true);
    }


    // React.useEffect(() => {

    //     alert("fired")
    //     setThemeOptions((oldTheme) => {

    //         console.log("oldTheme: ", oldTheme.theme)
    //         let options = { ...props };

    //         options.currentTheme = oldTheme.theme;



    //         let newTheme;

    //         //if there is a theme object given, it will be the basis for any customizations
    //         //CREATES NEW THEME FROM themeObject prop

    //         if (props.themeObject && props.themeObject !== "") {
    //             options.currentTheme = createTheme({
    //                 ...JSON.parse(JSON.stringify(props.themeObject)),
    //             });
    //         }

    //         //if there is a theme object given, it will be the basis for any customizations
    //         //CREATES NEW THEME FROM createdTheme state

    //         options.currentTheme = createTheme(createdTheme)

    //         console.log("new theme: ", options.currentTheme)

    //         newTheme = options.currentTheme;



    //         return {
    //             theme: newTheme,
    //         };
    //     });
    // }, [props, setThemeOptions]); //only re-run if any of these change

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
            <p><b>Initial Theme:</b> {JSON.stringify(themeOptions.theme)}<br /></p>
            <hr />
            <p><b>created Theme:</b> {
                JSON.stringify(createdTheme)}</p>

            <p>Should change global theme props</p>
            <div style={{ marginTop: "2em" }}>{props.children}</div>
        </div>
    );
}

ThemeCustomizer.propTypes = {
    themeObject: PropTypes.object,
    /**
 */
    showCreator: PropTypes.bool,
};

export default ThemeCustomizer;