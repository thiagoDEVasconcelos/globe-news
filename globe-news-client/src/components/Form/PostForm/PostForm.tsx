import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SelectForm from "../SelectForm";

const PostForm = () => {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, display: "flex", flexDirection: "column", alignItems: "center", margin: 10 }}
      noValidate
      autoComplete="off">
      <Typography sx={{ fontSize: 30 }}>Criar novo post:</Typography>
      <TextField id="outlined-basic" label="Título do post" variant="outlined" placeholder="Digite o título do post" />
      <TextField
        id="outlined-multiline-static"
        label="Texto do post"
        variant="outlined"
        multiline
        rows={4}
        placeholder="Digite o texto do seu post"
      />
      <SelectForm />
    </Box>
  )
}

export default PostForm;
