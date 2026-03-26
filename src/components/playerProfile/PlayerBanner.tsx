import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";

const PlayerBanner = () => {
  return (
    <Card
      elevation={3}
      sx={{
        height: 168,
        width: "100%",
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("/champion/Spirit-of-Wind.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <CardContent>
        <Stack spacing={2} direction="row">
          <Avatar
            src={"/champion/zander-blinding-steel.png"}
            sx={{ height: 80, width: 80 }}
          />
          <Stack justifyContent={"center"}>
            <Typography variant="h6" fontWeight={700}>
              Snuggie #69420
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Zander, Blinding Steel
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PlayerBanner;
