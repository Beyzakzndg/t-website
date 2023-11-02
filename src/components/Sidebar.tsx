import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Collapse, Stack } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React, { useState } from 'react'
import { useRouter } from 'next/router';

function Sidebar() {
    const router = useRouter();
    const [openCollapsers, setOpenCollapsers] = useState({
        forklift: false,
        istifMakinesi: false,
        transpalet: false,
        lastikler: false,
    });
    return (
        <List sx={{ p: 0 }}>
            {['Forklift', 'İstif Makinesi', 'Transpalet', 'Makaslı Menlift', 'Lastik'].map((text, index) => (
                <>
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                index === 0 ?
                                    setOpenCollapsers({
                                        forklift: !openCollapsers.forklift,
                                        istifMakinesi: false,
                                        transpalet: false,
                                        lastikler: false,
                                    }) :
                                    index === 1 ?
                                        setOpenCollapsers({
                                            forklift: false,
                                            istifMakinesi: !openCollapsers.istifMakinesi,
                                            transpalet: false,
                                            lastikler: false,
                                        }) :
                                        index === 2 ?

                                            setOpenCollapsers({
                                                forklift: false,
                                                istifMakinesi: false,
                                                transpalet: !openCollapsers.transpalet,
                                                lastikler: false,
                                            }) :
                                            index === 4 ? setOpenCollapsers({
                                                forklift: false,
                                                istifMakinesi: false,
                                                transpalet: false,
                                                lastikler: !openCollapsers.lastikler,
                                            }) : index === 3 ?
                                                router.push(`/category/manlift`)
                                                : null
                            }}
                            sx={{
                                borderTopRightRadius: {
                                    xs: index === 0 ? 0 : 0,
                                    xl: index === 0 ? 16 : 0,
                                }, filter: index === 0 ? "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.74))" : "", backgroundColor: "#D8BF3E",
                                "&:hover": {
                                    backgroundColor: "#A7932C",
                                },
                            }}>

                            <ListItemText primary={<Typography fontWeight={500} fontSize="h20">
                                {text}
                            </Typography >} />
                            {index === 0 ? (openCollapsers.forklift ? <ExpandLess /> : <ExpandMore />) :
                                index === 1 ? (openCollapsers.istifMakinesi ? <ExpandLess /> : <ExpandMore />) :
                                    index === 2 ? (openCollapsers.transpalet ? <ExpandLess /> : <ExpandMore />) :
                                        index === 4 ? (openCollapsers.lastikler ? <ExpandLess /> : <ExpandMore />) : null}
                        </ListItemButton>
                    </ListItem >
                    {index === 0 && <Collapse in={openCollapsers.forklift} timeout="auto" unmountOnExit>
                        <List sx={{ p: 0 }}>
                            {[{ name: 'Dizel Forklift', slug: "dizel-forklift" }, { name: 'Elektirikli Forklift', slug: "elektrikli-forklift" }].map((text, index) => (
                                <ListItem key={text.slug} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            router.push(`/category/${text.slug}`);
                                            setOpenCollapsers({
                                                forklift: !openCollapsers.forklift,
                                                istifMakinesi: false,
                                                transpalet: false,
                                                lastikler: false,
                                            });
                                        }}
                                        sx={{
                                            filter: index === 0 ? "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.74))" : "", backgroundColor: "#646464",
                                            "&:hover": {
                                                backgroundColor: "#504D4D",
                                            },
                                        }}>
                                        <Stack direction="row" ml={8} spacing={1}>
                                            <FiberManualRecordIcon fontSize='small' />
                                            <Typography fontWeight={500} color="#fff" fontSize="h20">
                                                {text.name}
                                            </Typography >
                                        </Stack>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>}
                    {index === 1 && <Collapse in={openCollapsers.istifMakinesi} timeout="auto" unmountOnExit>
                        <List sx={{ p: 0 }}>
                            {[{ name: 'Akülü İstif Makinesi', slug: "akulu-istif" }, { name: 'Manuel İstif Makinesi', slug: "manuel-istif" }].map((text, index) => (
                                <ListItem key={text.slug} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            router.push(`/category/${text.slug}`);
                                            setOpenCollapsers({
                                                forklift: false,
                                                istifMakinesi: !openCollapsers.istifMakinesi,
                                                transpalet: false,
                                                lastikler: false,
                                            });
                                        }}
                                        sx={{
                                            filter: index === 0 ? "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.74))" : "", backgroundColor: "#646464",
                                            "&:hover": {
                                                backgroundColor: "#504D4D",
                                            },
                                        }}>
                                        <Stack direction="row" ml={8} spacing={1}>
                                            <FiberManualRecordIcon fontSize='small' />
                                            <Typography fontWeight={500} color="#fff" fontSize="h20">
                                                {text.name}
                                            </Typography >
                                        </Stack>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>}
                    {index === 2 && <Collapse in={openCollapsers.transpalet} timeout="auto" unmountOnExit>
                        <List sx={{ p: 0 }}>
                            {[{ name: 'Manuel Transpaletter', slug: "manuel-transpalet" },
                            { name: 'Akülü Transpalet', slug: "akulu-transpalet" },
                            { name: 'Terazili Transpalet', slug: "terazili-transpalet" },
                            { name: 'Özel Transpalet', slug: "ozel-transpalet" }].map((text, index) => (
                                <ListItem key={text.slug} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            router.push(`/category/${text.slug}`);
                                            setOpenCollapsers({
                                                forklift: false,
                                                istifMakinesi: false,
                                                transpalet: !openCollapsers.transpalet,
                                                lastikler: false,
                                            });
                                        }}
                                        sx={{
                                            filter: index === 0 ? "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.74))" : "", backgroundColor: "#646464",
                                            "&:hover": {
                                                backgroundColor: "#504D4D",
                                            },
                                        }}>
                                        <Stack direction="row" ml={8} spacing={1}>
                                            <FiberManualRecordIcon fontSize='small' />
                                            <Typography fontWeight={500} color="#fff" fontSize="h20">
                                                {text.name}
                                            </Typography >
                                        </Stack>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>}
                    {index === 4 && <Collapse in={openCollapsers.lastikler} timeout="auto" unmountOnExit>
                        <List sx={{ p: 0 }}>
                            {[{ name: 'Havalı Lastikler', slug: "havali-lastikler" },
                            { name: 'Dolgu Lastik', slug: "dolgu-lastikler" },
                            { name: 'Beyaz Dolgu Lastik', slug: "beyaz-dolgu-lastikler" }].map((text, index) => (
                                <ListItem key={text.slug} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            router.push(`/category/${text.slug}`);
                                            setOpenCollapsers({
                                                forklift: false,
                                                istifMakinesi: false,
                                                transpalet: false,
                                                lastikler: !openCollapsers.lastikler,
                                            });
                                        }}
                                        sx={{
                                            filter: index === 0 ? "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.74))" : "", backgroundColor: "#646464",
                                            "&:hover": {
                                                backgroundColor: "#504D4D",
                                            },
                                        }}>
                                        <Stack direction="row" ml={8} spacing={1}>
                                            <FiberManualRecordIcon fontSize='small' />
                                            <Typography fontWeight={500} color="#fff" fontSize="h20">
                                                {text.name}
                                            </Typography >
                                        </Stack>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>}
                </>
            ))
            }
        </List >
    )
}

export default Sidebar