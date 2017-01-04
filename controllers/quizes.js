/** Return the vocabList collection corresponing to the user 
 *
 * @param:  dbName - the name of the database to find the collection
 *			user -  the name of the user who owns the collection
 *			listName - the name of the collection
 *
 * @return: a collection
**/
function getCollection(dbName, user, listName){
	
}


/** Return the number of vocabularies stored in the vocabList collection
 *
 * @param:  collecion - a collection
 *
 * @return: a integer
**/
function getNumVocabs(collection){
	return collection.numVocabs;
}


/* Return n random vocabs in the collection 
 * @param:  collection - a collection
 *			size - the number of vocabularies needed
 *
 * @return: an array of randomly selected vocabs
*/
function randomOne(collection, size){
	var cSize = getNumVocabs(collection);
	var randInt = randInt(0, cSize, size);
}


/* Randomly generate an array of arbitrary numbers
 * 
 * @param:  minSize - the minimum number allowed
 *			maxSize - the maximum number allowed
 *			sampleSize - the number of numbers needs to be generated
 *
 * @return: an array of randomly generated integers
**/
function randInt(minSize, maxSize, sampleSize){

}