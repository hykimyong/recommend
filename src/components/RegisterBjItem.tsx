import * as React from 'react';
import styled from "@emotion/styled";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import useMakeProfileImg from '../hook/makeProfileImg';
import IconButton from '@mui/joy/IconButton';
import Delete from '@mui/icons-material/Delete';


interface Props {
    bjId: string;
    bjNick: string;
  }

const RegisterBjItem: React.FC<Props> = ({bjId,bjNick}) => {

  const makeProfileImg = useMakeProfileImg();
  const profileImg = makeProfileImg(bjId);

  return (
    <List dense sx={{mx:'auto', maxWidth:300, bgcolor: 'background.paper', textAlign:'center', cursor:'default' }}>
          <ListItem
            key={bjId}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={bjId}
                  src={profileImg}
                />
              </ListItemAvatar>
              <ListItemText id={bjId} primary={bjId} />
              <ListItemText id={bjNick} primary={bjNick} />
              <IconButton aria-label="Delete" size="sm" color="danger">
              <Delete />
            </IconButton>
            </ListItemButton>
          </ListItem>
    </List>
  );
}

export default RegisterBjItem;