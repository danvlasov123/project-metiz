import { YMaps, Map } from "react-yandex-maps";

const mapData = {
  center: [55.703652, 37.692555],
  zoom: 17,
};

const ContactMap = ({ children }) => (
  <YMaps>
    <Map className="map" defaultState={mapData}>
      {children}
    </Map>
  </YMaps>
);

export default ContactMap;
