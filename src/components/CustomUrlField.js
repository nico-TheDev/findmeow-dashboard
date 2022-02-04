import * as React from "react";
import { useRecordContext } from "react-admin";
import { makeStyles } from "@mui/styles";
import LaunchIcon from "@mui/icons-material/Launch";

const useStyles = makeStyles({
    link: {
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
    },
    icon: {
        width: "0.5em",
        height: "0.5em",
        paddingLeft: 2,
    },
});

const CustomUrlField = ({ source }) => {
    const record = useRecordContext();
    const classes = useStyles();

    return record ? (
        <a href={record[source]} className={classes.link}>
            {record[source]}
            <LaunchIcon className={classes.icon} />
        </a>
    ) : null;
};

export default CustomUrlField;
