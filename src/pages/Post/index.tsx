import { Header } from "../../components/Header";
import { PostContent } from "./PostContent";
import { PostSummary } from "./PostSummary";

export function Post() {
  return (
    <>
      <Header />
      <PostSummary />
      <PostContent />
    </>
  )
}
