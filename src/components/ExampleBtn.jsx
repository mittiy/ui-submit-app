import { Button } from "@chakra-ui/react";

const ExampleBtnPage = () => {
    return <ExampleBtn colorScheme={'red'}>送信</ExampleBtn>
};

const ExampleBtn = ({children, ...props}) => {
    return(
        <Button rounded={'lg'} {...props} >
            {children}
        </Button>
    )
};

export default ExampleBtnPage;