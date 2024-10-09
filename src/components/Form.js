import { Box, InputBase, Button, styled } from "@mui/material";
import { useState } from "react";
import  getWeather from "../services/api";

const Container = styled(Box)({
    background: '#445A6F',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight: '20px',
    fontSize: 18
})

const GetButton = styled(Button)({
    background: '#e67e22',
    borderRadius: '10px',
    width: 150
    
})
const Form = ({ setResult }) => {
    const [data, setData] = useState({city: '', country: ''});

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})

    }
    const getWeatherInfo= async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    }
    return ( 
        <Container>
            <Input 
                placeholder="City"
                onChange={(e) =>handleChange(e)}
                name="city"
            />
            <Input 
                placeholder="Country"
                onChange={(e) => handleChange(e)}
                name="country"
            />
            <GetButton 
                variant="contained"
                onClick={(e)=> getWeatherInfo(e)}
            >Get Weather</GetButton>
        </Container>
     );
}
 
export default Form;
















































// import { Box, InputBase, Button, styled } from "@mui/material";
// import { useState } from "react";
// import  getWeather  from "../services/api"; // Ensure getWeather is correctly imported

// const Container = styled(Box)({
//     background: '#445A6F',
//     padding: 10,
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
// });

// const Input = styled(InputBase)({
//     color: '#FFF',
//     marginRight: '20px',
//     fontSize: 18
// })

// const GetButton = styled(Button)({
//     background: '#e67e22',
//     borderRadius: '10px',
//     width: 150
// })

// const Form = () => {
//     const [data, setData] = useState({city: '', country: ''});

//     const handleChange = (e) => {
//         setData({...data, [e.target.name]: e.target.value});
//     }

//     const getWeatherInfo = async () => {
//         if (data.city && data.country) {
//             try {
//                 let result = await getWeather(data.city, data.country); // Correct the city.country error
//                 console.log(result); // Use the result as necessary
//             } catch (error) {
//                 console.error('Error fetching weather data:', error);
//             }
//         } else {
//             console.log("Please enter both city and country");
//         }
//     }

//     return ( 
//         <Container>
//             <Input 
//                 placeholder="City"
//                 onChange={(e) => handleChange(e)}
//                 name="city"
//             />
//             <Input 
//                 placeholder="Country"
//                 onChange={(e) => handleChange(e)}
//                 name="country"
//             />
//             <GetButton 
//                 variant="contained"
//                 onClick={getWeatherInfo}
//             >
//                 Get Weather
//             </GetButton>
//         </Container>
//     );
// }
 
// export default Form;


















