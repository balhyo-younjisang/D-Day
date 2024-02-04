import { Stack } from "@mui/material";
import IconButton from "./IconButton";

import GoogleIcon from "../../assets/icons/google_icon.png";
import KakaoIcon from "../../assets/icons/kakao_icon.png";

const ButtonWrap = () => {
  return (
    <Stack gap="5px">
      <IconButton
        src={GoogleIcon}
        alt={"Google Login Icon"}
        width={"30px"}
        height={"30px"}
        text={"구글 계정으로 시작하기"}
        backgroundColor={"#F0F0F0"}
      />

      <IconButton
        src={KakaoIcon}
        alt={"Kakao Login Icon"}
        width={"30px"}
        height={"30px"}
        text={"카카오 계정으로 시작하기"}
        backgroundColor={"#FFE617"}
      />
    </Stack>
  );
};

export default ButtonWrap;
