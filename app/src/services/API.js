export function getQuestions() {
    return fetch('http://localhost:4000/questions')
      .then(data => data.json())
  }