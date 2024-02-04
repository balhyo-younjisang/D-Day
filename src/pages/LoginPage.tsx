import ButtonWrap from "../components/Login/ButtonWrap";
import Logo from "../assets/images/Logo.svg";
import { Stack, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <Stack
      alignItems="center"
      width="100%"
      height="100%"
      justifyContent="space-around"
    >
      <Stack width="80%" alignItems="center" gap="20px">
        <img src={Logo} alt="D-Day Logo" />
        <Typography
          fontSize="22px"
          fontWeight="bold"
          style={{ wordWrap: "break-word", textAlign: "center" }}
        >
          체계적으로 커플의 일정을
          <br />
          관리해보세요
        </Typography>
      </Stack>
      <ButtonWrap />
    </Stack>
  );
};

export default LoginPage;
