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
    slug: "montecarlo-simulation",
    title: "Monte Carlo Simulation Engine",
    category: "Systems",
    description:
      "A multi-threaded C++17 engine pricing options under five stochastic models (GBM, Heston, Merton, CIR, multi-asset) with variance reduction and a full VaR/CVaR risk suite. ~130M paths/sec on 8 cores.",
    tags: ["C++17", "Monte Carlo", "Multithreading", "Quant Finance"],
  },
];
