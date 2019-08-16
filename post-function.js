var xhr = new XMLHttpRequest();

xhr.open("POST", "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=3bb97111fc2b09ab6decac4244ed7c3b5ab550e7", true);
xhr.setRequestHeader("Content-Type", "form-data");
xhr.send(answer.json);