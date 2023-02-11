import { useState, React } from "react";
import {
  Fab,
  styled,
  Typography,
  Avatar,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { display } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Image from "@mui/icons-material/Image";
import VideoCameraBack from "@mui/icons-material/VideoCameraBack";
import PersonAdd from "@mui/icons-material/PersonAdd";
import ButtonGroup from "@mui/material/ButtonGroup";
import DateRangeIcon from "@mui/icons-material/DateRange";
const Add = () => {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginBottom: "10px",
  });
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(true)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          height={250}
          width={450}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Button
            onClick={() => setOpen(false)}
            sx={{ display: "flex", gap: "20" }}
          >
            <CloseIcon color="otherColor" />
          </Button>

          <Typography variant="h6" color="gray" textAlign="center">
            Create a post
          </Typography>
          <UserBox>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography variant="span" fontWeight={500}>
              Shivam Dixit
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            rows={4}
            label="Whats on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd colo="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
