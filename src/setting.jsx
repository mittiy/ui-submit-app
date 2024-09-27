import ExampleBtnPage from "./components/ExampleBtn";
import ExampleSpinnerPage from "./components/ExampleSpinner";
import InitialComponent from "./components/InitialComponent";

const routeList = [
    {path: '/', element: <InitialComponent />, title: 'デフォルト'},
    {path: '/exampleBtn', element: <ExampleBtnPage />, title: 'ボタン例1'},
    {path: '/exampleSpinner', element: <ExampleSpinnerPage />, title: 'スピナー例1'},
]

export default routeList;