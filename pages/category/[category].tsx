import { Collapse, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from 'src/container/Layout';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import router, { useRouter } from 'next/router';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import useWindowSize from 'src/lib/useResize';
import Sidebar from '@/components/Sidebar';
import Head from 'next/head';

function Category() {
    const router = useRouter();
    const [title, setTitle] = useState("")
    useEffect(() => {
        if (router.query.category === "forklift") {
            setTitle("Forklift")
        }
        else if (router.query.category === "elektrikli-forklift") {
            setTitle("Elektirikli Forklift")
        }
        else if (router.query.category === "akulu-istif") {
            setTitle('Akülü İstif')
        }
        else if (router.query.category === "manuel-istif") {
            setTitle('Manuel İstif Makinesi')
        }
        else if (router.query.category === "manuel-transpalet") {
            setTitle('Manuel Transpalet')
        }
        else if (router.query.category === "akulu-transpalet") {
            setTitle('Akülü Transpalet')
        }
        else if (router.query.category === "terazili-transpalet") {
            setTitle('Terazili Transpalet')
        }
        else if (router.query.category === "ozel-transpalet") {
            setTitle('Özel Transpalet')
        }
        else if (router.query.category === "havali-lastikler") {
            setTitle("Havalı Dolgu Lastik")
        }
        else if (router.query.category === "dolgu-lastikler") {
            setTitle("Dolgu Lastik")
        }
        else if (router.query.category === "beyaz-dolgu-lastikler") {
            setTitle("Beyaz Dolgu Lastik")
        }
        else if (router.query.category === "manlift") {
            setTitle("Makaslı Menlift")
        }
    }, [router.query.category]
    )

    return (
        <>
            <Head>
                <title>{title} - Tarakçıoğlu Forklift</title>
                <meta name="description" content="Tarakçıoğlu Forklift ve İş Makineleri Hizmetleri" />
                <meta name="yandex-verification" content="77a667a276963321" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <Layout isMenu>
                <Stack direction={{ xl: "row" }} height="100%">
                    <Stack width={{ xl: "18%" }} borderRight={{ xs: undefined, xl: "4px solid rgba(0, 0, 0, 0.65)" }} sx={{ borderTopRightRadius: { xs: 0, xl: 16 } }} bgcolor="#333">
                        <Sidebar />
                    </Stack>
                    <Stack p={2} width={"100%"} >
                        <Stack bgcolor="rgba(255, 255, 255, 0.5)" border="1px solid #aaa" borderRadius={2} >
                            <Stack width={{ xs: "70%", xl: "50%" }} alignSelf="center" textAlign="center" mt={3} sx={{ boxShadow: "4px 4px 25px 0px #222121", background: "linear-gradient(94deg, rgba(223, 107, 0, 0.5) 1.33%, rgba(255, 230, 0, 0.5) 52.99%)" }} p="2% 10%" borderRadius={4}>
                                <Typography fontSize="24px" fontWeight={500}>
                                    {title}
                                </Typography>
                            </Stack>
                            <Stack justifyContent={{ xs: "center", xl: "flex-start" }} p={3} direction="row" gap={3} sx={{ flexWrap: "wrap" }}>
                                {router.query.category === "forklift" && data.map((item) => (
                                    <Stack alignItems="center" sx={{ borderRadius: 8, margin: 0 }} key={item.id} bgcolor="#423F3F">
                                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src={item.img} width={361} height={400} alt="test" />
                                        <Typography sx={{ height: "55px", padding: "15px", color: "#ffff" }}>{item.name}</Typography>
                                    </Stack>
                                ))}

                                {router.query.category === "elektrikli-forklift" && data.map((item) => (
                                    <Stack border="1px solid #aaaa" alignItems="center" sx={{ borderRadius: 8, margin: 0 }} key={item.id} bgcolor="#423F3F">
                                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src={item.img} width={361} height={400} alt="test" />
                                        <Typography sx={{ height: "55px", padding: "15px", color: "#ffff" }}>{item.name}</Typography>
                                    </Stack>
                                ))}

                                {router.query.category === "akulu-istif" && data.map((item) => (
                                    <Stack border="1px solid #aaaa" alignItems="center" sx={{ borderRadius: 8, margin: 0 }} key={item.id} bgcolor="#423F3F">
                                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src={item.img} width={361} height={400} alt="test" />
                                        <Typography sx={{ height: "55px", padding: "15px", color: "#ffff" }}>{item.name}</Typography>
                                    </Stack>
                                ))}

                                {router.query.category === "manuel-istif" && data.map((item) => (
                                    <Stack border="1px solid #aaaa" alignItems="center" sx={{ borderRadius: 8, margin: 0 }} key={item.id} bgcolor="#423F3F">
                                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src={item.img} width={361} height={400} alt="test" />
                                        <Typography sx={{ height: "55px", padding: "15px", color: "#ffff" }}>{item.name}</Typography>
                                    </Stack>
                                ))}

                                {router.query.category === "manuel-transpalet" && dataTranspalet.map((item) => (
                                    <Stack border="1px solid #aaaa" alignItems="center" sx={{ borderRadius: 8, margin: 0 }} key={item.id} bgcolor="#423F3F">
                                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src={item.img} width={361} height={400} alt="test" />
                                        <Typography sx={{ height: "55px", padding: "15px", color: "#ffff" }}>{item.name}</Typography>
                                    </Stack>
                                ))}

                                {router.query.category === "akulu-transpalet" && dataTranspalet.map((item) => (
                                    <Stack border="1px solid #aaaa" alignItems="center" sx={{ borderRadius: 8, margin: 0 }} key={item.id} bgcolor="#423F3F">
                                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src={item.img} width={361} height={400} alt="test" />
                                        <Typography sx={{ height: "55px", padding: "15px", color: "#ffff" }}>{item.name}</Typography>
                                    </Stack>
                                ))}

                                {router.query.category === "terazili-transpalet" && dataTranspalet.map((item) => (
                                    <Stack border="1px solid #aaaa" alignItems="center" sx={{ borderRadius: 8, margin: 0 }} key={item.id} bgcolor="#423F3F">
                                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src={item.img} width={361} height={400} alt="test" />
                                        <Typography sx={{ height: "55px", padding: "15px", color: "#ffff" }}>{item.name}</Typography>
                                    </Stack>
                                ))}
                                {router.query.category === "havali-lastikler" && dataTranspalet.map((item) => (
                                    <Stack border="1px solid #aaaa" alignItems="center" sx={{ borderRadius: 8, margin: 0 }} key={item.id} bgcolor="#423F3F">
                                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src={item.img} width={361} height={400} alt="test" />
                                        <Typography sx={{ height: "55px", padding: "15px", color: "#ffff" }}>{item.name}</Typography>
                                    </Stack>
                                ))}
                                {router.query.category === "dolgu-lastikler" && dataTranspalet.map((item) => (
                                    <Stack border="1px solid #aaaa" alignItems="center" sx={{ borderRadius: 8, margin: 0 }} key={item.id} bgcolor="#423F3F">
                                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src={item.img} width={361} height={400} alt="test" />
                                        <Typography sx={{ height: "55px", padding: "15px", color: "#ffff" }}>{item.name}</Typography>
                                    </Stack>
                                ))}
                                {router.query.category === "beyaz-dolgu-lastikler" && dataTranspalet.map((item) => (
                                    <Stack border="1px solid #aaaa" alignItems="center" sx={{ borderRadius: 8, margin: 0 }} key={item.id} bgcolor="#423F3F">
                                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src={item.img} width={361} height={400} alt="test" />
                                        <Typography sx={{ height: "55px", padding: "15px", color: "#ffff" }}>{item.name}</Typography>
                                    </Stack>
                                ))}
                                {router.query.category === "manlift" && dataTranspalet.map((item) => (
                                    <Stack border="1px solid #aaaa" alignItems="center" sx={{ borderRadius: 8, margin: 0 }} key={item.id} bgcolor="#423F3F">
                                        <Image style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }} src={item.img} width={361} height={400} alt="test" />
                                        <Typography sx={{ height: "55px", padding: "15px", color: "#ffff" }}>{item.name}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

            </Layout >
        </>
    );
}

const data = [{ id: "0", img: "/istif/3.jpg", name: "Yarı Akülü" },
{ id: "1", img: "/istif/4.jpg", name: "Manuel" },
{ id: "2", img: "/istif/5.jpg", name: "Tam Akülü" },
{ id: "3", img: "/istif/6.jpg", name: "Platformlu" },
{ id: "4", img: "/istif/7.jpg", name: "Yarı Akülü" },
]
const dataTranspalet = [{ id: "0", img: "/transpalet/1.jpg", name: "Akülü" },
{ id: "1", img: "/transpalet/2.jpg", name: "Platformlu" },
{ id: "2", img: "/transpalet/8.jpg", name: "Tam Akülü" },
{ id: "3", img: "/transpalet/9.jpg", name: "Akülü(2000 kg)" },
{ id: "4", img: "/transpalet/10.jpg", name: "Akülü(1500 kg)" },
]

export default Category;