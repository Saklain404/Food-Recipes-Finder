import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from "styled-components";

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  width: 15rem;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
  margin: 1.5rem;
  border-radius: 5px;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 12.5rem;
  border-radius: 5px;
`;
const RecipeName = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: black;
  margin: 1rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Ingrediants = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #24ad11;
  padding: 0.5rem;
  border-radius: 0.3rem;
  color: #24ad11;
`;
const RecipeInfo = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #ff9100;
  color: #ff9100;
  padding: 0.5rem;
  border-radius: 0.3rem;
  margin: 1rem 0rem;
  cursor: pointer;
  
`;
const SeeMoreText = styled.span`
  color: #24ad11 ;
  font-size: 1rem;
  text-align: center;
  border: solid 1px #24ad11;
  border-radius: 3px;
  padding: 0.6rem 1rem;
  cursor: pointer;
`;
const CloseModal = styled.span`
color: #ff0000;
font-weight: bold;
font-size: 1rem;
text-align: center;
border: solid 1px #ff0000;
border-radius: 3px;
padding: 0.6rem 1rem;
cursor: pointer;
`;

const MovieComponent = ({ recipeObj }) => {
  const [show, setShow] = useState(false)
 
  const { image, label, ingredients,url } = recipeObj;

  return (
    <>
    <Dialog open={show}>
      <DialogTitle>Ingrediants</DialogTitle>
      <DialogContent>
          <table>
            <thead>
              <th>Ingrediants</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {ingredients.map((ingObj) => <tr>
                <td>{ingObj.text}</td>
                <td>{ingObj.weight}</td>

              </tr> ) }
              
            </tbody>
          </table>
          <DialogActions>
          <SeeMoreText onClick={()=> window.open(url)}>See More</SeeMoreText>
          <CloseModal onClick={()=> setShow(false)}>Close</CloseModal>
          

        </DialogActions>
        </DialogContent>

    </Dialog>
    <RecipeContainer  >
      <CoverImage  src={image} onClick={()=> setShow(true)} ></CoverImage>
      <RecipeName>{label}</RecipeName>
      <Ingrediants onClick={()=> setShow(true)}>Ingrediants</Ingrediants>
      <RecipeInfo onClick={() => window.open(url)}>
        See Complete Recipe
      </RecipeInfo>
    </RecipeContainer>
    </>
  );
};
export default MovieComponent;
