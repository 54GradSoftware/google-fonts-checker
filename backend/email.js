import aws from 'aws-sdk';

const ses = new aws.SES({region: "eu-central-1"});

export async function sendNotificationMail(usersMail) {
    console.log("Trying to send eMail");
    const targetEmail = 'info@illusion-factory.de';
    const params = {
        Source: targetEmail,
        Destination: {
            ToAddresses: [
                targetEmail
            ],
            BccAddresses: [
                // 'cha@christian-hartmann.de',
            ]
        },
        Message: {
            Subject: {
                Data: 'Google Fonts Checker used',
                Charset: 'UTF-8'
            },
            Body: {
                Text: {
                    Data: `Google Fonts Checker used by ${usersMail}`,
                    Charset: 'UTF-8'
                },
                Html: {
                    Data: `Google Fonts Checker used by ${usersMail}`,
                    Charset: 'UTF-8'
                }
            }
        }
    }
    try {
        await ses.sendEmail(params).promise();
        console.log(`Email sent to ${targetEmail}`);
    } catch (e) {
        console.error(e);
    }
}
