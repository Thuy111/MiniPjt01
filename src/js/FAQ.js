$(document).ready(function(){
  $('#question').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('#faq *').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  //  #####ajax로 아코디언 내용 추가하기#######################################################################################################################
  let dataCache1 = [], dataCache2 = [], dataCache3 = [], dataCache4 = [], 
      dataCache5 = [], dataCache6 = [], dataCache7 = [], dataCache8 = [], 
      dataCache9 = [], dataCache10 = [], dataCache11 = [], dataCache12 = [], 
      dataCache13 = [], dataCache14 = [];  // 14 개의 데이터 저장
  let visibleItems1 = 10, visibleItems2 = 10, visibleItems3 = 10, visibleItems4 = 10,
      visibleItems5 = 10, visibleItems6 = 10, visibleItems7 = 10, visibleItems8 = 10, 
      visibleItems9 = 10, visibleItems10 = 10, visibleItems11 = 10, visibleItems12 = 10, visibleItems13 = 10, visibleItems14 = 10;  // 처음 보여줄 개수
  let totalItems1 = 0, totalItems2 = 0, totalItems3 = 0, totalItems4 = 0, 
      totalItems5 = 0, totalItems6 = 0, totalItems7 = 0, totalItems8 = 0, 
      totalItems9 = 0, totalItems10 = 0, totalItems11 = 0, totalItems12 = 0, 
      totalItems13 = 0, totalItems14 = 0;  // 전체 항목 개수

  // JSON 데이터 불러오기(category 1)
  $.getJSON("../data/faq_category01.json", function (data) {
    dataCache1 = data;
    totalItems1 = data.length;
    loadItems(1);
  }).fail(function () {
    console.error("탭 1 데이터 로드 실패");
  });

  // JSON 데이터 불러오기(category 2)
  $.getJSON("../data/faq_category01.json", function (data) {
    dataCache2 = data;
    totalItems2 = data.length;
    loadItems(2); // 탭 2도 처음에 10개 로드
  }).fail(function () {
    console.error("탭 2 데이터 로드 실패");
  });

  // 데이터 로드 함수 (탭 번호에 따라 다르게 적용)
  function loadItems(tabNumber) {
    let dataCache = tabNumber === 1 ? dataCache1 : dataCache2;
    let visibleItems = tabNumber === 1 ? visibleItems1 : visibleItems2;
    let totalItems = tabNumber === 1 ? totalItems1 : totalItems2;
    let faqContainer = tabNumber === 1 ? "#faq_container01" : "#faq_container02";

    let faqHtml = "";
    for (let i = 0; i < Math.min(visibleItems, totalItems); i++) {
      let item = dataCache[i];

      faqHtml += `
      <div id="content${tabNumber}-${i}">
        <a data-toggle="collapse" data-target="#collapse${tabNumber}-${i}" aria-expanded="false" aria-controls="collapse${tabNumber}-${i}">
          ${item.title}
        </a>
      </div>
      <div id="collapse${tabNumber}-${i}" class="collapse" aria-labelledby="content${tabNumber}-${i}" data-parent="${faqContainer}">
        ${item.content}
      </div>`;
    }

    // HTML 업데이트
    $(faqContainer).html(faqHtml);

    // 더보기 버튼 표시/숨김
    let loadMoreBtn = tabNumber === 1 ? "#load_more01" : "#load_more02";
    if (visibleItems >= totalItems) {
      $(loadMoreBtn).hide();
    } else {
      $(loadMoreBtn).show();
    }
  }

  // 더보기 버튼 클릭 이벤트
  $("#load_more01").click(function () {
    visibleItems1 += 10;
    loadItems(1);
  });
  $("#load_more02").click(function () {
    visibleItems2 += 10;
    loadItems(2);
  });

  // 탭 변경 시 데이터 로드
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    let targetTab = $(e.target).attr("href"); // 현재 선택된 탭
    if (targetTab === "#category02" && dataCache2.length > 0 && $("#faq_container02").is(':empty')) {
      loadItems(2);
    }
  });
});