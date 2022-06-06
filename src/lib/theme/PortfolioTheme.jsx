import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const palette = {
  primary: {
    main: "#F5F5F5",
    light: "#F5F5F5",
    dark: "#E8621B",
  },
  destroy: {
    main: "#CB0606",
    light: "#DB4949",
    dark: "#B10505",
  },
  success: {
    main: "#58ae6e",
    light: "#71c386",
    dark: "#459b5b",
  },
  link_completedTasks: {
    main: "#0C44AB",
    light: "#2D65CC",
    dark: "#123068",
    transparent: "#0c44ab08",
  },
  successAlert: {
    main: "#EFFFF3",
  },
  errorAlert: {
    main: "#FFEAEA",
  },
  warning_SelectedText: {
    main: "#F2F6F9",
  },
  header: {
    main: "#123068",
  },
  body: {
    main: "#535E72",
  },
  background: {
    main: "#F2F6F9",
  },
  container: {
    main: "#535E72",
    light: "#E9EBED",
    medium: "#DEE4ED",
    dark: "#B5C0D2",
  },
};

export const PORTFOLIO_THEME = createTheme({
  palette: palette,

  typography: {
    "fontFamily": ['"Montserrat"', 'Open Sans'].join(','),
    h4: {
      color: palette.header.main,
      lineHeight: "20px",
      fontWeight: "700",
      fontSize: "24px !important",
      textSizeAdjust: "100%",
    },
    h5: {
      color: palette.header.main,
      fontWeight: "100",
      fontSize: "18px!important",
    },
    h6: {
      color: palette.header.main,
      fontWeight: "600",
      fontSize: "20px !important",
    },
    light: {
      color: palette.header.main,
      fontWeight: "100",
      fontSize: "18px !important",
    },
    highlightedText: {
      color: palette.link_completedTasks.dark,
      fontWeight: "800",
      fontSize: "15px",
    },
    caption: {
      color: palette.body.main,
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "normal",
      marginBottom: "5px",
      paddingBottom: "2px",
      paddingLeft: "3px",
      maxWidth: "100%",
      display: "inline-block",
      textSizeAdjust: "100%",
    },
    footnote: {
      color: palette.body.main,
      fontSize: "11px",
      fontWeight: "500",
    },
    error: {
      color: "#f69233",
      fontWeight: 400,
      fontSize: "12px!important",
      lineHeight: "normal",
      marginBottom: "5px",
      paddingBottom: "2px",
    },
    signIn: {
      color: "#123068!important",
      textDecoration: "none!important",
    },
    errorDiv: {
      color: palette.destroy.main,
      fontSize: "15px",
      fontWeight: "500",
      link: {
        color: palette.link_completedTasks.light,
        fontWeight: 800,
        cursor: "pointer",
      },
    },
  },

  components: {
    // Dont forget the Mui<component> prefix
    MuiButton: {
      variants: [
        {
          props: { variant: "blue-rounded" },
          style: {
            backgroundColor: "#123068",
            color: "white",
            borderRadius: 60,
            fontSize: "14px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#123068",
            },
          },
        },
        {
          props: { variant: "grey-rounded" },
          style: {
            backgroundColor: "#E9EBED",
            color: "#535e72",
            borderRadius: 60,
            fontSize: "14px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#E9EBED",
            },
          },
        },
        {
          props: { variant: "success" },
          style: {
            backgroundColor: palette.success.main,
            color: "white",
            fontSize: "16px",
            textTransform: "none",
            disableRipple: "true",
            boxShadow:
              "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
            "&:hover": {
              backgroundColor: palette.success.light,
            },
          },
        },
        {
          props: { variant: "orange-link" },
          style: {
            backgroundColor: palette.primary.main,
            color: "white",
            fontSize: "16px",
            textTransform: "none",
            padding: "6px 16px",
            boxShadow:
              "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
            "&:hover": {
              backgroundColor: palette.primary.light,
              color: "white",
              boxShadow:
                "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
            },
          },
        },
        {
          props: { variant: "resume-button" },
          style: {
            backgroundColor: palette.link_completedTasks.transparent,
            color: palette.link_completedTasks.main,
            fontSize: "16px",
            textTransform: "none",
            padding: "6px 16px",
            boxShadow:
              "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
            "&:hover": {
              backgroundColor: palette.link_completedTasks.main,
              color: "white",
              boxShadow:
                "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
              textDecoration: "none",
            },
          },
        },
      ],
      styleOverrides: {
        contained: (p) => {
          return {
            color: "white",
            fontSize: "16px",
            textTransform: "none",
            disableRipple: "true",
            "&:hover": {
              backgroundColor: p.theme.palette[p.ownerState.color].light,
            },
          };
        },
        endIcon: {
          "& svg.MuiSvgIcon-fontSizeLarge": {
            fontSize: "28px",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: palette.link_completedTasks.light,
          textSizeAdjust: "100%",
          "&:hover": {
            textDecoration: "none",
            color: palette.link_completedTasks.main,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "16px", //needed because of bootstrap conflict
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input": {
            fontSize: "15px", //needed because of bootstrap conflict
          },
          "& input::placeholder": {
            fontSize: "15px", //needed because of bootstrap conflict
          },
          "& div.Mui-disabled.MuiOutlinedInput-root.MuiInputBase-root  fieldset.MuiOutlinedInput-notchedOutline":
            {
              border: "solid 1px #d9d9d9",
            },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "& > span > svg": {
            fontSize: "20px", //needed because of bootstrap conflict
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& > svg": {
            fontSize: "22px", //needed because of bootstrap conflict
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& label": {
            fontSize: "15px", //needed because of bootstrap conflict
          },
          "& svg": {
            fontSize: "15px", //needed because of bootstrap conflict
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "15px", //needed because of bootstrap conflict
        },
      },
      defaultProps: {
        variantMapping: {
          errorDiv: "div",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "15px", //needed because of bootstrap conflict
          "& .MuiListItemText-root": {
            margin: "0",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "& ul": {
            fontSize: "15px", //needed because of bootstrap conflict
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.MuiSvgIcon-fontSizeMedium.MuiStepIcon-root": {
            fontSize: "30px",
          },
          "&.Mui-completed": {
            color: palette.success.main,
          },
          "&.Mui-active": {
            color: "white",
          },
          "& .MuiStepIcon-text": {
            fill: palette.success.main,
            fontWeight: 600,
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          "& .MuiStepLabel-labelContainer .MuiStepLabel-label ": {
            fontSize: "16px",
            fontWeight: "600",
            color: palette.success.main,
          },
          "&.Mui-disabled svg.MuiSvgIcon-root  ": {
            color: "#ededed",
          },
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          marginTop: "2px",
          "&.Mui-active .MuiStepConnector-line": {
            borderColor: palette.success.main,
          },
          "&.Mui-completed .MuiStepConnector-line": {
            borderColor: palette.success.main,
          },
        },
      },
    },
  },
});

function PortfolioTheme(props) {
  return <ThemeProvider theme={PORTFOLIO_THEME}>{props.children}</ThemeProvider>;
}
export default PortfolioTheme;
