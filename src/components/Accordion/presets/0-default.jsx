import Accordion from '../Accordion';
import AccordionDetails from '../../AccordionDetails/AccordionDetails';
import AccordionSummary from '../../AccordionSummary/AccordionSummary';
import Typography from '../../Typography/Typography';
import Icon from '../../Icon/Icon';

export default (
  <Accordion uxpId="Accordion-1" elevation={1}>
    <AccordionSummary uxpId="Accordion-Summary-1" expandIcon={<Icon uxpId="icon-1">expand_more</Icon>}>
      <Typography uxpId="Typography-1">Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails uxpId="Accordion-Details-1">
      <Typography uxpId="Typography-1-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
);
