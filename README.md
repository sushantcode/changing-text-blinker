# react-changing-text-blinker
An npm react package library that helps you to render an array of blinking texts/elements which changes with each blink.

# Install
npm i react-changing-text-blinker

# How to use it?
It is very easy to use it in your react project. You can simply use it by installing and importing to your react pages/components as a JSX component.

## Example
```
import { ChangingTextBlinker } from 'react-changing-text-blinker';

const YourComponentName = () = {
  const stringArray = ["Element-1", "Element-2", "Element-3", "Element-4", "Element-5",...]; //Array of elements you want to blink
  const delayTime = 5; //Time gap you want between each blink
  // Rest of Your codes if you have
  return (
    <ChangingTextBlinker className="yourclassNameToStyle" stringArray={stringArray} delayTime={delayTime} random={false} />
   );
}
```
export YourComponentName;

# props
* **stringArray (required):**
  It is the list of elements you want to render. It must has to be provided to the component as an **Array of Strings** type.
* **delayTime (required):**
  It is the time gap **(in seconds)** you want to put between each blink. It is also a required prop. It has to be a float type.
* **random (optional):**
  It is an optional property which defines if you want the elements to change in random order or not while blinking. It is a boolean type.
  random = {true} => renders the elements in random order than the order they are provided in the stringArray
  random = {false} => renders the elements in same order they are provided in the stringArray
* **className (optional):**
  This defines the styles of the elements such as color, size, strokes, etc.
  
# Contributor
  - Sushant Gupta <br />
    [GitHub Profile](https://github.com/sushantcode) <br />
    [LinkedIn Profile](https://www.linkedin.com/in/sushantgupta2016/) 
