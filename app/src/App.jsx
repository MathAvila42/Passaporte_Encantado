import { AppStateProvider, useAppState } from './state/AppState';
import SplashScreen from './screens/SplashScreen';
import InicioScreen from './screens/InicioScreen';
import GuiaScreen from './screens/GuiaScreen';
import DetalheScreen from './screens/DetalheScreen';
import QrScreen from './screens/QrScreen';
import PerfilScreen from './screens/PerfilScreen';
import DuvidasScreen from './screens/DuvidasScreen';
import TabBar from './components/TabBar';

const SCREENS = {
  inicio: InicioScreen,
  guia: GuiaScreen,
  qr: QrScreen,
  perfil: PerfilScreen,
};

function AppShell() {
  const { showSplash, tab, detailId, showDuvidas } = useAppState();
  const Screen = SCREENS[tab] ?? InicioScreen;

  return (
    <div className="phone-shell">
      <Screen key={tab} />
      {!detailId && !showDuvidas && <TabBar />}
      {detailId && <DetalheScreen key={detailId} />}
      {showDuvidas && <DuvidasScreen />}
      {showSplash && <SplashScreen />}
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
