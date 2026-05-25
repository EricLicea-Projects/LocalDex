import { Avatar, AvatarGroup, Divider, Stack, Box } from "@mui/material";
import type { ChampionElement } from "../../hooks/useGetChampionStatsTable";
import SeasonalFooterStack from "./SeasonalFooterStack";
import SeasonalFooterStackContent from "./SeasonalFooterStackContent";

type Props = {
  pickRate: number;
  winRate: number;
  elements: ChampionElement[];
};

const SeasonalStatsLayoutCardFooter = ({
  pickRate,
  winRate,
  elements,
}: Props) => {
  return (
    <Box sx={{ position: "relative", px: 1, pb: 1 }}>
      <Box
        sx={{
          height: "1px",
          width: "100%",
          margin: "0 auto",
          mb: 1,
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(138, 43, 226, 0.5) 50%, rgba(255,255,255,0) 100%)",
        }}
      />
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems="center"
        px={1}
      >
        <SeasonalFooterStack lable="PICK RATE">
          <SeasonalFooterStackContent value={pickRate} />
        </SeasonalFooterStack>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "rgba(255,255,255,0.05)",
            mx: 1,
            height: "2rem",
            my: "auto",
          }}
        />
        <SeasonalFooterStack lable="WIN RATE">
          <SeasonalFooterStackContent value={winRate} colorEffect={true} />
        </SeasonalFooterStack>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "rgba(255,255,255,0.05)",
            mx: 1,
            height: "2rem",
            my: "auto",
          }}
        />
        <SeasonalFooterStack lable="ELEMENTS">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pt: 0.25,
            }}
          >
            <AvatarGroup
              max={3}
              sx={{
                justifyContent: "center",
                "& .MuiAvatar-root": {
                  width: "1.5rem",
                  height: "1.5rem",
                },
              }}
            >
              {elements.map((element) => (
                <Avatar
                  key={element.element_id}
                  src={`/element/${element.element_name.toLowerCase()}.png`}
                  alt={element.element_name}
                />
              ))}
            </AvatarGroup>
          </Box>
        </SeasonalFooterStack>
      </Stack>
    </Box>
  );
};

export default SeasonalStatsLayoutCardFooter;
