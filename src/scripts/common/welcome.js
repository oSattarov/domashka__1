///////////  scroll  //////////// 



let scrollMenu = (function() {
  const $news = $(".news");
  const $item = $(".menu__item");
  const $wrapMenu = $(".wrap-menu");
  let positionArticle = [];
  let offsetHeight = 0; // верхнее смещение для скролла
  let flagAnimation = true;

  // выполняем расчет позиций для каждой статьи
  const _setPositionArticle = function(elements) {
    elements.each(function(item) {
      // $(this) = статья
      positionArticle[item] = {};
      positionArticle[item].top = $(this).offset().top - offsetHeight;
      positionArticle[item].bottom =
        positionArticle[item].top + $(this).innerHeight();

      
      console.log(positionArticle); // positionArticle массив объектов в верхним и нижним отступом
    });
  };

  const _scrollPageFixMenu = function(e) {
    let scroll = window.pageYOffset;
    if (scroll < $news.offset().top) {
      $wrapMenu.removeClass("fixed");
    } else {
      $wrapMenu.addClass("fixed");
    }

    // проверка на отступ сверху, если больше чем нужно ставим добавляем класс fixed
  };

  const _scrollPage = function(e) {
    const isFirstVision = function(element, current) {
      let scroll = window.pageYOffset;
      return (
        scroll >= element.top &&
        scroll < element.bottom &&
        !current.hasClass("menu__item--active")
      );

      
    };
    positionArticle.forEach((element, index) => {
      let $currentElement = $item.eq(index);
      if (isFirstVision(element, $currentElement)) {
        $currentElement
          .addClass("menu__item--active")
          .siblings()
          .removeClass("menu__item--active");
      }
    });
  };

  const _clickMenu = function(e) {
    if (flagAnimation) {
      flagAnimation = false;
      let $element = $(e.target);
      let index = $element.index();
      let sectionOffset = Math.ceil(positionArticle[index].top);
      $(document).off("scroll", _scrollPage);
      $element.siblings().removeClass("menu__item--active");

      $("body, html").animate({ scrollTop: sectionOffset }, 1000, () => {
        $element.addClass("menu__item--active");
        $(document).on("scroll", _scrollPage);
        flagAnimation = true;
      });
    }
  };

  const addListener = function() {
    $(window).one("load", function(e) {
      _setPositionArticle($news);
      $(".menu").on("click", _clickMenu);
      $(document).on("scroll", _scrollPage);
      $(document).on("scroll", _scrollPageFixMenu);
    });

    $(window).on("resize", function(e) {
      _setPositionArticle($news);
    });
  };

  return {
    init: addListener
  };
})();
  
scrollMenu.init();
  