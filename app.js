//BUDGET CONTROLLER
const budgetController = (function() {

})();

//UI CONTROLLER
const UIController = (function() {

})();

//GLOBAL APP CONTROLLER
const controller =(function(budgetCtrl, UICtrl) {
  const ctrlAddItem = function() {
    // 1. get the input data

    // 2. add item to budget controller

    // 3. add new item to UI

    //4. Calculate the budget

    //5. Display the budget on UI
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  })

})(budgetController, UIController);