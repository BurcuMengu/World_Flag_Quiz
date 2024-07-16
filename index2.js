<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flag Quiz</title>
  <link rel="stylesheet" href="/styles/main.css">
</head>

<body id="app">
  <form class="container" action="/submit" method="post">
    <div class="horizontal-container">
      <h3>
        Total Score:
        <span id="score">
          <%= locals.totalScore ? totalScore : "0" %>
        </span>
      </h3>

    </div>

    <img id="countryFlag" src=
      <%= question.countryCode %> >
   </img>
  
    <div class="answer-container">
      <input type="text" name="answer" id="userInput" placeholder="Name the country" autofocus autocomplete="off">

    </div>

    <button type="submit">SUBMIT<% if(locals.wasCorrect) { %>
        <span class="checkmark">✔</span>
        <% } else if (locals.wasCorrect === false) { %>
          <span class="cross" id="error">✖</span>
          <% } %>
    </button>

  </form>

  <script>
    var wasCorrect = "<%= locals.wasCorrect %>";
    console.log(wasCorrect)
    if (wasCorrect === "false") {
      alert('Game over! Final best score: <%= locals.totalScore %>');
      document.getElementById("app").innerHTML = '<a href="/" class="restart-button">Restart</a>'
    } else eklerisek
  </script>

</body>

</html>


