import { Box, Stack, Typography } from "@mui/material";
import { IconButtonProps } from "../../types/component";
import Icon from "../Icon";

const IconButton = (props: IconButtonProps) => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      width="75%"
      margin="0 auto"
      padding="10px 15px"
      borderRadius="10px"
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
      <Icon src={props.src} alt={props.alt} width="30px" height="30px" />
      <Typography>{props.text}</Typography>
      <Box width="30px" height="30px" />
    </Stack>
  );
};

export default IconButton;
