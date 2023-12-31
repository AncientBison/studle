import { IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function InfoButton(properties) {
  const { setDialogOpen, mainTheme } = properties;

  return (
    <IconButton sx={{width: "3rem", height: "3rem"}} onClick={() => setDialogOpen(true)} >
      <HelpOutlineIcon sx={{width: "3rem", height: "3rem", color: mainTheme.palette.popup.contrastText}} />
    </IconButton>
  );
}

export { InfoButton };