import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const jobDetails = {
    Amazon: {
      jobTitle: "Software Development Engineer @",
      duration: "JUL 2022 - PRESENT",
      desc: "Collaborate with experienced cross-disciplinary Amazonians to conceive, design, and bring innovative products and services to market."
    },
    Wattpad: {
      jobTitle: "Software Engineering Intern @",
      duration: "MAY 2020 - APR 2021",
      desc: "Developed a responsive React web page from scratch, both on client and server side, for an app with massive scale."
    },
    "University of Toronto": {
      jobTitle: "Research Engineer @",
      duration: "MAY 2021 - SEPT 2021",
      desc: "Developing and researching an NLP-based framework using state-of-the-art tools like Spacy and Stanza."
    },
  };

  return (
    
  <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        {Object.keys(jobDetails).map((key, i) => (
          <Tab label={key} {...a11yProps(i)} key={key} />
        ))}
      </Tabs>
    </Box>
      {Object.keys(jobDetails).map((key, i) => (
    
        <CustomTabPanel value={value} index={i} key={key}>
          <div className='job-container'>
            <h4 className='joblist-job-title'>{jobDetails[key]["jobTitle"] + " " + key}</h4>
            <p className='joblist-duration'>{jobDetails[key]["duration"]}</p>
            <p className='job-description'>{jobDetails[key]["desc"]}</p>
          </div>
      </CustomTabPanel>
    ))}
  </Box>
  );

}
