import React from "react";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="http://sibolang.mkwlapor.com/">
                SIBOLANG
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright
