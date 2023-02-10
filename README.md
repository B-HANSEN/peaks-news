# The Peaks News App

### Available Scripts

In the project directory, you can run:

```shell
npm install
```

In src/utility/endpoint.js, please provide your API_KEY to address the endpoint from guardianapis.com.

## npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

## Information and status update about pages

### Home Page

Reference made to the titles and subtitles under the Article thumbnail. 'webTitle' and 'headline' should be used here as per test instructions. Please refer to below Article Page info for details regarding implementation.

Deviating from Figma design, I had to tweak the css to align the cards and texts.

### Article Page

As per instructions, (3) Article Title should refer to API Reference 'webTitle' and (4) Article Headline should refer to 'headline'. Retrieving the headline by adding 'show-fields' in the query, the endpoint provides the same value.
To not show repititions in the UI, I am using the 'trailtext' instead to create somewhat of an article subtitle.

Furthermore, the wireframes show BST as timezone. The JS-function recognised BST not as 'British Summer Time' but as 'Bangladesh Standard Time'.
To not show a deviation of +6 hours, GMT is rendered instead.

Snackbars indicate whether the article was added or removed as bookmark and the button text conditionally renders as well.

### Bookmark Page

Using the browser's local storage to persist the bookmarks.
Pending: functionality for sorter

### Search Results Page

Pending: implementation
