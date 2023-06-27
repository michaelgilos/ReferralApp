
### Technical assessment for the position of Senior Mobile Engineer
----
Task: Referral Builder
Our design/UX team has put together a layout for an app, Referral Builder, to allow entering user personal details on our site. Please
refer to the Figma file below.
Interview-Test-Referral-Form
Based on this design:
build the Referral Builder mobile app
create a simple REST API Microservice using NodeJs, that would allow creating and reading Referrals.[POST, GET]. Utilize a
Database.
Referral creation should communicate with a separate service to indicate the successful Referral creation
Requirements
· Upon referral creation the list of referrals should be updated ( on the 2nd page)
· The Create button should function to call the Create Referral API endpoint
· The app should be responsive for different screen widths
Guidelines
· Use React Native/React as a base library. Feel free to use any related library to complete this task
· We are interested in your coding style and how you solve problems. To this end, please include your source code and any build
steps / explanations / set up instructions we may need to test the submission
· Please structure the code for reusability

###(this took around 6 hours to setup and complete)

Backend API
----
Getting the referrals
curl --request GET \
  --url http://localhost:1337/referrals \
  --header 'Content-Type: application/json'

Create referral
`curl --request POST \
  --url http://localhost:1337/referrals \
  --header 'Content-Type: application/json' \
  --data '{
		"firstname": "Dark King",
		"lastname": "Reighly",
		"email": "dk@test.com",
		"mobile": "0436-283-1234",
		"address1": null,
		"address2": null,
		"suburb": null,
		"state": null,
		"postcode": null,
		"country": null
	}'`
----

### How do I start the app?

Start with 
1 `yarn install` to install the dependencies
2 `npx react-native run-ios` or `npx react-native run-android` to run the app
3 run the server `yarn server`

NOTE: This has only been tested in android.
Before running app in android emulator or real device
1. run `adb devices`
2. 
List of devices attached
R58M601C0XF     device
emulator-5554   device
3. map the ports
$ adb -s emulator-5554 reverse tcp:1337 tcp:1337
$ adb -s R58M601C0XF reverse tcp:1337 tcp:1337 
