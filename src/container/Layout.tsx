import React, { useState } from 'react'
import Image from 'next/image'
import { AppBar, Stack, Toolbar, IconButton, SvgIcon, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
function Layout({
    children,
    isMenu
}: {
    children: React.ReactNode
    isMenu?: boolean;
}) {
    const [open, setOpen] = useState(false);

    return (
        <Stack height="100%">
            <AppBar position="static" sx={{ backgroundColor: "#D8BF3E", height: "200px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Stack height="200px" direction="row">
                    <Image width={200} height={200} src="/Lines.png" alt="LOGO" />
                    <Stack border="2px solid #000" position="absolute" zIndex={99} top={isMenu ? 25 : 10} bottom={0} left={82} boxShadow={8} right={0} width={180} height={180} borderRadius="720px" bgcolor="#E4DB00">
                        {/* <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src="logo.svg" width={180} height={200} alt="test" /> */}
                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src="/logo.svg" width={180} height={200} alt="test" />
                    </Stack>
                </Stack>
                <Stack alignSelf="flex-end" sx={{
                    width: 1214,
                    height: 131,
                    backgroundImage: `url('../Vector3.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }} >
                </Stack>
            </AppBar>
            <Stack height="100%">
                {children}
            </Stack>
            <Stack>
                <Stack direction="row">
                    <Stack paddingLeft={{ xl: isMenu ? 35 : 0 }} width={"100%"}>
                        <Stack onClick={() => {
                            setOpen(!open);
                        }} sx={{ cursor: "pointer" }} alignSelf="center" width="0" height="0" borderLeft="40px solid transparent" borderRight="40px solid transparent" borderBottom="30px solid #D8BF3E">

                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{
                    overflow: "hidden",
                    display: open ? "" : "none",
                    opacity: open ? 1 : 0,
                    transition: "opacity 0.3s",
                    paddingLeft: { xl: isMenu ? 35 : 0 },
                    width: "100%",
                    alignItems: "center",
                    bgcolor: "#D8BF3E",
                    animationName: open ? "fadeIn" : "fadeOut",
                    animationDuration: "0.3s",
                    animationFillMode: "forwards",
                }} >
                    <Typography sx={{ display: "flex", justifyContent: "center" }} p={1} fontSize="16px" fontWeight={500}>
                        <MailRoundedIcon color='warning' />&nbsp; test@gmail.com
                    </Typography>
                    <Typography sx={{ display: "flex", justifyContent: "center" }} p={1} fontSize="16px" fontWeight={500}>
                        <PhoneRoundedIcon color='warning' /> &nbsp; +90567865446
                    </Typography>
                </Stack>

                <Stack borderTop={open ? "1px solid #000000" : ""} paddingLeft={{ xl: isMenu ? 35 : 0 }} alignItems="end" height="55px" bgcolor="#D8BF3E" direction="row" justifyContent="center">
                    <FacebookOutlinedIcon fontSize='large' />
                    <LinkedInIcon fontSize='large' />
                    <InstagramIcon fontSize='large' />
                </Stack>
            </Stack>
        </Stack >
    )
}

export default Layout