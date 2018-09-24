import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class GoogleMaps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };
    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    render() {
        const style = {
            width: '95%',
            height: '75%',
            'marginLeft': 'auto',
            'marginRight': 'auto'
        };
        return (
            <Map
                item
                //xs = { 12 }
                style = { style }
                google = { this.props.google }
                onClick = { this.onMapClick }
                zoom = { 24 }
                initialCenter = {{ lat: 25.75744, lng: -80.373282 }}
            >
                <Marker
                    onClick = { this.onMarkerClick }
                    title = { 'Random Marker' }
                    position = {{ lat: 25.75744, lng: -80.373282 }}
                    name = { 'Marker' }
                />
                <InfoWindow
                    marker = { this.state.activeMarker }
                    visible = { this.state.showingInfoWindow }
                    >
                    <div>
                        <h4>{Marker.title}<br/></h4>
                        <p>{Marker.name}</p>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    api: (process.env.AIzaSyBP4VBdtLkqeYKOFRwoGnI2N50vn0OuuAs)
})(GoogleMaps)
