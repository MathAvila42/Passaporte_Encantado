import { AppStateProvider, useAppState } from './state/AppState';
import ExplorarScreen from './screens/ExplorarScreen';
import MapaScreen from './screens/MapaScreen';
import QrScreen from './screens/QrScreen';
import DuvidasScreen from './screens/DuvidasScreen';
import PerfilScreen from './screens/PerfilScreen';
import ConquistasScreen from './screens/ConquistasScreen';
import PontosScreen from './screens/PontosScreen';
import FairyFab from './components/FairyFab';
import TabBar from './components/TabBar';
import QrSuccessOverlay from './components/QrSuccessOverlay';

const SCREENS = {
  explorar: ExplorarScreen,
  mapa: MapaScreen,
  qr: QrScreen,
  duvidas: DuvidasScreen,
  perfil: PerfilScreen,
  conquistas: ConquistasScreen,
  pontos: PontosScreen,
};

function AppShell() {
  const { tab, showQrSuccess } = useAppState();
  const Screen = SCREENS[tab] ?? ExplorarScreen;

  return (
    <div className="phone-shell">
      <Screen />
      <FairyFab />
      <TabBar />
      {showQrSuccess && <QrSuccessOverlay />}
    </div>
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <AppShell />
    </AppStateProvider>
  );
}
