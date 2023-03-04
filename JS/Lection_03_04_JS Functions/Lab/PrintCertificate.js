function printCertificate(grade, studentNames) {

  if (grade < 3.0) {
    console.log("Student does not qualify");
  } else {
    printHeader();
    printMain(studentNames);
    printFooter(grade);
  }

  function printHeader() {
    console.log("~~~-   {@}   -~~~");
    console.log("~- Certificate -~");
    console.log("~~~-  ~---~  -~~~");
  }

  function printMain(names) {
    console.log(names.join(" "));
  }

  function printFooter(grade) {
    let result;
    if (grade >= 3.0 && grade < 3.5) {
      result = `Poor (${grade.toFixed(2)})`;
    } else if (grade >= 3.5 && grade < 4.5) {
      result = `Good (${grade.toFixed(2)})`;
    } else if (grade >= 4.5 && grade < 5.5) {
      result = `Very good (${grade.toFixed(2)})`;
    } else if (grade >= 5.5) {
      result = `Excellent (${grade.toFixed(2)})`;
    }
    console.log(result);
  }
}

printCertificate(5.25, ['Peter', 'Carter']);
