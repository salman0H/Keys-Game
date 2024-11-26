# Interactive Ball Movement Web Application

## Overview
A simple web application that allows users to move a ball around the screen using arrow keys, with wrap-around functionality at screen edges.

## Features
- Ball movement using arrow keys
- Continuous screen wrap-around
- Responsive to window size
- Minimalist design with CSS variables for easy theming

## Project Structure
```
project-root/
│
├── index.html      # Main HTML structure
├── style.css       # CSS styling
└── tryJS.js        # JavaScript interactivity
```

## Functionality
### Keyboard Controls
- Left Arrow (37): Move ball left
- Right Arrow (39): Move ball right
- Up Arrow (38): Move ball up
- Down Arrow (40): Move ball down

### Movement Mechanics
- Consistent speed of movement
- Screen wrapping when reaching screen boundaries
- Ball continues from opposite side when going off-screen

## HTML Structure
- Single `<div>` with class `ball`
- Positioned absolutely within the body

## CSS Highlights
- CSS Variables for color theming
  - `--body`: Background color (light green)
  - `--font`: Ball color (dark olive)
- `overflow: hidden` prevents scrollbars
- Ball styled as a circular div with absolute positioning

## JavaScript Functionality
- Tracks key releases
- Calculates new ball position
- Implements screen wrapping logic
- Uses `window.innerWidth` and `window.innerHeight` for responsive sizing

## Configuration
### Customizable Parameters
- `speed`: Movement speed (currently set to 50 pixels)
- Color variables in `:root`
- Ball size (100x100 pixels)

## How to Use
1. Open `index.html` in a web browser
2. Use arrow keys to move the ball
3. Notice how the ball wraps around screen edges

## Browser Compatibility
- Modern browsers with JavaScript and CSS3 support

## Potential Improvements
- Add acceleration/deceleration
- Implement diagonal movement
- Add collision detection
- Create more complex movement patterns

## Technical Notes
- Uses vanilla JavaScript
- No external libraries required
- Responsive design

## License
Open-source project. Feel free to use and modify.

## Troubleshooting
- Ensure JavaScript is enabled
- Check console for any potential errors
- Verify all files are in the same directory
