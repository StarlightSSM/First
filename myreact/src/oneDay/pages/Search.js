import React, { useContext, useState } from "react";
import { ProfileStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./Search.css"; 

const Search = () => {
  const data = useContext(ProfileStateContext);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const onChangeSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm === "") {
      setSearchResults([]);
    } else {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(filteredData);
    }
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="Container">
        <h2>멤버 검색</h2>
        <input
            value={search}
            onChange={onChangeSearch}
            className="searchbar"
            placeholder="찾으시는 멤버를 입력하세요"
        />
        <div className="search-results">
            {searchResults.length === 0 ? (
            <p>검색 결과가 없습니다.</p>
            ) : (
            searchResults.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                </div>
            ))
            )}
        </div>
        <div className="ActionButtons">
            <button onClick={goBack}>뒤로가기</button>
        </div>
    </div>
  );
};

export default Search;
