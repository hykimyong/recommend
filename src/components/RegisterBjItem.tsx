import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import useMakeProfileImg from '../hook/makeProfileImg';
import IconButton from '@mui/joy/IconButton';
import Delete from '@mui/icons-material/Delete';
import useMoveStation from '../hook/useMoveStation';
import Typography from '@mui/material/Typography';
import { useLocalStorage } from 'usehooks-ts';


interface Props {
    bjId: string;
    bjNick: string;
  }

const RegisterBjItem: React.FC<Props> = ({bjId,bjNick}) => {

  const [recommendBjList, setRecommendBjList] = useLocalStorage<{ bjId: string; bjNick: string }[]>('recommendBjList', [])

  const makeProfileImg = useMakeProfileImg();
  
  const profileImg = makeProfileImg(bjId);

  const handleRemove = () =>{
    const updatedBjList = recommendBjList.filter((bj) => bj.bjId !== bjId);
    setRecommendBjList(updatedBjList);
  }


  return (
    <List dense sx={{mx:'auto', maxWidth:300, bgcolor: 'background.paper', textAlign:'center'}}>
          <ListItem
            key={bjId}
            disablePadding
          >
            <ListItemButton sx={{ cursor: 'initial' }}>
              <ListItemAvatar>
                <Avatar
                  alt={bjId}
                  src={profileImg}
                  onClick={useMoveStation(`//bj.afreecatv.com/${bjId}`)}
                />
              </ListItemAvatar>
              <ListItemText
                primary={bjId}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      
                    </Typography>
                    {bjNick}
                  </React.Fragment>
                }
              />
              <IconButton aria-label="Delete" size="sm" color="danger">
              <Delete onClick={handleRemove}/>
            </IconButton>
            </ListItemButton>
          </ListItem>
    </List>
  );
}

export default RegisterBjItem;