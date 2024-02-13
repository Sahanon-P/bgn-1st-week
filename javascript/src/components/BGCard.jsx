import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function BGCard(props) {
  return (
    <Card sx={{width: 300}}>
      <CardMedia component="img" height="300" image={props.image} />
      <CardContent sx={{ backgroundColor: "#1a1b4d" }}>
        <Typography fontWeight={"bold"} color={"white"}>
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
