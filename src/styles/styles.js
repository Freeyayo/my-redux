const BUTTON_STYLE = {
	color: "white",
    fontFamily: "monospace",
    fontSize: "20px",
    fontWeight: "700",
    borderRadius: "5px",
    borderStyle: "none",
    height: "30px",
    display: "block",
    margin: "0 auto",
    marginTop: "30px"
}

const BUTTON_STYLE_PRI = {
    ...BUTTON_STYLE,
    background: "#2196F3"
}

const BUTTON_STYLE_PRI_ASYNC = {
    ...BUTTON_STYLE,
    background: "#00BCD4"
}

const BUTTON_STYLE_SEC = {
    ...BUTTON_STYLE,
    background: "#FF9800"
}

const FONT_STYLE = {
    fontSize: "30px",
    display: "block",
    margin: "10px auto",
    textAlign: "center"
}

export {
    BUTTON_STYLE_PRI,
    BUTTON_STYLE_PRI_ASYNC,
    BUTTON_STYLE_SEC,
    FONT_STYLE
}