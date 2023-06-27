import { SearchBarContainer, SearchBarContent } from "./style";

export function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarContent>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </SearchBarContent>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchBarContainer>
  );
}
