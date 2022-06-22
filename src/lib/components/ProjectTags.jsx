import React from 'react';
import Chip from "@mui/material/Chip"

const ProjectTags = (props) => {
    return (
        <Chip label={props.label} />
    );
};

export default ProjectTags;