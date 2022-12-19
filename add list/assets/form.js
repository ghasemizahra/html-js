$(document).ready(function () {

  // Add Row --------------------------------------------------
  $("#addRow").click(function () {
    markup = `<tr scope="row"><td><button type="button" class="btn btn-danger delete" id="delete"><span class="badge p-0"><i class="fa fa-trash-o fw-bold fs-5" aria-hidden="true"></i></span>Delete</button><button type="button" class="btn btn-primary clone" id="clone"><span class="badge p-0"><i class="fa fa-clone fw-bold fs-5" aria-hidden="true"></i></span>Clone</button></td><td><input type="text" class="form-control border border-secondary numInput" id="numInput"></td><td><input type="text" class="form-control border border-secondary typeInput" id="typeInput"></td><td><div class="pt-2"><input class="form-check-input radio-New" type="radio" id="radio-New"><label class="form-check-label">New</label><input class="form-check-input ms-4 radio-progress" type="radio" id="radio-progress"><label class="form-check-label">In progress</label><input class="form-check-input ms-4 radio-Confirm" type="radio" id="radio-Confirm"><label class="form-check-label">Confirmed</label></div></td></tr>`;
    tableBody = $("table tbody");
    tableBody.prepend(markup);
    let rowCount = $("#myTable tr").length - 1;
    $("#rowsNumber").text(rowCount);
  });

  // clone ---------------------------------------------------
  $(".clone").click(function () {
    $("table tbody").append(`<tr scope="row"><td><button type="button" class="btn btn-danger delete" id="delete"><span class="badge p-0"><i class="fa fa-trash-o fw-bold fs-5" aria-hidden="true"></i></span>Delete</button><button type="button" class="btn btn-primary clone" id="clone"><span class="badge p-0"><i class="fa fa-clone fw-bold fs-5" aria-hidden="true"></i></span>Clone</button></td><td><input type="text" class="form-control border border-secondary numInput" id="numInput"></td><td><input type="text" class="form-control border border-secondary typeInput" id="typeInput"></td><td><div class="pt-2"><input class="form-check-input radio-New" type="radio" id="radio-New"><label class="form-check-label">New</label><input class="form-check-input ms-4 radio-progress" type="radio" id="radio-progress"><label class="form-check-label">In progress</label><input class="form-check-input ms-4 radio-Confirm" type="radio" id="radio-Confirm"><label class="form-check-label">Confirmed</label></div></td></tr>`);
    let c = $("#myTable tr").length - 1;
    $("#rowsNumber").text(c);
  });

  // Delete Row ---------------------------------------------------
  $(".delete").click(function () {
    $(this).parent().parent().parent().remove();
    let temp = $("#myTable tr").length - 1;
    $("#rowsNumber").text(temp);
  });

  /// disabled input ------------------------------------------------------------
  $(".radio-Confirm").click(function () {
    if ($(this).prop("checked", true)) {
      $(".numInput").attr("disabled", "disabled");
      $(".typeInput").attr("disabled", "disabled");
    } else {
      $(".numInput").removeAttr("disabled");
      $(".typeInput").removeAttr("disabled");
    }
  });
});

/// notConfirmNumber --------------------------------------------------------
function notConfirmNumber() {
  let notConfirmed = 0;
  if ($(".radio-Confirm").prop("checked", false)) {
    notConfirmed++;
  }
  $(".notConfirmNumber").text(notConfirmed);
}
notConfirmNumber();
