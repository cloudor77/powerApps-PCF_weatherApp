import { IInputs, IOutputs } from "./generated/ManifestTypes";

import React = require("react");
import { App, AppWeatherAPI } from "./src/components/App";
import { IWeatherData, WeatherType } from "./src/components/App";

export class PCFWeatherControl
  implements ComponentFramework.ReactControl<IInputs, IOutputs>
{
  private notifyOutputChanged: () => void;

  private _weatherData: IWeatherData[] = [];

  /**
   * Empty constructor.
   */
  constructor() {}

  private generateWeatherData(): IWeatherData[] {
    let startDate = new Date();
    let weatherData: IWeatherData[] = [];
    for (let i = 0; i < 5; i++) {
      let date = new Date();
      date.setDate(startDate.getDate() + i);
      let temperature = Math.floor(Math.random() * 51) - 25;
      let weatherType: WeatherType = WeatherType.SUNNY;
      if (temperature <= -5) weatherType = WeatherType.SNOW;
      else if (temperature >= -5 && temperature <= 5)
        weatherType = WeatherType.RAINSNOW;
      else if (temperature >= 5 && temperature <= 10)
        weatherType = WeatherType.CLOUDY;
      else if (temperature >= 10 && temperature <= 20)
        weatherType = WeatherType.PARTLYCLOUDYDAY;
      else if (temperature >= 20) weatherType = WeatherType.SUNNY;
      weatherData.push({
        date: date,
        temperature: temperature,
        weatherType: weatherType,
      });
    }
    return weatherData;
  }

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   */
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   * @returns ReactElement root react element for the control
   */

  public updateView(
    context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    this._weatherData = this.generateWeatherData();
    //↓↓↓↓↓↓↓↓↓↓↓ Uncomment Out the return statement below (line 70) and Comment out the return statement on line (line 75)  React.createElement(AppApi) line to see static data ↓↓↓↓↓↓↓↓↓↓↓
    // return React.createElement(App, { weatherData: this._weatherData });

    // Either has to active and uncommented out in order to work - if both are commented out it will ultimately lead to app crash

    // ↓↓↓↓↓↓↓↓↓↓↓ Comment out the return statement above (line 70) and uncomment out the return statement below (line 75)  to see Real API Data - meteosource  ↓↓↓↓↓↓↓↓↓↓↓
    return React.createElement(AppWeatherAPI);
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    return {};
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
