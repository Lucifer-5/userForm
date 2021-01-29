var branchObject = {
  "CMPN": {
    "Sem1": ["Applied-Maths 1", "Applied-Phy 1", "Applied-Chem 1", "EVS"],
    "Sem2": ["Applied-Maths 2", "Applied-Phy 2", "Applied-Chem 2", "Communication Skills"],
    "Sem3": ["Data Structures", "Discrete Structures", "ECCF", "DLDA"]
  },
  "IT": {
    "Sem1": ["Applied-Maths 1", "Applied-Phy 1", "Applied-Chem 1", "EVS"],
    "Sem2": ["Applied-Maths 2", "Applied-Phy 2", "Applied-Chem 2", "Communication Skills"],
    "Sem3": ["Data Structures and Analysis", "Logic Design", "Database Management", "Principle of Communication"]
  }
}
window.onload = function() {
  var branchSel = document.getElementById("branch");
  var semSel = document.getElementById("sem");
  var subSel = document.getElementById("genDropdown");
  for (var x in branchObject) {
    branchSel.options[branchSel.options.length] = new Option(x, x);
  }
  branchSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    semSel.length = 1;
    subSel.length = 1;
    //display correct values
    for (var y in branchObject[this.value]) {
      semSel.options[semSel.options.length] = new Option(y, y);
    }
  }
  semSel.onchange = function() {
    //empty Chapters dropdown
    subSel.length = 1;
    //display correct values
    var z = branchObject[branchSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      subSel.options[subSel.options.length] = new Option(z[i], z[i]);
    }
  }
}
