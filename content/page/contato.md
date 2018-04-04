---
title: "Contato"
#linktitle:
description: porque... sim claro...
#date: 2017-12-01T04:52:03+01:00
#authors: [gasparsantos]
slug: contato
menu: main
weight: 200
draft: false
---
<form name="contact" method="POST" action="thank-you" netlify>
  <p>
    <label>Email: <input type="text" name="name"></label>
  </p>
  <p>
    <label>Mensagem: <textarea name="message"></textarea></label>
  </p>
  <div netlify-recaptcha></div>
  <p>
    <button type=”submit”>Enviar</button>
  </p>
</form>
