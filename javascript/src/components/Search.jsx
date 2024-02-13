import {
    Backdrop,
    Divider,
    Grid,
    Modal,
    Stack,
    TextField,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import BGCard from "./BGCard";
  const style = {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    maxHeight: 500,
    bgcolor: "#24263d",
    overflow: "scroll",
  };
  
  export default function SearchModal(props) {
    return (
      <Modal
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Stack sx={style}>
          <Grid container spacing={2} alignItems="center" padding={3}>
            <Grid item>
              <SearchIcon sx={{ display: "block", color: "white" }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: "default", color: "white" },
                }}
                value = {props.searchQuery}
                onChange={(e) => { props.setSearchQuery(e.target.value);console.log(searchQuery);}}
                variant="standard"
              />
            </Grid>
          </Grid>
          <Divider sx={{ bgcolor: "gray", width: '100%' }}  />
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

                {props.data.slice(0,10).map((bg) => (
                    <Grid item key={bg.id}>
                        <BGCard name={bg.name} image={bg.image} />
                    </Grid>
                ))}
                </Grid>
        </Stack>
      </Modal>
    );
  }
  