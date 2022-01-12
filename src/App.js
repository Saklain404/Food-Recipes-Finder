import React from "react";
import { useState } from "react";
import Hamburger from "./img/hamburger.svg";
import SearchIcons from "./img/search-icon.svg";
import RecipeComponent from "./components/RecipeComponent";

import styled from "styled-components";
import axios from "axios";

const API_ID = "da0096d5";
const API_KEY = "7b866514b4db917583651e6b2274ef27	";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const AppColumn = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(0, 0, 0);
  color: white;
  padding: 0.3rem;
  font-size: 1.7rem;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
     {
      font-size: 1.2rem;
    }
  }
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.7rem 0.7rem;
  border-radius: 6px;
  margin-left: 1.4rem;
  width: 50%;
  background-color: white;
  margin-right: 0.3rem;
`;
const SearchIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;
const HeaderImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 1rem;
  width: 100%;

  @media only screen and (max-width: 768px) {
     {
      margin-left: 0;
    }
  }
`;

const HdSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 34.1rem;
  align-items: center;
  justify-content: center;
  opacity: 60%;
`;
const HomeIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
`;

function App() {
  const [timeoutId, setTimeoutId] = useState("");
  const [recipeList, setRecipeList] = useState([]);

  const FetchRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    setRecipeList(response.data.hits);
    // console.log(response, "response")
  };

  const onChangeText = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => FetchRecipe(e.target.value, 500));
    // setSearchQuery(e.target.value)
    setTimeoutId(timeout);
  };
  return (
    <AppContainer>
      <Header>
        <AppName>
          <HeaderImage src={Hamburger} />
          Recipe Finder
        </AppName>
        <SearchBox>
          <SearchIcon src={SearchIcons} />
          <SearchInput
            placeholder="Search for Recipe"
            onChange={onChangeText}
          />
        </SearchBox>
      </Header>
      <AppColumn>
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <HdSection>
            <HomeIcon src={Hamburger} />
            <h1> Search For any Recipe!!</h1>
          </HdSection>
        )}
      </AppColumn>
    </AppContainer>
  );
}

export default App;
