const refs = {
  // ====== mobile ======
  mobileMenuBackdrop: document.querySelector('.js-modal-moderator-backdrop'),
  mobileMenu: document.querySelector('.js-modal-moderator-menu'),
  mobileBtnOpen: document.querySelector('.js-modal-moderator-open-button'),
  mobileBtnClosed: document.querySelector('.js-modal-moderator-close-button'),

  // ====== cards table views ======
  showQuizzesCardsListBtnHeader: document.querySelector(
    '.js-quizzes-table-view-list .js-cards-view-btn'
  ),
  showQuizzesTableBtnHeader: document.querySelector(
    '.js-quizzes-table-view-list .js-table-view-btn'
  ),

  showQuizzesCardsListBtnFilters: document.querySelector(
    '.filter-button-views-container .js-cards-view-btn'
  ),
  showQuizzesTableBtnFilters: document.querySelector(
    '.filter-button-views-container .js-table-view-btn'
  ),

  quizzesCardsList: document.querySelector('.js-quizzes-list-cards'),
  quizzesTable: document.querySelector('.js-quizzes-list-table'),
  filtersCardsList: document.querySelector('.js-filter-button-views-container'),
  tableViewsButtons: document.querySelector('.js-quizzes-table-view-list'),
  cardsViewsButtonAndFilters: document.querySelector('.filter-button-views-container'),
  quizzesSortButton: document.querySelector('.quizzes-sort-button'),
};

// ====== MOBILE MENU ======
// refs.mobileBtnOpen.addEventListener('click', handleOpenMobileMenu);
// refs.mobileBtnClosed.addEventListener('click', handleCloseMobileMenu);
// refs.mobileMenuBackdrop.addEventListener('click', handleBackdropClick);

// function handleOpenMobileMenu() {
//   refs.mobileMenuBackdrop.classList.add('is-open');
//   refs.mobileMenu.classList.add('is-open');
//   disableScroll();

//   window.addEventListener('keydown', handleKeyDown);
// }

// function handleCloseMobileMenu(event) {
//   refs.mobileMenuBackdrop.classList.remove('is-open');
//   refs.mobileMenu.classList.remove('is-open');
//   enableScroll();

//   window.removeEventListener('keydown', handleKeyDown);
// }

// function handleBackdropClick(event) {
//   if (event.target === event.currentTarget) {
//     handleCloseMobileMenu();
//   }
// }

// function handleKeyDown(event) {
//   if (event.key === 'Escape') {
//     handleCloseMobileMenu();
//   }
// }

// function disableScroll() {
//   document.body.style.overflow = 'hidden';
// }

// function enableScroll() {
//   document.body.style.overflow = '';
// }

// ====== CARDS TABLE VIEW ======

refs.showQuizzesCardsListBtnHeader.addEventListener('click', handleShowCardsView);
refs.showQuizzesTableBtnHeader.addEventListener('click', handleShowTableView);

refs.showQuizzesCardsListBtnFilters.addEventListener('click', handleShowCardsView);
refs.showQuizzesTableBtnFilters.addEventListener('click', handleShowTableView);

window.addEventListener('DOMContentLoaded', () => {
  refs.quizzesCardsList.classList.remove('hidden');
  refs.quizzesTable.classList.add('hidden');

  refs.cardsViewsButtonAndFilters.classList.remove('hidden');
  refs.tableViewsButtons.classList.add('hidden');
  refs.quizzesSortButton.classList.add('hidden');
  refs.filtersCardsList.classList.remove('hidden');

  refs.showQuizzesCardsListBtnHeader.classList.add('active');
  refs.showQuizzesCardsListBtnFilters.classList.add('active');
  refs.showQuizzesTableBtnHeader.classList.remove('active');
  refs.showQuizzesTableBtnFilters.classList.remove('active');
});

function handleShowCardsView() {
  refs.quizzesCardsList.classList.remove('hidden');
  refs.quizzesTable.classList.add('hidden');

  refs.cardsViewsButtonAndFilters.classList.remove('hidden');
  refs.tableViewsButtons.classList.add('hidden');
  refs.quizzesSortButton.classList.add('hidden');

  refs.showQuizzesCardsListBtnHeader.classList.add('active');
  refs.showQuizzesTableBtnHeader.classList.remove('active');
  refs.showQuizzesCardsListBtnFilters.classList.add('active');
  refs.showQuizzesTableBtnFilters.classList.remove('active');
}

function handleShowTableView() {
  refs.quizzesTable.classList.remove('hidden');
  refs.quizzesCardsList.classList.add('hidden');

  refs.cardsViewsButtonAndFilters.classList.add('hidden');
  refs.tableViewsButtons.classList.remove('hidden');
  refs.quizzesSortButton.classList.remove('hidden');

  refs.showQuizzesTableBtnHeader.classList.add('active');
  refs.showQuizzesCardsListBtnHeader.classList.remove('active');
  refs.showQuizzesTableBtnFilters.classList.add('active');
  refs.showQuizzesCardsListBtnFilters.classList.remove('active');
}
