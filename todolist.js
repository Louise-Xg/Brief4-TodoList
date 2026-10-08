
// STEP 2:
const get_textinput = document.querySelector('input');
const get_Button = document.querySelector('button');
const get_list = document.querySelector('ul');

// STEPS 3 - 4 - 5:
get_Button.addEventListener("click", function () {
  add_item = document.createElement('li');
  add_item.textContent = get_textinput.value;
  get_list.appendChild(add_item);
});
