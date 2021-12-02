# BrokenAccessControl-CS437

Sabancı University CS437 Cybersecurity Practices and Applications - Assignment 1

(1) You are asked to implement a website where an attacker simply forces
browsers to target URLs. Admin rights are required for access to the admin
page (admin_getappInfo).
https://example.com/app/getappInfo
https://example.com/app/admin_getappInfo
If an unauthenticated user can access either page, it's a flaw.
If a non-admin (any user) can access the admin page, this is a flaw.(Python
Django application is preferred)
(Two different demonstration here for both unauthenticated user and
non-admin user)

(2) You are asked to write another version of the code that simply protects
the application for broken access control.(Python Django application is
preferred and a clear demonstration is needed)

(3) Set a Referrer policy
Browsers use the Referer header as a way to send information to a site
about how users got there. By setting a Referrer Policy you can help to
protect the privacy of your users, restricting under which circumstances the
Referer header is set.
Not allow any request without Referrer
