// tabs
document.querySelectorAll(".menu__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".menu__btn").forEach(function (btn) {
      btn.classList.remove("menu__btn_active");
    });
    e.currentTarget.classList.add("menu__btn_active");

    document.querySelectorAll(".content__wrapper").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("content__wrapper_active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("content__wrapper_active");
  });
});

// tooltip
tippy("#gas__div_1", {
  content: "Подача природного газа в компрессор",
});

tippy("#gas__div_2", {
  content: "Сжатие газа до 34,6 атм. Добавляется водород",
});

tippy("#gas__div_3", {
  content: "Сжатый природный газ поступает на подогрев в теплообменник (конвекционная часть печи) для превращения тяжелых углеводородов в метан",
});

tippy("#gas__div_4", {
  content: "За счет дымовых газов подогревается природный газ до температуры 371 градусов",
});

tippy("#gas__div_5", {
  content: "Происходит в 2 стадии. На 1 стадии молекулы перераспределяются. На 2 улавливаются молекулы сероводорода на сорбенте из оксида цинка. На выходе получаем природный газ без примесей серы",
});

tippy("#gas__div_6", {
  content: "26,5 атм природный газ смешивается с паром от теплообменника 2",
});

tippy("#gas__div_7", {
  content: "Пар подается в избытке для предотвращения отложений на катализаторе (Ni). Из СН4 получаем СО и Н2 (845 градусов)",
});

tippy("#gas__div_8", {
  content: "Нагретый газ охлаждается до температуры 340 градусов давление 24,5 атм, техническая вода подогревается и превращается в пар",
});

tippy("#gas__div_9", {
  content: "Получение дополнительного количества водорода экв. содержанию СО после конверсии 1. СО+Н2О=СО2+Н2. На входе 340 градусов 24,5 атм. На выходе 419 гр 24,15 атм",
});

tippy("#gas__div_10", {
  content: "Отделение влаги и охлаждение до 60 градусов водорода с небольшим количеством примесей (СО, СО2, СН4 непрореагир)",
});

tippy("#gas__div_11", {
  content: "(сорбент активир. уголь) улавливается СО2 и на выходе получается очищенный водород. На стадии регенерации сорбента происходит продувка частью водорода из парного блока",
});

tippy("#gas__div_12", {
  content: "Все примеси водорода, улавливающиеся на блоке КЦА направляются в горелки",
});

