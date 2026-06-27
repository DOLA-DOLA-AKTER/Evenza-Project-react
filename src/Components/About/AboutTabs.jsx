import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Peragraph from '../Container/Peragraph'


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
                
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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


const AboutTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', height: '250px'}}>
            <Box className='bg-[#F6F6F7] rounded-xl md:rounded-[20px] p-2 flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 md:mt-10'>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
                    sx={{
                        "& .MuiTabs-indicator": {
                        display: "none",
                        },
                    }}
                >
                    <Tab
                        label="Our Mission"
                        {...a11yProps(0)}
                        className='py-3 px-5 mx-1 rounded-md! font-bold! text-black! hover:bg-white/70! hover:text-black! focus:bg-white!'
                    />

                    <Tab
                        label="Our Vision"
                        {...a11yProps(1)}
                        className='py-3 px-5 mx-1 rounded-md! font-bold! text-black! hover:bg-white/70! hover:text-black! focus:bg-white!'
                    />

                    <Tab
                        label="Our Goal"
                        {...a11yProps(2)}
                        className='py-3 px-5 mx-1 rounded-md! font-bold! text-black! hover:bg-white/70! hover:text-black! focus:bg-white!'
                    />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <Peragraph>
                    Our mission is to create innovative and user-friendly digital experiences that solve real-world problems. We aim to deliver high-quality web solutions through creativity, technology, and continuous learning while helping businesses and individuals grow in the digital world.
                </Peragraph>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                <Peragraph>
                    Our vision is to build a global community where collaboration fuels innovation we aim encourage
                    fresh thinking, spark inspiring dialogues, and create a space.
                </Peragraph>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
                <Peragraph>
                    Our goal is to build modern, responsive, and impactful digital products that provide excellent user experiences. We strive to improve our skills, embrace new technologies, and deliver reliable solutions that help clients achieve their business objectives successfully.
                </Peragraph>
            </CustomTabPanel>

        </Box>
    )
}

export default AboutTabs
