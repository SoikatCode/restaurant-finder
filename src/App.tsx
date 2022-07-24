import AppRouter from './routers/AppRouter';
import CustomRouter from './routers/CustomRouter';
import history from "./routers/history";

const App = () => {
  return (
    <div id={'app-container'} className={'app-container'}>
    <div
      className='container-fluid m-0'
      style={{
        minHeight: '100vh',
        overflow: 'hidden',
        paddingTop: 0
      }}
    >
      <div className={'row p-0 outer-application'}>
        <div className={'application p-0 col-md-12 col-sm-12'}>
        <CustomRouter history={history}>
          <AppRouter />
        </CustomRouter>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
