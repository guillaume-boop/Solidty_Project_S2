import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react-core';
import './index.css';

function App() {
  const { user } = useDynamicContext();

  console.log('User:', user);

  return (
    <>
      <div className="dynamic-top-right">
        <DynamicWidget />
      </div>

        {user && (
          <p style={{ marginTop: '0.5rem', marginLeft:'0.5rem', fontSize: '2rem' }}>
            👋 Bienvenue <strong>{user.firstName || user.email || user.wallets?.[0]?.address}</strong> !
          </p>
        )}

      <div className="main-content">
        <h1>Application</h1>

      </div>
    </>
  );
}

export default App;
