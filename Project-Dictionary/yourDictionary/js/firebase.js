
//Dom
let db = firebase.firestore();
let $word_list = document.getElementById("word_list");
let $search = document.getElementById("search");
let $vieWord = document.getElementById("vieWord");
let $engWord = document.getElementById("engWord");
let $type = document.getElementById("type");


//Add
function addWord() {
  let a = prompt("Fill english word : ").toLowerCase();
  let b = prompt("Fill vietnamses word : ").toLowerCase();
  let c = prompt("Fill type of word( V, N, Adj, ...) :");
  if(a == null || b== null || c==null){
    alert("Moi ban nhap lai !");
  } else{
    db.collection("Dictionary").add({ anh: a, viet: b, type : c });
  }
}

//Show list word

async function getWord() {
    let kk = "";

  let result = await db.collection("Dictionary").get();

  for(let i=0; i< result.docs.length; i++){
    kk+= "<li onclick='show("+i+")'>"+  result.docs[i].data().anh + "</li>";
  }

  $word_list.innerHTML = kk;
  
  }
getWord();


//Show definition
 async function show(i){
  let result = await db.collection("Dictionary").get();
  let z = result.docs.map(function (doc) {
    let data = doc.data();
    data.id = doc.id;
    return data;
  });
  $engWord.innerHTML = z[i].anh;
  $vieWord.innerHTML = z[i].viet;
  $type.innerHTML = z[i].type;

}

//Search
async function searchWord() {
  let count = 0;
  let result = await db.collection("Dictionary").get();
  let z = result.docs.map(function (doc) {
    let data = doc.data();
    data.id = doc.id;
    return data;
  });
  for (let i = 0; i < result.docs.length; i++) {
    if (z[i].anh == $search.value) {
      $engWord.innerHTML = z[i].anh;
      $vieWord.innerHTML = z[i].viet;
      $type.innerHTML = z[i].type;
      count = 3;
      break;
    }
  }
  if(count != 3){
    alert("Word is not found !")
  }
}

// Delete
async function deleteWord() {
  let result = await db.collection("Dictionary").get();
  let z = result.docs.map(function (doc) {
    let data = doc.data();
    data.id = doc.id;
    return data;
  });
  let $delete = prompt("Fill english word want to delete:");
  let index = 0, count =0;
  for (let i = 0; i < result.docs.length; i++) {
    if (z[i].anh == $delete) {
      index = z[i].id;
      count=3;
      break;
    }
  }
  if(count!= 3){
    window.alert("Word is not found !");
  }
  db.collection("Dictionary").doc(index).delete();
  window.alert("Delete successfully !");
}

//Xoa toan bo
async function deleteAll() {
  let result = await db.collection("Dictionary").get();
  for (let doc of result.docs) {
    let del = db.collection("Dictionary").doc(doc.id).delete();
  }
  window.alert("Delete successfully !");
}

//Update
async function updateWord() {
  let index = 0, count = 0;
  let $update = prompt("Fill english word to edit :");
  let result = await db.collection("Dictionary").get();
  let z = result.docs.map(function (doc) {
    let data = doc.data();
    data.id = doc.id;
    return data;
  });
  for (let i = 0; i < result.docs.length; i++) {
    if (z[i].anh == $update) {
      index = z[i].id;
      count =3 ;
      break;
    }
  }
  if(count == 3){
    let a = prompt("Fill new english word :");
    let b = prompt("Fill new vietnamses word :");
    let c = prompt("Fill new type :");
    db.collection("Dictionary").doc(index).update({
      anh : a,
      viet : b,
      type : c
    });
  }
  else  {
    alert("Word is not found !");

  }
  
}

//Reload page
function reload(){
  location.reload();
}

