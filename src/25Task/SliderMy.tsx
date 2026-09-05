
import Slider from "@mui/material/Slider";
type MySliderProps={
  value:number[];
  handleChange:any;
}
export function MySlider({value,handleChange}:MySliderProps) {
return (
  <Slider
    min={1900}
    max={2026}
    step={1}
    valueLabelDisplay="on"
    value={value}
    onChange={handleChange}
  />)
}
