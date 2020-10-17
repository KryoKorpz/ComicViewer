import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios
    .get('http://localhost:5120/comics')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

const Comics = () => {
    const [imageRender, setImageRender] = useState('');
    const [loading, setLoading] = useState(true);

    let decodedImage;
    const loadImage = async () => {
        try {
            decodedImage = await axios
                .post(
                    'http://localhost:5120/comic/page',
                    {
                        requestedComic: 'comic1',
                        requestedPage: 'Page-01.jpg',
                    },
                    {
                        responseType: 'arraybuffer',
                    },
                )
                .then(function (response) {
                    const base64 = btoa(
                        new Uint8Array(response.data).reduce(
                            (data, byte) => data + String.fromCharCode(byte),
                            '',
                        ),
                    );
                    setLoading(false);
                    return 'data:;base64,' + base64;
                })
                return decodedImage

        }
            catch (error) {
                // handle error
                return console.log(error);
            };
    };

    useEffect(() => {
        const resolved = loadImage()
        console.log(resolved)
        return setImageRender(resolved);
    }, [loading]);
    // const loadedImage = loadImage()
    // const imageRendered = loadImage();
    // console.log(imageRender);
    // console.log(imageRendered);
    return (
        <div>
            <img src={imageRender} alt="" className="img-responsive" />
            <Link to={'/comics/comicName'}> Comic Name </Link>;
        </div>
    );
};
export default Comics;
