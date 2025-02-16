$(document).ready(function(){
  // 로딩시 -----------------------------------
  $.ajax({
    url: '/src/data/IR.json',
    type: 'GET',
    dataType: 'json',
    success: function(data){
      // console.log(data);
      let tbody_ir = '';
      // 10개만 불러오기
      for (let i = 0; i < 10; i++){
        tbody_ir += '<tr>';
        tbody_ir += '<td>' + data[i].id + '</td>';
        tbody_ir += '<td><a href="#">' + data[i].title + '</a></td>';
        tbody_ir += '<td><a href="#">' + data[i].file + '<i class="fa-solid fa-download"></i></a></td>';
        tbody_ir += '<td>' + data[i].date + '</td>';
        tbody_ir += '</tr>';
      }
      $('#tbody_ir')[0].innerHTML = tbody_ir;

      // 페이지네이션 버튼 -----------------------------
      const dataLength = data.length; // 데이터 총 길이
      const pages = Math.ceil(dataLength / 10); // 페이지 수
      let pagination = '';
      for(let i=0; i<pages; i++){
        if(i==0){
          pagination += '<li class="page-item active">' + (i+1) + '</li>';
        }else{pagination += '<li class="page-item">' + (i+1) + '</li>';}
      }
      $('ul.pagination')[0].innerHTML = pagination;

      // 페이지네이션 버튼에 클릭 이벤트 리스너 추가
      $('ul.pagination .page-item').on('click', pageBtn);
    },
    error: function(err){
      console.log(err);
    }
  })
});
// 페이지네이션 버튼 클릭시 -----------------------------------
function pageBtn(e){
  // 현재 페이지면 return (active 클래스가 있으면 return)
  if(e.target.classList.contains('active')){return;}

  const pageNum = e.target.innerText; // 클릭한 페이지 번호
  $('ul.pagination .page-item').removeClass('active'); // 모든 페이지 버튼 active 클래스 제거
  e.target.classList.add('active'); // 클릭한 페이지 버튼 active 클래스 추가
  
  $.ajax({
    url: '/src/data/IR.json',
    type: 'GET',
    dataType: 'json',
    success: function(data){
      let tbody_ir = '';
      // (pageNum-1)*10 부터
      // pgeaNum*10 까지
      for (let i = (pageNum-1)*10; i < pageNum*10; i++){
        // 출력하려는 페이지의 데이터가 10개 미만일 때 break
        // 즉, i(게시글 번호)가 데이터 총 길이보다 클 때 break
        if(i >= data.length){break;}

        tbody_ir += '<tr>';
        tbody_ir += '<td>' + data[i].id + '</td>';
        tbody_ir += '<td><a href="#">' + data[i].title + '</a></td>';
        tbody_ir += '<td><a href="#">' + data[i].file + '<i class="fa-solid fa-download"></i></a></td>';
        tbody_ir += '<td>' + data[i].date + '</td>';
        tbody_ir += '</tr>';
      }
      $('#tbody_ir')[0].innerHTML = tbody_ir;
    },
    error: function(err){
      console.log(err);
    }
  })
}