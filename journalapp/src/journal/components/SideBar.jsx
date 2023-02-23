import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component={'nav'}
            sx={{
                width: { sm: drawerWidth, flexShrink: { sm: 0 } }
            }}
        >

            <Drawer
                variant='permanent'
                open //</Box>={ true }
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component={'div'}>Carlos Eduardo</Typography>
                </Toolbar>
                <Divider />
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abrin'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid>
                                    <ListItemText primary={ text }/>
                                    <ListItemText secondary='lorem'/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }

            </Drawer>

        </Box>
    )
}
