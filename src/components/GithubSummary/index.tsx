import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GithubInfoContent, GithubSummaryContainer, GithubTextContent, GithubTitleContent } from "./style";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function GithubSummary() {
  return (
    <GithubSummaryContainer>
      <img src="./src/assets/avatar.png" />
      <div>
        <GithubTitleContent>
          <h1>Cameron Williamson</h1>
          <a>
            GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
          </a>
        </GithubTitleContent>
        <GithubTextContent>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </GithubTextContent>
        <GithubInfoContent>
          <span>
            <FontAwesomeIcon icon={faGithub} fontSize={'18px'} />
            cameronwll
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} fontSize={'18px'} />
            Rocketseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} fontSize={'18px'} />
            32 seguidores
          </span>
        </GithubInfoContent>
      </div>
    </GithubSummaryContainer>
  );
}
