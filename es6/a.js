function* getId() {
    value = 0;
    while (true) {
      value++;
      yield value;
    }
  }
  
  const id = getId()
  id.next().value
  id.next().value
  id.next().value