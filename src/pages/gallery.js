import { NavLink } from "react-router-dom";
import { getDownloadURL, getStorage, list, ref } from "firebase/storage";
import {useEffect, useState} from "react";

async function getGallery() {
    const storage = getStorage()
    const listRef = ref(storage)

    const files = await list(listRef)
    const f = await Promise.all(files.prefixes.map(value => list(value)))

    const finalData = await Promise.all(
        f.map(async (folder, i) => ({
            name: files.prefixes[i]._location.path_,
            image: await getDownloadURL(folder.items[0]),
        }))
    )

    return finalData
}

const Gallery = () => {

    let [gallery, setGallery] = useState();
    let [error, setError] = useState();

    useEffect(async () => {
        try {
            const pix = await getGallery()
            setGallery(pix)
        } catch(e) {
            setError(e)
        }
    }, [])

    if (error)
        return <>
            <div className="page">
                <p className="infoMessage">BŁĄD</p>
            </div>
        </>

    if (!gallery && !error)
        return <>
            <div className="page">
                <p className="infoMessage">ŁADOWANIE</p>
            </div>
        </>

    return (
        <section className="gallery">

            {gallery.map (({name, image}) =>
                <div>
                    <NavLink to={"/gallery/"+name} className="link">
                        <div className="content">
                            <img src={image} alt="" className="image"/>
                            <h3>{name}</h3>
                        </div>
                    </NavLink>
                </div>
            )}
        </section>
    )
}

export default Gallery;
