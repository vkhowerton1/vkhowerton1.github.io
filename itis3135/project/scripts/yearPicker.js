$(function () {
    $("#datePicker").datepicker({
      changeMonth: true,
      changeYear: true,
      showButtonPanel: true,
      dateFormat: 'mm/dd/yy',
      yearRange: "1950:2025",

      onClose: function (dateText, inst) {
        var selectedDate = $(this).datepicker('getDate');
  
        if (selectedDate) {
          $(this).val($.datepicker.formatDate('mm/dd/yy', selectedDate));
        }
      }
    });
  
    $("#datePicker").focus(function () {
      $(".ui-datepicker-month").show();
    });
  });
  