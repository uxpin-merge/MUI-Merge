import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// const DataWrapper = ({ apiUrl, children, mapDataToProps, maxRecords }) => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         // Fetch data from the provided API URL
//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(resultData => setData(resultData))
//             .catch(error => console.error('Error fetching data:', error));
//     }, [apiUrl]);

//     // Ensure that data is an array before attempting to use slice
//     const dataArray = Array.isArray(data) ? data : [];

//     // Map children components to the data and bind values using the provided mapping function
//     const mappedChildren = dataArray.slice(0, maxRecords).map((item, index) => {
//         const mappedProps = mapDataToProps(item);
//         return React.cloneElement(children, { key: index, ...mappedProps });
//     });

//     return <div>{mappedChildren}</div>;
// };

// DataWrapper.propTypes = {
//     apiUrl: PropTypes.string,
//     children: PropTypes.node,
//     mapDataToProps: PropTypes.func,
//     maxRecords: PropTypes.number
// };

// DataWrapper.defaultProps = {
//     apiUrl: "https://catfact.ninja/fact",
//     mapDataToProps: item => ({ children: item.fact }),
//     maxRecords: 2
// };
const Main = () => {
    const [name, setName] = useState("");
    const [fromApi, setFromApi] = useState([]);

    const getApiData = () => {
        fetch('https://httpbin.org/get')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setFromApi(data);
            })
    }

    useEffect(() => {
        getApiData();
    }, [])

    useEffect(() => {
        if (fromApi?.fact) {
            // alert(fromApi.length)

            for (var i = 0; i < fromApi.length; i++) {

                // alert(fromApi.fact)

                setName(fromApi.url);

            }
        }
    }, [fromApi])

    return (
        <div>
            {/* {fromApi.fact} */}
            <h2 className='urname'>Your name: {name}</h2>
        </div>
    )
}


export default Main;
