from twilio.rest import Client

# Your Account SID from twilio.com/console
account_sid = "AC231ceb4f5282bfa4cdfcc6f486b4bee4"
# Your Auth Token from twilio.com/console
auth_token  = "f680eccf495a572b6b862bb00284f8a6"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+17875088505", 
    from_="+12073863925",
    body="Hello from Devin and from Twilio")

print(message.sid)
