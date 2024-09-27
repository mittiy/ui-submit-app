import { Heading, ListItem, UnorderedList, VStack } from "@chakra-ui/react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import routeList from "./setting";

function App() {
  return (
    <VStack minH={'70vh'} pt={20} w={'full'}>
      <BrowserRouter>
        <Heading>UI提出フォーム</Heading>
        <UnorderedList w={{base: '90%', md: '50%'}} fontSize={'xl'}>
          {routeList.map(item=><ListItem key={item.path}><Link to={item.path}>{item.title}</Link></ListItem>)}
        </UnorderedList>
        <Routes>
          {routeList.map(item=><Route key={item.path} path={item.path} element={item.element} />)}
        </Routes>
      </BrowserRouter>
    </VStack>
  )
}

export default App
