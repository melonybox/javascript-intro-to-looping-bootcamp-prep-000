function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if ( i === 0 ) {
      array.push("I am 1 strange loop.")
    }
      else {
        return "I am ${i} strange loops."
    }
  }
}