export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "high-performance-cpp-orderbook",
    title: "High-Performance C++ Orderbook",
    category: "Systems",
    description:
      "A production-grade order matching engine in modern C++20: price-time priority matching, multiple order types, and thread-safe concurrent operations.",
    tags: ["C++20", "Multithreading", "Order Matching"],
  },
  {
    slug: "timeseries-forecasting-weather",
    title: "ARIMA and XGBoost Time Series Forecasting",
    category: "Data & ML",
    description:
      "ARIMA and XGBoost models forecasting Italian energy load and solar generation from historical time series data, compared on RMSE, MAE and R².",
    tags: ["Python", "ARIMA", "XGBoost", "Time Series"],
  },
  {
    slug: "3d-shirt-designer",
    title: "3D Shirt Designer",
    category: "Web",
    description:
      "A realtime 3D shirt customization tool with product listing, cart and order flow, built with Three.js and React Three Fiber.",
    tags: ["React", "Three.js", "Next.js"],
  },
];
