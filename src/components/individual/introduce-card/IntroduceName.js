import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { Box, Typography, Accordion, AccordionSummary } from '@mui/material';

import { cutString, checkLengthString } from 'src/lib/utils/checkString';
import { useState } from 'react';

const RootItem = styled(Box)(({ theme }) => ({
  paddingLeft: '1.5rem'
}));

IntroduceName.propTypes = {
  color: PropTypes.string,
  full_name: PropTypes.string,
  title: PropTypes.string,
  about: PropTypes.string,
  card_name: PropTypes.string
};

function IntroduceName(props) {
  const [toggle, setToggle] = useState({
    about: false
  });

  const { color, full_name, title, about, card_name, company_name } = props;

  const toggleAccordion = () => {
    setToggle({
      about: !toggle.about
    });
  };

  return (
    <Box sx={{ margin: '1.5rem' }}>
      <Box sx={{ borderLeft: '1px dashed black' }}>
        <RootItem>
          <Typography variant="h4" color="initial">
            {full_name}
          </Typography>
        </RootItem>
        <RootItem>
          <Typography variant="subtitle1" color="initial">
            {title}
          </Typography>
        </RootItem>
        <RootItem>
          <Typography variant="h5" sx={{ color: color }}>
            {company_name}
          </Typography>
        </RootItem>
        <RootItem>
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            {!checkLengthString(about, 100) ? (
              about
            ) : (
              <Accordion onClick={toggleAccordion}>
                <AccordionSummary
                  expandIcon={
                    <Icon
                      icon="eva:arrow-ios-downward-fill"
                      style={{ fontSize: '20px' }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {toggle.about ? about : cutString(about, 100)}
                </AccordionSummary>
              </Accordion>
            )}
          </Typography>
        </RootItem>
      </Box>
      <Box sx={{ m: '1.5rem 0 1.5rem 0', textTransform: 'uppercase' }}>
        <Typography variant="body1">{card_name}</Typography>
      </Box>
    </Box>
  );
}

export default IntroduceName;
