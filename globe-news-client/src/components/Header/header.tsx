import './styles.css';
import { Avatar, Box, Stack } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Logo from '../../assets/globe-news-logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#about">Criar</a></li>
          <li><a href="#membership">Política</a></li>
          <li><a href="#faqs">Sobre nós</a></li>
          <li><a href="#join">Esporte</a></li>
          <li><a href="#join">Entretenimento</a></li>
        </ul>
      </nav>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px"}}>
        <NotificationsNoneIcon />
        <Stack direction="row" spacing={2}>
          <a href=""><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></a>
        </Stack>
      </Box>
    </header>
  );
};

export default Header;
