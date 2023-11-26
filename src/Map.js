import React from 'react';
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap 
} from 'google-maps-react';

const Map = (props) => {
    return (
        <GoogleMap defaultZoom={10}
            defaultCenter={{ lat: -34, lng: 150 }}
        />
    );
};
export default withScriptjs(
    withGoogleMap(
        Map
    )
)