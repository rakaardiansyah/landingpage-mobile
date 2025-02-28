function swapFields() {
    var field1 = document.getElementById("field1").value;
    var field2 = document.getElementById("field2").value;
  
    // Swap values without using a temporary variable
    document.getElementById("field1").value = field2;
    document.getElementById("field2").value = field1;
}