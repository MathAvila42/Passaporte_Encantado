import { AppStateProvider, useAppState } from './state/AppState';
import GuiaScreen from './screens/GuiaScreen';
import MapaScreen from './screens/MapaScreen';
import DetalheScreen from './screens/DetalheScreen';
import QrScreen from './screens/QrScreen';
import DuvidasScreen from './screens/DuvidasScreen';
import PerfilScreen from './screens/PerfilScreen';
import ConquistasScreen from './screens/ConquistasScreen';
import TabBar from './components/TabBar';
import QrSuccessOverlay from './components/QrSuccessOverlay';

function GuiaTab() {
  const { guiaView } = useAppState();
  if (guiaView === 'mapa') return <MapaScreen />;
  if (guiaView === 'detail') return <DetalheScreen />;
  return <GuiaScreen />;
}

function PerfilTab() {
  const { perfilView } = useAppState();
  return perfilView === 'conquistas' ? <ConquistasScreen /> : <PerfilScreen />;
}

const SCREENS = {
  guia: GuiaTab,
  qr: QrScreen,
  duvidas: DuvidasScreen,
  perfil: PerfilTab,
};

function AppShell() {
  const { tab, showQrSuccess } = useAppState();
  const Screen = SCREENS[tab] ?? GuiaTab;

  return (
    <div className="phone-shell">
      <Screen />
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
