import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { InputLabel } from '@mui/material';

const EmptyItem: React.FC = () => {

  return (
    <List dense sx={{mx:'auto', maxWidth:300, textAlign:'center'}}>
          <ListItem
            disablePadding
          ><InputLabel style={{ color: 'white' }}>설정한 추천 BJ가 없습니다.</InputLabel>
          </ListItem>
    </List>
  );
}

export default EmptyItem;