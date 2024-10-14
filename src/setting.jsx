import ExampleBtnPage from "./components/ExampleBtn";
import ExampleSpinnerPage from "./components/ExampleSpinner";
import InitialComponent from "./components/InitialComponent";
import ExsampleCheckboxpage from "./components/ExsampleCheckbox";
import ExampleAccordionpage from "./components/ExampleAccordion";

const routeList = [
    {path: '/', element: <InitialComponent />, title: 'デフォルト'},
    {path: '/exampleBtn', element: <ExampleBtnPage />, title: 'ボタン例1'},
    {path: '/exampleSpinner', element: <ExampleSpinnerPage />, title: 'スピナー例1'},
    {path: '/ExsampleCheckbox', element: <ExsampleCheckboxpage />, title: 'チェックボックス'},
    {path: '/ExampleAccordion', element: <ExampleAccordionpage />, title: 'アコーディオン'},
]

export default routeList;