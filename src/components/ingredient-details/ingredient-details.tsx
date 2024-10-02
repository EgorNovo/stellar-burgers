import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Preloader, IngredientDetailsUI } from '@ui';
import { useSelector } from '@store';

export const IngredientDetails: FC = () => {
  const param = useParams();

  const { ingredients } = useSelector((state) => state.ingredients);
  const [ingredientData] = ingredients.filter((item) => item._id === param.id);

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
