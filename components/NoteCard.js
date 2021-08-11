import React from 'react';

import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';

import { DeleteOutlined} from '@material-ui/icons';

const   NoteCard = ({home}) => {
    return (
      
        <div >
          <Card>
              <CardHeader
              acton={
              <IconButton>
                  <DeleteOutlined/>
                  </IconButton>
                  }
 title={home.title}
 subheader = {home.num}
 />
                  
          </Card>
        </div>
      
    );
};

export default NoteCard;