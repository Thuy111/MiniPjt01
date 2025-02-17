$(document).ready(function () {
  // 검색 기능###################################################################################
  $('#question').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('#faq *').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  // 아코디언 컨텐츠 내용########################################################################
  let dataCache = {};  // 각 카테고리별 데이터를 저장할 객체
  let visibleItems = {};  // 각 카테고리별로 표시할 항목의 개수
  let totalItems = {};    // 각 카테고리별 총 항목 개수

  // JSON 데이터 불러오기
  function loadCategoryData(tabNumber) {
    let categoryFile = `../data/faq_category${tabNumber < 10 ? '0' : ''}${tabNumber}.json`;
    $.getJSON(categoryFile, function (data) {
      dataCache[tabNumber] = data;
      totalItems[tabNumber] = data.length;
      visibleItems[tabNumber] = 10;  // 기본적으로 10개 항목을 보여줌
      loadItems(tabNumber);
    }).fail(function () {
      console.error(`탭 ${tabNumber} 데이터 로드 실패`);
    });
  }

  // 데이터 로드 함수
  function loadItems(tabNumber) {
    let faqContainer = `#faq_container${tabNumber < 10 ? '0' : ''}${tabNumber}`;
    let loadMoreBtn = `#load_more${tabNumber}`; 

    let faqHtml = "";
    for (let i = 0; i < Math.min(visibleItems[tabNumber], totalItems[tabNumber]); i++) {
      let item = dataCache[tabNumber][i];

      if (!item.subcategory) {
        faqHtml += `
          <div class="faq_content">
            <div id="content${tabNumber}-${i}">
              <a data-toggle="collapse" data-target="#collapse${tabNumber}-${i}" aria-expanded="false" aria-controls="collapse${tabNumber}-${i}">
              ${item.title}
              </a>
            </div>
            <div id="collapse${tabNumber}-${i}" class="collapse" aria-labelledby="content${tabNumber}-${i}" data-parent="${faqContainer}">
              ${item.content}
            </div>
          </div>`;
      } else {
        faqHtml += `
          <div class="faq_content">
            <div id="content${tabNumber}-${i}">
              <a data-toggle="collapse" data-target="#collapse${tabNumber}-${i}" aria-expanded="false" aria-controls="collapse${tabNumber}-${i}">
              [${item.subcategory}] ${item.title}
              </a>
            </div>
            <div id="collapse${tabNumber}-${i}" class="collapse" aria-labelledby="content${tabNumber}-${i}" data-parent="${faqContainer}">
              ${item.content}
            </div>
          </div>`;
      }
    }

    // HTML 업데이트
    $(faqContainer).html(faqHtml);

    // 더보기 버튼 표시/숨김 (데이터가 모두 로드된 경우 숨김)
    if (visibleItems[tabNumber] >= totalItems[tabNumber]) {      
      $(loadMoreBtn).hide();
    }
    else {
      $(loadMoreBtn).show();
    }
  }

  // 더보기 버튼 클릭 이벤트
  $(document).on('click', '[id^="load_more"]', function () {
    let tabNumber = $(this).attr('id').replace('load_more', '');
    
    if (!visibleItems[tabNumber] || !totalItems[tabNumber]) {
      console.error(`오류: ${tabNumber} 데이터가 존재하지 않음!`);
      return;
    }

    visibleItems[tabNumber] += 10;  // 10개씩 추가
    loadItems(tabNumber);
  });

  // 탭 변경 시 데이터 로드
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    let targetTab = $(e.target).attr("href").replace('#category', '');
    let tabNumber = targetTab;
    if (!dataCache[tabNumber] && $(this).closest('li').find('.active').length > 0) {
      loadCategoryData(tabNumber);
    }
  });

  // 초기 로드
  for (let i = 1; i <= 14; i++) {
    loadCategoryData(i);  // 1번부터 14번까지의 탭 데이터 로드
  }
});
