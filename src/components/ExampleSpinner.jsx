import { Spinner } from "@chakra-ui/react";

const ExampleSpinnerPage = () => {
    return <ExampleSpinner size='xl' />
};

const ExampleSpinner = ({...props}) => {
    return(
        <Spinner color='red.500' {...props} />
    )
};

export default ExampleSpinnerPage;