import React from 'react';

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MessagesFiltersForm from '../MessagesFiltersForm';

const MessagesFilters: React.FC = React.memo(() => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="messages-filters"
      id="messages-filters"
    >
      <Typography>Filters</Typography>
    </AccordionSummary>

    <AccordionDetails>
      <MessagesFiltersForm />
    </AccordionDetails>
  </Accordion>
));

export default MessagesFilters;
