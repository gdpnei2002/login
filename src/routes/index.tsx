import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { RLogin } from '../pages/RLogin';


interface FakeAutenticationProps {
  auth: boolean;
}

function FakeAutentication({ auth }: FakeAutenticationProps) {
  return auth ? <Outlet /> : Navigate({ to: '/' });
}

export function IndexRoute() {
  return (
    <Routes>
      <Route path="/" element={<RLogin />} />
      <Route path="/in" element={<FakeAutentication auth={false} />}>
        <Route path="/in/test-route" element={<h1>Tester</h1>} />
      </Route>
    </Routes>
  );
}
