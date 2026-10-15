import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const searchTextRef = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (searchTextRef.current) {
          onSearch(searchTextRef.current.value);
        }
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={searchTextRef}
          type="text"
          placeholder="Search games....."
          variant={"outline"}
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
