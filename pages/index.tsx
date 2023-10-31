import Head from 'next/head'
import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import HomeContainer from 'src/container/HomeContainer'
import Layout from 'src/container/Layout'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useWindowSize from 'src/lib/useResize'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Router, useRouter } from 'next/router';
import Sidebar from '@/components/Sidebar';

const data = [{ category: "forklift", img: "/bg.jpg" }]

const Home = () => {
  const { height = 0 } = useWindowSize();
  const router = useRouter();

  const [isKatalog, setIsKatolog] = useState(false);
  const [category, setCategory] = useState(false);

  return (
    <>
      <Head>
        <title>Anasayfa - Tarakçıoğlu Forklift</title>
        <meta name="description" content="Tarakçıoğlu Forklift ve İş Makineleri Hizmetleri" />
        <meta name="yandex-verification" content="77a667a276963321" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Layout isMenu={isKatalog}>
        <Stack direction={{ xl: "row" }} height="100%">
          <Stack display={isKatalog ? "" : "none"} width={{ xl: "18%" }} borderRight={{ xs: undefined, xl: "4px solid rgba(0, 0, 0, 0.65)" }} sx={{ borderTopRightRadius: { xs: 0, xl: 16 } }} bgcolor="#333">
            <Sidebar />
          </Stack>
          <Stack width={isKatalog ? "85%" : "100%"}>
            <HomeContainer isKatalog={isKatalog} setIsKatolog={setIsKatolog} category={category} />
          </Stack>
        </Stack>
      </Layout >
    </>
  )
}

export default Home;
