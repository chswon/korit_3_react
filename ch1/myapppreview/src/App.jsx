import Introduction1 from "./Introduction1 Component"
import Introduction2 from "./Introduction2 Component"
import Introduction3 from "./Introduction3 Component"

function App() {
  return (
    <>
    <Introduction1 />
    <Introduction2 age={38} major = '영어교육과' />
    <Introduction3 futurejob= "풀스택 개발자" certificate = "정보처리산업기사, SQLD" />
    </>  
      );
    }

export default App
