This app was built for a job interview. As a note to the interviewer, I made a few commits (Mar 17) after the deadline; this was because I wanted the app to be as complete as possible. Please feel free to ignore these commits in your judgement of this app.

In order to run this app you will need to do the following:

1) Install Node if you don't already have it. https://nodejs.org/en/download/
2) npm is bundled with Node so all you have to do now is `npm install` and `npm start`
3) The app can be found at localhost:3000.

Note: I had trouble fetching the JSON from S3 due to CORS so I downloaded the files and they are located in `src\settings.json` and `src\pets.json`. If you want to use a different data set you will have to overwrite the contents of the files.

# Instructions
You can click on 'Search', "Saved', or 'Settings' in order to navigate to that tab

## Search tab
Here you can see all the pets that are available for adoption, per the user's preferences (cat or dog, and an age range)

You can press the left arrow key to 'swipe left' to indicate that you are not interested in the pet and move on to
the next pet, or press the right arrow key to indicate that you are interested and add the pet to your list of saved pets

## Saved pets
Here you can see a list of all of the pets that you have saved. Scroll down to see the rest of them. There's not a lot of space for the details, so if you want to read more about a specific pet you can click anywhere on the box with the pet's information to go to a details page.

## Details
You can't navigate to this page through the navigation bar. In order to see the details for a specific pet you must go to the 'Saved' tab and click on the pet you would like to read more about. If you want to go back to the list of saved pets you can either click the 'Back' button in the top left or use the navigation bar.

## Settings
Here you can change your profile description, or update your pet preferences. Your changes are automatically saved when you change them, so no need to press Enter or a 'Save' button.

Enjoy.
