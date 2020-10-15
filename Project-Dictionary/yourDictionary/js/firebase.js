
//Dom
let db = firebase.firestore();
let $word_list = document.getElementById("word_list");
let $search = document.getElementById("search");
let $vieWord = document.getElementById("vieWord");
let $engWord = document.getElementById("engWord");
let $type = document.getElementById("type");


//Add
function addWord() {
  let a = prompt("Nhap tieng anh : ").toLowerCase();
  let b = prompt("Nhap tieng viet : ").toLowerCase();
  let c = prompt("Tu loai :");
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
    alert("Tu khong ton tai !")
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
  let $delete = prompt("Nhap tu muon xoa :");
  let index = 0, count =0;
  for (let i = 0; i < result.docs.length; i++) {
    if (z[i].anh == $delete) {
      index = z[i].id;
      count=3;
      break;
    }
  }
  if(count!= 3){
    window.alert("Tu khong ton tai !");
  }
  db.collection("Dictionary").doc(index).delete();
  window.alert("xoa thanh cong");
}

//Xoa toan bo
async function deleteAll() {
  let result = await db.collection("Dictionary").get();
  for (let doc of result.docs) {
    let del = db.collection("Dictionary").doc(doc.id).delete();
  }
  window.alert("Xoa thanh cong");
}

//Update
async function updateWord() {
  let index = 0, count = 0;
  let $update = prompt("Nhap tu tieng anh can sua :");
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
    let a = prompt("Nhap tu tieng anh moi :");
    let b = prompt("Nhap tu tieng viet moi :");
    let c = prompt("Nhap tu loai :");
    db.collection("Dictionary").doc(index).update({
      anh : a,
      viet : b,
      type : c
    });
  }
  else  {
    alert("Tu khong ton tai !");

  }
  
}

//Reload page
function reload(){
  location.reload();
}

