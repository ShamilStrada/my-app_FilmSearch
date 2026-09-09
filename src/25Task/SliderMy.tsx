
import Slider from "@mui/material/Slider";
type MySliderProps={
  value:number[];
  handleChange:any;
}
export function MySlider({value,handleChange}:MySliderProps) {
return (
  <Slider
    min={1950}
    max={2030}
    step={1}
    valueLabelDisplay="on"
    value={value}
    onChange={handleChange}
  />)
}
