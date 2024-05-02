import { HeroList } from "./pages/hooks/components/helpers/HeroList"

export const MarvelPage = () => {
  return (
    <>
       <h1>Marvel Comics</h1>
       <hr />

       <HeroList publisher='Marvel Comics'/>
    </>

  )
}
