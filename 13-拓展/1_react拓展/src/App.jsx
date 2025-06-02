import LazyLoadDemo from './components/2_lazyLoad/index';
import HookDemo, { ClassDemo } from './components/3_hooks';
import FragmentDemo from './components/4_fragment';
import ContextDemo from './components/5_context';
import OptimizeeDemo from './components/6_optimize';
import RenderPropsDemo from './components/7_renderProps';

function App() {
    return (
        <div className="App">
            {/* <LazyLoadDemo />
            <hr />
            <ClassDemo />
            <hr />
            <HookDemo />
            <hr />
            <FragmentDemo />
            <hr />
            <ContextDemo />
            <hr />
            <OptimizeeDemo />
            <hr /> */}
            <RenderPropsDemo />
        </div>
    );
}

export default App;
