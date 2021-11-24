import { storage } from "../firebase";

// Get all the images from Storage
const [files, setFiles] = useState();

useEffect(() => {
    const fetchImages = async () => {
        let result = await storage.ref().child("gs://bro-s-website.appspot.com").listAll();
        let urlPromises = result.items.map((imageRef) =>
            imageRef.getDownloadURL()
        );

        return Promise.all(urlPromises);
    };

    const loadImages = async () => {
        const urls = await fetchImages();
        setFiles(urls);
    };
    loadImages();
}, []);


const Gallery = () => {
    return (
        <div className="gallery">

        </div>
    )
}

export default Gallery;
