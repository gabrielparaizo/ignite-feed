import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Gabriel Lopes"
        content="Lorem ipsum dolor sit amet, sheila, nao sei hahahaha"
      />
      <Post
        author="Diego Malheiros"
        content="Something goes in here, i don't know what it is"
      />
    </>
  );
}
