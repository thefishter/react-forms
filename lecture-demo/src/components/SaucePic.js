import React from 'react';

const backgroundImg = (sauce) => ({backgroundImage : `url(./src/assets/${sauce}.gif`})

export default ({sauce}) => (
	<div className="sauce-img" style={backgroundImg(sauce)}></div>
)