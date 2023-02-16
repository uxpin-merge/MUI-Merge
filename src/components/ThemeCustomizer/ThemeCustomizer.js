import React from "react";
import PropTypes from "prop-types";
import { createTheme } from "@mui/material/styles";
import { ThemeContext } from "../UXPinWrapper/UXPinWrapperWithThemeCustomizer";
import { Dialog, DialogActions, Button, Drawer, Fab, Popper, Icon, Portal } from "@mui/material";

// import { Button } from "@mui/material";

//Will add custom font links to the header
const addFont = (link, index) => {
    let newFontLink = document.createElement("link");
    newFontLink.href = link;
    newFontLink.rel = "stylesheet";
    newFontLink.id = "muiCCustomFont" + index;
    document.head.appendChild(newFontLink);
    //console.log("added: ", newFontLink);
};


// function initThemeCreator() {

//     var uxpinContainer = document.getElementById("top-bar");
//     var customizerContainer = document.getElementById("theme-creator-button");


//     uxpinContainer.prepend(customizerContainer)
//     // var t = document.getElementById("TARGET");


//     // topdiv.parentNode.insertBefore(bottomdiv,topdiv);
//     // topdiv.className = 'bottom-div';
//     // bottomdiv.className = 'top-div';
// }

function ThemeCustomizer(props) {


    // var themeCreatorButton = document.getElementById("poppertheme");
    // var uxpinContainer = document.getElementById("section-code-component");
    // uxpinContainer.append(themeCreatorButton)



    React.useEffect(() => {
        // initThemeCreator();
        var themeCreatorButton = document.getElementById("poppertheme");
        var uxpinContainer = document.getElementById("section-code-component");
        uxpinContainer.append(themeCreatorButton)
    }), [props]

    const [dialogState, setdialogState] = React.useState(props.showCreator);

    const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);


    function fabClick() {

        setdialogState(true)
        // alert(dialogState)
    }


    React.useEffect(() => {

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

            console.log("parsed ", props.themeObject)

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
                // <SwipeableTemporaryDrawer />
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

                    <Drawer
                        anchor="right"
                        open={dialogState}
                        onClose={() => setdialogState(false)}
                        onOpen={() => setdialogState(true)}
                        variant="temporary"
                        width={1200}
                        sx={{
                            width: 1200,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: 1200,
                                boxSizing: 'border-box',
                            }
                        }}
                    >

                        <Button autoFocus onClick={() => setdialogState(false)} variant="contained">
                            Done
                        </Button>


                        <iframe src="https://jackbehar.github.io/mui-theme-creator/"
                            allow="clipboard-read; clipboard-write"
                            style={{ height: '100%', width: '100%' }} title="Iframe Example"></iframe>
                    </Drawer>


                    {/* 
                    <Dialog
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        open={dialogState}
                        // open={false}
                        fullScreen={false}
                        style={{ height: '900px', width: '2000px' }}>

                        <iframe src="https://jackbehar.github.io/mui-theme-creator/"
                            allow="clipboard-read; clipboard-write"
                            style={{ height: '900px', width: '100%' }} title="Iframe Example"></iframe>

                        <DialogActions >

                            <Button autoFocus onClick={() => setdialogState(false)} variant="contained">
                                Done
                            </Button>
                        </DialogActions>
                    </Dialog> */}


                </div>
                :
                <></>
            }
            <Portal open={true} style={{ top: 100, left: 0 }}>
                {/* <Dialog open> */}
                <div id='poppertheme'>
                    <Fab autoFocus onClick={() => fabClick()} variant="contained" color="primary" size="small">
                        <Icon>palette</Icon>
                    </Fab>
                </div>
                {/* </Dialog> */}
            </Portal>

            <h1>Global Theme Customizer</h1>
            <p>Should change global theme props</p>
            <div style={{ marginTop: "2em" }}>{props.children}</div>
        </div>
    );
}

ThemeCustomizer.propTypes = {
    themeObject: PropTypes.object,
    showCreator: PropTypes.bool,
};

export default ThemeCustomizer;