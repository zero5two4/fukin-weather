import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert, FlatList } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "4492d96517b54b3f5a6df32a83e694e5";
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    //console.log({ data });
    this.setState({ isLoading: false, 
      temp, 
      condition: weather[0].main });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("I Can't find you", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
