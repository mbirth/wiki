---
created: 2016-12-12 17:04:02 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2016/12/12/outlook-2016-with-exchange-2007.html
tags:
- know-how
- software
- windows
- outlook
- exchange
title: Outlook 2016 with Exchange 2007
toc: false
updated: 2016-12-12 17:04:02 +0100
---

In Outlook 2016, you can't setup an account from an Exchange 2007 server without
having autodiscover setup correctly. The *Manual Setup* only offers "Exchange
ActiveSync" which doesn't work with the 2007 Exchange. (The working method is
named "Microsoft Exchange".)

Usually, for an email address `account@example.org`, Outlook 2016 will look for
`https://autodiscover.example.org/autodiscover/autodiscover.xml`. If that DNS
entry isn't configured or there's no `autodiscover.xml` at that address, the
account setup in Outlook will fail.

However, there are [a few ways](https://www.howto-outlook.com/howto/autodiscoverconfiguration.htm)
to override where Outlook is looking for that XML. The probably easiest one is
by adding a registry key to point to a local file containing the actual path to
the desired `autodiscover.xml`.

So, let's say, you can reach OWA via `https://mail.example.org/owa/`, then the
`autodiscover.xml` is `https://mail.example.org/autodiscover/autodiscover.xml`.

And you're trying to add an email address `john@company.com` which is managed by
that Exchange 2007 (and you can login to OWA just fine).

1. Create a file `C:\autodiscover.xml` with the following contents:

        <?xml version="1.0" encoding="utf-8" ?>
        <Autodiscover xmlns="http://schemas.microsoft.com/exchange/autodiscover/responseschema/2006">
          <Response xmlns="http://schemas.microsoft.com/exchange/autodiscover/outlook/responseschema/2006a">
            <Account>
              <AccountType>email</AccountType>
              <Action>redirectUrl</Action>
              <RedirectUrl>https://mail.example.org/autodiscover/autodiscover.xml</RedirectUrl>
            </Account>
          </Response>
        </Autodiscover>

2. Open **regedit** and navigate to the path `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\16.0\Outlook\AutoDiscover`
3. Add a new *String* (REG_SZ), name it `company.com` (the part after the `@` in your
   mail address) and assign the value `C:\autodiscover.xml` to it.
4. Done. Now open Outlook 2016 and add your account. It should work now.


*[OWA]: Outlook Web Access