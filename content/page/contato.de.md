---
title: "Kontakt"
#linktitle: kontakt
description: weil... Ja natürlich...
#date: 2017-12-01T04:52:03+01:00
#authors: [gasparsantos]
slug: kontakt
menu: 
  - sidebar
weight: 200
draft: false
---
{{< rawhtml >}}
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>E-Mail: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Nachricht: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Senden</button>
  </p>
</form>
{{< /rawhtml >}}
