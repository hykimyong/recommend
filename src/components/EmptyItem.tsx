import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const EmptyItem: React.FC = () => {

  return (
    <List dense sx={{mx:'auto', maxWidth:300, textAlign:'center'}}>
          <ListItem
            disablePadding
          >리스트가 없습니다
          </ListItem>
    </List>
  );
}

export default EmptyItem;