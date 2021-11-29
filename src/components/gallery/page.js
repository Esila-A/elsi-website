import { useParams } from "react-router-dom";
import { getDownloadURL, getStorage, list, ref } from "firebase/storage";
import {useEffect, useState} from "react";

const Page = () => {

    let {galleryName} = useParams();

    let [files, setFiles] = useState();
    let [error, setError] = useState();

    useEffect(async () => {
        try {
            const pix = await getPictures()
            setFiles(pix)
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

    if (!files && !error)
        return <>
            <div className="page">
                <p className="infoMessage">ŁADOWANIE</p>
            </div>
        </>

    if (files.length === 0)
        return  (
            <div className="page">
                <p className="infoMessage">NIE MA TAKIEJ STRONY</p>
            </div>
        )

    async function getPictures() {
        const storage = getStorage()
        const listRef = ref(storage, galleryName)

        const files = await list(listRef)
        return await Promise.all(files.items.map(e => getDownloadURL(e)))
    }

    return (
        <div className="page">
            {files.map(e => <img src={e} alt="" key={e} className="image" />)}
        </div>
    )
}

export default Page;
