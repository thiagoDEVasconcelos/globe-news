import './styles.css';
import { Avatar, Box, Stack } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#about">CRIAR</a></li>
          <li><a href="#membership">POLÍTICA</a></li>
          <li><a href="#faqs">SOBRE NÓS</a></li>
          <li><a href="#join">ESPORTE</a></li>
          <li><a href="#join">ENTRETENIMENTO</a></li>
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
