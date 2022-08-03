import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton href='/dashboard'>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="SIKOJA" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="SIBOLANG" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Data Master
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <SnippetFolderIcon />
            </ListItemIcon>
            <ListItemText primary="Data Instansi" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <SnippetFolderIcon />
            </ListItemIcon>
            <ListItemText primary="Data Pengguna" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <SnippetFolderIcon />
            </ListItemIcon>
            <ListItemText primary="Data Kampung" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <SnippetFolderIcon />
            </ListItemIcon>
            <ListItemText primary="Data Jalan" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <SnippetFolderIcon />
            </ListItemIcon>
            <ListItemText primary="Data Status" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <SnippetFolderIcon />
            </ListItemIcon>
            <ListItemText primary="Kategori SIBOLANG" />
        </ListItemButton>
    </React.Fragment>
);