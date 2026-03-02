import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { EvidenceCardPublic } from './pages/EvidenceCardPublic';
import { SignalExplorer } from './pages/SignalExplorer';
import { DebateRoom } from './pages/DebateRoom';
import { ThinkTank } from './pages/ThinkTank';
import { SavedLibrary } from './pages/SavedLibrary';
import { TopicHub } from './pages/TopicHub';
import { Glossary } from './pages/Glossary';
import { About, Methodology } from './pages/StaticPages';
import { NotFound } from './pages/NotFound';
import { ExpertProfile } from './pages/ExpertProfile';
import { ContributionDashboard } from './pages/ContributionDashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'evidence', Component: EvidenceCardPublic },
      { path: 'explorer', Component: SignalExplorer },
      { path: 'debate', Component: DebateRoom },
      { path: 'think-tank', Component: ThinkTank },
      { path: 'library', Component: SavedLibrary },
      { path: 'topic/:topicId', Component: TopicHub },
      { path: 'glossary', Component: Glossary },
      { path: 'about', Component: About },
      { path: 'methodology', Component: Methodology },
      { path: 'experts/:expertId', Component: ExpertProfile },
      { path: 'editor/contributions', Component: ContributionDashboard },
      { path: '*', Component: NotFound },
    ],
  },
]);