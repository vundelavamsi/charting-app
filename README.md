# React Chart App

This is a React.js application that displays interactive charts using the Recharts library. It supports multiple timeframe breakdowns (daily, weekly, monthly), zooming functionality, and displays detailed information for clicked data points in a modal. Chart data is provided via a JSON file.

## Features

- Display interactive charts with zooming and timeframe breakdowns.
- Click on data points to view detailed information in a modal.
- Export the chart as PNG/JPG format.

## Prerequisites

Before you begin, ensure you have met the following requirements:

 - Node.js (>= 14.x)
 - npm (>= 6.x) or yarn (>= 1.x)

## Installation

1. Clone the repository:
    ```bash
        git clone https://github.com/vundelavamsi/charting-app.git
        cd charting-app
    ```

2. Install dependencies:
    ```bash
        npm install
    ```
3. Create a data.json file in the public directory with sample data:
    ```json
        [
            { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
            { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
            { "timestamp": "2023-01-03T00:00:00Z", "value": 5 },
            ...
        ]
    ```

## Running the App

1. Start the development server: `npm start`
2. Open your browser and navigate to: `http://localhost:3000`

## Project Structure
    
        react-chart-app/
        ├── public/
        │   ├── data.json
        │   └── index.html
        ├── src/
        │   ├── components/
        │   │   ├── ChartComponent.js
        │   │   ├── TimeframeSelector.js
        │   │   ├── ExportButton.js
        │   │   └── DetailsModal.js
        │   ├── App.js
        │   ├── App.css
        │   ├── index.js
        │   └── index.css
        ├── package.json
        └── README.md

## Usage
 - Timeframe Selector: Use buttons to switch between daily, weekly, and monthly views.
 - Chart Zooming: Use mouse scroll to zoom in/out on the chart.
 - Click Event: Click on data points to view detailed information in a modal.


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for any improvements or fixes.