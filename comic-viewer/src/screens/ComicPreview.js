import React from 'react';
import { Link } from 'react-router-dom';

const ComicPreview = () => {
    return <Link to={'/comics/comicName/page1'}> Page1 </Link>;
};

export default ComicPreview;