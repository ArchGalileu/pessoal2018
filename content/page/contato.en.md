---
title: "Contact"
#linktitle: Contact
description: because... yes of course...
#date: 2017-12-01T04:52:03+01:00
#authors: [gasparsantos]
slug: contact
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
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
{{< /rawhtml >}}
