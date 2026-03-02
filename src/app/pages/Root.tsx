import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { StarfieldBackground } from '../components/StarfieldBackground';

export function Root() {
  return (
    <div className="min-h-screen relative">
      <StarfieldBackground />
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
