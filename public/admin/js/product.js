// Change Status
const buttonChangeStatus = document.querySelectorAll("[button-change-status]");
if (buttonChangeStatus.length > 0) {
  const formChangeStatus = document.querySelector("#form-change-status");
  const path = formChangeStatus.getAttribute("data-path");

  buttonChangeStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const statusCurrent = button.getAttribute("data-status");
      const id = button.getAttribute("data-id");

      let statusChange = statusCurrent == "active" ? "inactive" : "active";

      const action = path + `/${statusChange}/${id}?_method=PATCH`;
      formChangeStatus.action = action;

      formChangeStatus.submit();
    });
  });
}
// End Change Status

// Delete Item
const buttonDelete = document.querySelectorAll("[button-delete]");
if (buttonDelete.length > 0) {
  const urlParams = new URLSearchParams(window.location.search);
  const actionValue = urlParams.get("status");
  const formDeleteItem = document.querySelector("#form-delete-item");
  const inputActionType = document.querySelector("input[name=typeAction]");
  const path = formDeleteItem.getAttribute("data-path");

  buttonDelete.forEach((button) => {
    button.addEventListener("click", () => {
      const isConfirm = confirm(`Bạn có chắc muốn xóa sản phẩm này ${actionValue=="bin" ? "vĩnh viễn" : ""}?`);
      if (isConfirm) {
        const id = button.getAttribute("data-id");
        inputActionType.value = actionValue;
        const action = path + `/${id}?_method=DELETE`;
        formDeleteItem.action = action
        formDeleteItem.submit();
      }
    });
  });
}
// End Delete Item

// Restore Item
const buttonRestore = document.querySelectorAll("[button-restore]");

if(buttonRestore.length > 0) {
  const formRestoreItem = document.querySelector("#form-restore-item");
  const path = formRestoreItem.getAttribute("data-path");
  buttonRestore.forEach(button => {
    button.addEventListener("click", () => {
      const isConfirm = confirm("Bạn có chắc muốn khôi phục sản phẩm này?");
      if(isConfirm) {
        const id = button.getAttribute("data-id");
        const action = path + `/${id}?_method=PATCH`;
        formRestoreItem.action = action;
        formRestoreItem.submit();
      }
    })
  })
}
// Restore Item 
