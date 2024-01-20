/*search bar*/
function search_repository(){
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('box');

  for(i=0; i<x.length; i++){
    if(!x[i].innerHTML.toLowerCase().includes(input)){
      x[i].computedStyleMap.display = "none";
    }
    else{
      x[i].style.display =".share";
    }
  }
}
/*search bar end*/
const element = document.querySelector(".pagination ul");
let totalPages = 100;
let page = 10;

element.innerHTML = createPagination(totalPages, page);
 function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ 
    liTag += `<li onclick="createPagination(totalPages, ${page - 1})"><span>&laquo;</span></li>`;
  }  
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { 
      continue;
    }
    if (plength == 0) { 
      plength = plength + 1;
    }
    if(page == plength){ 
      active = "active";
    }else{ 
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }

  if(page < totalPages - 1){
    if(page < totalPages - 2){ 
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) { 
    liTag += `<li  onclick="createPagination(totalPages, ${page + 1})"><span>&raquo;</span></li>`;
  }
  element.innerHTML = liTag; 
  return liTag; 
}
