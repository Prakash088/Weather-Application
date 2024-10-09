import { Box, Typography } from "@mui/material";
import {LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud, Margin} from '@mui/icons-material';

const Information = ({result}) => {
    return ( 
        result && Object.keys(result).length > 0 ?
        <Box style={{margin: '30px 60px'}}>
            <Typography><LocationOn />Location: {result.name}, {result.sys.country}</Typography>
            <Typography><SettingsBrightness />Temperature: {result.main.temp}</Typography>
            <Typography><Opacity />Humidity: {result.main.humidity}</Typography>
            <Typography><Brightness5 />Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleDateString()}</Typography>
            <Typography><Brightness6 />Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Typography>
            <Typography><Dehaze />Humidity: {result.weather[0].main}</Typography>
            <Typography><Cloud /> Clouds: {result.clouds.all}%</Typography>
        </Box>
        : null
     );
}

 
export default Information; 