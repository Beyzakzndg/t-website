import { Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useWindowSize from 'src/lib/useResize';
import Image from 'next/image'

const HomeContainer = ({ isKatalog, category, setIsKatolog }: { isKatalog: boolean, category: boolean, setIsKatolog: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { height = 0, width = 0 } = useWindowSize();
    return (
        <Stack height={height - 285} alignItems="center" justifyContent="center">
            <Stack display={isKatalog ? "none" : ""} onClick={() => setIsKatolog(true)} width={309} height={225} borderRadius={15}
                sx={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.74))", background: "linear-gradient(180deg, #ECA539 0%, #CCB800 100%)" }}>
                <Button onClick={() => { console.log("test") }} variant="text" sx={{ fontSize: "20px", fontWeight: 600, color: "#00045B", width: "100%", height: "100%", borderRadius: 15 }}>Kataloglar</Button>
            </Stack>
            <Stack display={category ? "" : "none"}>
                <Image width={width - 1500} height={height - 300} src="/bg.jpg" alt="LOGO" />
            </Stack>
        </Stack>
    );
}



export default HomeContainer;