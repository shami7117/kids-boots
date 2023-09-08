import { db } from "../../Firebase/firebase";
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    where,
    addDoc
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";



// Add New Favorite
const addFavorite = async (data) => {
    console.log("API data", data);
    const snapshot = collection(db, "Favorites");
    let q = query(snapshot, where("id", "==", data.id));
    const FavoriteExist = await getDocs(q);

    if (FavoriteExist.docs.length > 0) {
        return {
            message: "Favorite already exists!",
            code: 0,
        };
    } else {
        const dataToSet = {
            ...data,
            createdAt: new Date(), // Replace undefined with a valid timestamp or other appropriate value
        };

        // Use addDoc to add a new document to the collection
        const newDocRef = await addDoc(collection(db, "Favorites"), dataToSet);

        // Retrieve the newly added document to get its data and ID
        const res = await getDoc(newDocRef);

        return res.data()
            ? {
                data: { ...res.data(), id: res.id },
                message: "Favorite added successfully!",
                code: 1,
            }
            : {
                message: "Something went wrong!",
                code: 0,
            };
    }
};


// Delete Favorite
const deleteFavorite = async (id) => {
    try {
        // Get a reference to the document with the specified id
        const q = query(collection(db, 'Favorites'), where('id', '==', id));
        const querySnapshot = await getDocs(q);

        // Check if the document exists
        if (querySnapshot.size === 0) {
            console.error(`Document with id ${id} not found.`);
            return null; // or throw an error if appropriate
        }

        // Delete the document
        const docRef = querySnapshot.docs[0].ref;
        await deleteDoc(docRef);
        console.log(`Document with id ${id} has been deleted.`);
        return id;
    } catch (error) {
        console.error('Error deleting document:', error);
        throw error;
    }
};

const FavoriteApi = {
    addFavorite,
    deleteFavorite

};

export default FavoriteApi;
