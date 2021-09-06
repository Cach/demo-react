import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { FC, memo } from 'react';

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
