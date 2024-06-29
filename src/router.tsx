import { createBrowserRouter } from "react-router-dom";

import App from "./App";

const router = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        {
          index: true,
          element: <App />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
