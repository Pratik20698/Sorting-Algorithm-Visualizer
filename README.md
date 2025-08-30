# Sorting Algorithm Visualizer

An interactive web application that visualizes sorting algorithms with step-by-step animations and provides code implementations in multiple programming languages.

## Features

- 🎯 **6 Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort
- 💻 **5 Programming Languages**: C, C++, Java, Python, JavaScript
- 🎮 **Interactive Controls**: Play, pause, resume, reset, speed control
- 📊 **Visual Feedback**: Color-coded comparison, swapping, and sorted states
- 📚 **Educational Content**: Time/space complexity analysis and algorithm descriptions
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices

## Quick Start

### Option 1: Simple Local Server
1. Download all files to a folder named `sorting-visualizer`
2. Open terminal/command prompt in that folder
3. Run: `python -m http.server 8000` (Python 3) or `python -m SimpleHTTPServer 8000` (Python 2)
4. Open browser and go to `http://localhost:8000`

### Option 2: Node.js Server
1. Install Node.js if you haven't already
2. Download all files to a folder
3. Run: `npm install`
4. Run: `npm run serve`
5. Open the URL shown in terminal

### Option 3: Direct File Opening
Simply double-click `index.html` to open in your browser (some features may be limited due to CORS)

## Usage

1. **Select Algorithm**: Choose from 6 different sorting algorithms
2. **Adjust Settings**: Set array size (10-100) and animation speed (1-100%)
3. **Show Info**: View time/space complexity and algorithm description
4. **Show Code**: See implementation in C, C++, Java, Python, or JavaScript
5. **Start Visualization**: Watch the algorithm sort the array step by step
6. **Control Playback**: Pause, resume, or reset at any time

## Algorithm Complexity

| Algorithm | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Bubble Sort | O(n²) | O(1) |
| Selection Sort | O(n²) | O(1) |
| Insertion Sort | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(log n) |
| Heap Sort | O(n log n) | O(1) |

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with modern features (flexbox, grid, gradients)
- **Vanilla JavaScript**: Interactive functionality and algorithm implementations
- **Font Awesome**: Icons for better UX

## Browser Compatibility

- Chrome/Chromium 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT License - feel free to use for educational purposes!
