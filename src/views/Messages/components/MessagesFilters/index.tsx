import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import React, { FC, memo } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MessagesFilters: FC = memo(() => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="messages-filters"
      id="messages-filters"
    >
      <Typography>Filters</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>Filters should be here</Typography>
    </AccordionDetails>
  </Accordion>
));

export default MessagesFilters;
