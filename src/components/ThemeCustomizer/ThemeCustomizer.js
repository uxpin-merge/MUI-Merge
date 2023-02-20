import React from "react";
import PropTypes from "prop-types";
import { createTheme } from "@mui/material/styles";
import { ThemeContext } from "../UXPinWrapper/UXPinWrapperWithThemeCustomizer";
import { Dialog, DialogActions, Button, Drawer, Fab, Popper, Icon, Portal, IconButton, Stack } from "@mui/material";

let messageData

function ThemeCustomizer(props) {

    const [dialogState, setdialogState] = React.useState(false);
    const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);
    const [createdTheme, setCreatedTheme] = React.useState();

    window.addEventListener("message", onMessageHandler);

    function onMessageHandler(event) {
        if (typeof event.data === "string") {

            alert("hi")
            messageData = event.data;

            console.log(messageData)
            setCreatedTheme(JSON.parse(messageData))
        }
    }


    //Will add custom font links to the header
    const addFont = (link, index) => {
        let newFontLink = document.createElement("link");
        newFontLink.href = link;
        newFontLink.rel = "stylesheet";
        newFontLink.id = "muiCCustomFont" + index;
        document.head.appendChild(newFontLink);
        console.log("added: ", newFontLink);
    };
    //RUN WHEN createdTheme state changes
    React.useEffect(() => {

        // alert("createdTheme change")

        setThemeOptions((oldTheme) => {

            let options = { ...props };

            options.currentTheme = oldTheme.theme;

            let newTheme;

            options.currentTheme = createTheme(createdTheme)

            console.log("new theme: ", options.currentTheme)

            newTheme = options.currentTheme;

            //GET ALL GOOGLE FONT NAMES AT ANY LEVEL OF THE THEME WITH RECURSION


            var traverse = function (o, fn) {
                for (var i in o) {
                    fn.apply(this, [i, o[i]]);
                    if (o[i] !== null && typeof (o[i]) == "object") {
                        traverse(o[i], fn);
                    }
                }
            }

            var obj = createdTheme
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

            console.log("fonts", fonts)

            return {
                theme: newTheme,
            };
        });


    }, [createdTheme]); //only re-run if any of these change

    //RUN WHEN prop props.themeObject changes
    React.useEffect(() => {

        alert("themeObject change")

        setThemeOptions((oldTheme) => {

            let options = { ...props };

            options.currentTheme = oldTheme.theme;

            let newTheme;

            // options.currentTheme = createTheme(createdTheme)
            if (props.themeObject && props.themeObject !== "") {
                options.currentTheme = createTheme({
                    ...JSON.parse(JSON.stringify(props.themeObject)),
                });
            }

            console.log("new theme: ", options.currentTheme)

            newTheme = options.currentTheme;

            return {
                theme: newTheme,
            };
        });


    }, [props.themeObject]); //only re-run if any of these change



    function fabClick() {
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