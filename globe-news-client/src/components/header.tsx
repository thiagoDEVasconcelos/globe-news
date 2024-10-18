import Menu from "./Menu";
import { Avatar, Box, Stack } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = () => {
  return (
    <header className="bg-white fixed w-full z-50 flex flex-row justify-around py-3 ">
      <Menu />
        <ul className="flex flex-row space-x-6 pt-2">
          <li className="group relative">
            <a href="#">Futebol</a>
            <span className="absolute inset-x-0 bottom-2 h-[2px] bg-black transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
          </li>
          <li className="group relative">
            <a href="#">Política</a>
            <span className="absolute inset-x-0 bottom-2 h-[2px] bg-black transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
          </li>
          <li className="group relative">
            <a href="#">Esportes</a>
            <span className="absolute inset-x-0 bottom-2 h-[2px] bg-black transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
          </li>
          <li className="group relative">
            <a href="#">Entretenimento</a>
            <span className="absolute inset-x-0 bottom-2 h-[2px] bg-black transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
          </li>
          <li className="group relative">
            <a href="#">Jogos</a>
            <span className="absolute inset-x-0 bottom-2 h-[2px] bg-black transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
          </li>
        </ul>
        <Box className="flex flex-row">
          <NotificationsNoneIcon fontSize="large"/>
          <Stack>
            <a href="#">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </a>
          </Stack>
        </Box>
    </header>
  );
};

export default Header;