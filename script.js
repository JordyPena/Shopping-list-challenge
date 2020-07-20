//add items
//check items
//uncheck items
//remove items

// In terms of user experience, your shopping list app must allow users to:

// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

$(function(){
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const listItem = $('#shopping-list-entry').val();
  
    $('#shopping-list-entry').val('');


    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });

  $(".shopping-list").on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
   
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
   
  });

});