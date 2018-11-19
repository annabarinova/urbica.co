import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Title from './Title';
import Text from './Text';
import Arrow from './Arrow';

const Block = (props) => {
  const {
    title,
    description,
    img,
    url,
  } = props;

  return (
    <Container img={img}>
      <Title to={url}>
        {title}
        <Arrow />
      </Title>
      <Text>{description}</Text>
    </Container>
  );
};

Block.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Block;
