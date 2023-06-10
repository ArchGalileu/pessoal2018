---
title: "Contato"
#linktitle:
description: porque... sim claro...
#date: 2017-12-01T04:52:03+01:00
#authors: [gasparsantos]
slug: contato
menu: 
  - sidebar
weight: 200
draft: false
showReadingTime: false
---
{{< rawhtml >}}
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Nome: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Mensagem: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Enviar</button>
  </p>
</form>
{{< /rawhtml >}}
