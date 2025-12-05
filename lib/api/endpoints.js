// Centralized API Endpoints
// Use these constants throughout the app to maintain consistency.

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/sign-in",
    REGISTER: "/auth/sign-up",
    ME: "/users/me",
  },
  BUNDLES: {
    LIST: "/bundles",
    DETAILS: (id) => `/bundles/${id}`,
  },
  ORDERS: {
    CREATE: "/orders",
    LIST: "/orders",
    FULFILL: (id) => `/orders/${id}/fulfill`,
  },
  RESELLERS: {
    STATS: "/resellers/stats",
  },
};
