import { GithubSummary } from "../../components/GithubSummary";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";

export function Home() {
  return (
    <>
      <Header />
      <GithubSummary />
      <SearchBar />
    </>
  )
}