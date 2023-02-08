#### The Peaks News App

### Available Scripts

In the project directory, you can run:

## npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

Provide a .env file with a personal token for the Guardian website.

#### Information and status update about pages

### Home Page

Reference made to the first comment under Article Page. 'webTitle' and 'headline' should be used under the images. I had to tweak the css to align the cards and texts.
Otherwise, the Figma design seem contradictory. Both probably contributes to the imperfect design for the texts.

### Article Page

As per instructions, (3) Article Title should refer to API Reference 'webTitle' and (4) Article Headline should refer to 'headline'. Retrieving the headline by adding show-fields in the query, the endpoint provides the same value.
To not show repititions in the UI, I am using the 'trailtext' instead to create somewhat of an article subtitle.

Also the wireframes show BST as timezone. The JS-function recognised BST not as 'British Summer Time' but as 'Bangladesh Standard Time'.
To not show a deviation of +6 hours, the standard UTC is rendered instead.

Pending: ThePeaks logo for articles without thumbnails.

### Boomark Page

Pending: functionality for sorter

### Search Results Page

Pending: implementation
