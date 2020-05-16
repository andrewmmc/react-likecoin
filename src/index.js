import React from 'react';
import { string } from 'prop-types';
import Iframe from 'iframe-resizer-react';

const LikeCoin = ({ userId, referrer, style = {} }) => {
  const currentUrl = referrer || window.location.href;
  return (
    <Iframe
      src={`//button.like.co/in/embed/${userId}/button?type=wp&referrer=${currentUrl}`}
      inPageLinks
      checkOrigin={['//button.like.co']}
      style={{ border: 0, margin: 0, ...style }}
    />
  );
};

LikeCoin.propTypes = {
  userId: string.isRequired,
  referrer: string.isRequired,
};

export default LikeCoin;
