import { firebaseDB } from '../../config/firebase';


const Buynow = async(data,currentUser) => {
  try{
      let uid = currentUser.uid;
      let documentobject = await firebaseDB.collection("users").doc(uid).get();
      let documentdata = documentobject.data();
      let documentnameofproduct = documentdata.productPurchasedName;

      for(let i=0;i<documentnameofproduct.length;i++){
        if(documentnameofproduct[i] == data){
          return;
        }
      }
      
      
      let countofproductsarray = documentdata.countofproducts;
      let countdata = countofproductsarray[countofproductsarray.length-1];
      let finalcount = countdata + 1;
      documentdata.countofproducts.push(finalcount);

      documentdata.productPurchasedName.push(data);
      await firebaseDB.collection("users").doc(uid).set(documentdata);
      }
      catch(err){
        console.log("failed to push");
      }
}
 
export default Buynow;