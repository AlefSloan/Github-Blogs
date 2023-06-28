import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostSummaryContainer, PostSummaryHeader, PostSummaryInfoContainer } from "./style";
import { faArrowUpRightFromSquare, faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function PostSummary() {
  return (
    <PostSummaryContainer>
      <PostSummaryHeader>
        <span>
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </span>
        <span>
          Ver no Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </span>
      </PostSummaryHeader>
      <h2>JavaScript data types and data structures</h2>
      <PostSummaryInfoContainer>
        <span>
          <FontAwesomeIcon icon={faGithub} fontSize={18} />
          cameronwll
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendar} fontSize={18} />
          Há 1 dia
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} fontSize={18} />5 comentários
        </span>
      </PostSummaryInfoContainer>
    </PostSummaryContainer>
  );
}
