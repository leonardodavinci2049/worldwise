import Message from "../../../../../../common-components/message/Message";
import Spinner from "../../../../../../common-components/spinner/Spinner";
import CityItem from "../cityitem/CityItem";

import styles from "./CityList.module.css";

//import { useCities } from "../contexts/CitiesContext";
import PropTypes from "prop-types";

function CityList({ cities, isLoading }) {
  // const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CityList;
