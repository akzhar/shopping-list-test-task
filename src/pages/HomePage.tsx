import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@components/Button';
import Description from '@components/Description';
import { AppRoutes } from '@consts/const';

const ListPage: React.FC = () => (
  <>
    <h1>Список покупок</h1>
    <Link to={AppRoutes.LIST}>
      <Button text="К списку покупок" isAnimate />
    </Link>
    <Description />
  </>
);

export default ListPage;


