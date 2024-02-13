import { Fragment } from "react";
import Header from "../components/Header";
import {
    Button,
    Container,
    Stack,
    Typography,
    IconButton,
    Grid,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import axios from "axios";
import { useState, useEffect } from 'react';
import CustomCard from "../components/CustomCard";
import SearchModal from "../components/Search";

export default function Landing() {
    const imagePath =
        "https://img.freepik.com/premium-photo/poker-table-colorful-dice_875722-13208.jpg";
    const [data, setData] = useState([]);
    const filteredData = data.filter((bg) => bg.yearpublished === "2023");
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const pagination = filteredData.slice((page - 1) * 3, page * 3);
    useEffect(() => {
        axios.get("http://localhost:3335/boardgames/all").then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    }, []);
    const searchFilteredData = data.filter((bg) =>
        bg.name.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    function nextPage() {
        setPage(page + 1);
    }
    function previousPage() {
        setPage(page - 1);
    }

    return (
        <Fragment>
            <Container
                maxWidth="xl"
                sx={{
                    height: 400,
                    backgroundImage: `linear-gradient(to right, rgba(19,0,32,1) 50%, rgba(253,252,255,0) 88%, rgba(255,255,255,0) 100%), url(${imagePath})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <Header />
                <Stack padding={10} display="flex">
                    <Typography variant="h4" color={"white"} fontWeight={"bold"}>
                        FIND YOUR BOARDGAMES
                    </Typography>
                    <Typography variant="h2" color={"white"} fontWeight={"bold"}>
                        BOARDGAMESNERD
                    </Typography>
                    <Typography variant="h6" color={"white"}>
                        Replica of BoardGamesGeek
                    </Typography>
                    <Stack direction={"row"} paddingTop={2}>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: 'orange' }}
                            onClick={() => setOpen(true)}
                        >

                            Explore
                        </Button>
                    </Stack>
                </Stack>
            </Container>
            <Container sx={{ paddingTop: 5 }}>
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <PlayArrowIcon color="secondary" fontSize="large" />
                    <Typography variant="h4" color={"white"}>
                        LATEST BOARDGAMES OF 2023
                    </Typography>
                </Stack>
                <Stack justifyContent={"end"} direction={"row"} spacing={2} padding={2}>
                    <IconButton onClick={previousPage}>
                        <ArrowCircleLeftIcon
                            color="primary"
                            sx={{ fontSize: 40 }}
                        />
                    </IconButton>
                    <IconButton onClick={nextPage}>
                        <ArrowCircleRightIcon
                            color="primary"
                            sx={{ fontSize: 40 }}
                        />
                    </IconButton>
                </Stack>
                <Grid
                    container
                    direction={'row'}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    marginTop={2}
                    marginBottom={5}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    rowSpacing={5}
                >

                    {pagination.slice(0, 10).map((bg) => (
                        <Grid item key={bg.id}>
                            <CustomCard
                                color="#1a1b4d"
                                playtime={`${bg.minplaytime} - ${bg.maxplaytime}`}
                                players={`${bg.minplayers} - ${bg.maxplayers}`}
                                date={bg.yearpublished}
                                cover={bg.image}
                                logo={bg.image}
                                title={bg.name}
                                description={bg.description}
                            />
                        </Grid>
                    ))}
                </Grid>
                <SearchModal open={open} handleClose={() => setOpen(false)} searchQuery={searchQuery} setSearchQuery={setSearchQuery} data={searchFilteredData.slice(0, 10)} />
            </Container>
        </Fragment>)
}