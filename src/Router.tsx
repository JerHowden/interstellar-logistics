import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ProvidedApp } from './components/App';
import { FleetPage } from './pages/Fleet.page';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ProvidedApp />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" />
      <Route path="/dashboard" />
      <Route path="/facilities">
        <Route path=":facility-id" />
      </Route>
      <Route path="/employees">
        <Route path=":employee-id" />
      </Route>
      <Route path="/fleet" element={<FleetPage />}>
        <Route path=":ship-id" />
      </Route>
      <Route path="/procurement">
        <Route path="harvesting" />
        <Route path="processing" />
        <Route path="manufacturing" />
      </Route>
      <Route path="/inventory" />
      <Route path="/deliveries" />
      <Route path="/balance-sheet" />
      <Route path="/contracts" />
      {/* separated run awards and user awards but both displayed */}
      <Route path="/awards" />
      {/* separated run statistics and user statistics but both displayed */}
      <Route path="/statistics" />
      <Route path="/logout" />
    </Route>
  )
);

export function Router() {
  return <RouterProvider router={router} />;
}
