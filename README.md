## Bookmarker 

The **Bookmarker** feature allows users to easily store, manage, and search for their favorite websites. It offers a user-friendly interface for adding website details, saving them locally, and displaying them in a table. The bookmarks persist across page reloads, thanks to the use of `localStorage`. Below are the key functionalities provided:

### Features

1. **Add a Website**
   - Users can add a website by entering the **Website Name** and its **URL** into two input fields.
   - Once the user clicks the **Submit** button, the website details are saved in the browser’s `localStorage`, allowing the data to persist across sessions.
   - The newly added bookmark is also displayed immediately in a table on the page.

2. **Display Bookmarks in a Table**
   - The bookmarks are shown in a table format, displaying both the **Website Name** and the **URL**.
   - For each website entry, there are action buttons to **Visit**, **Update**, or **Delete** the bookmark.

3. **Visit a Website**
   - Each entry includes a **Visit** button, which opens the corresponding website in a new browser tab.
   - This allows users to quickly navigate to any of their saved websites without manually entering the URL.

4. **Update a Bookmark**
   - Users can update the details of any saved website. By clicking the **Update** button, the relevant website’s name and URL are populated back into the input fields, allowing the user to edit and save the changes.
   - Once updated, the changes are reflected both in the table and in `localStorage`.

5. **Delete a Bookmark**
   - A **Delete** button allows users to remove a bookmark from the list. Once deleted, the entry is removed from both the table and `localStorage`.

6. **Search for a Website**
   - A **Search** input field is provided, allowing users to search for websites by name. As the user types, the displayed table of bookmarks is filtered to only show matches based on the input.
   - This makes it easier to find specific bookmarks, especially when dealing with a large number of saved websites.44

  

### Example Usage:

1. **Adding a Bookmark:**
   - Enter a **Website Name** (e.g., "GitHub") and its **URL** (e.g., "https://github.com").
   - Click the **Submit** button, and the website will be saved and displayed in the table.

2. **Visiting a Bookmark:**
   - Click the **Visit** button next to a bookmark to open the website in a new tab.

3. **Updating a Bookmark:**
   - Click the **Update** button to modify the name or URL of a bookmark, edit the details in the input fields, and then save the changes.

4. **Deleting a Bookmark:**
   - Click the **Delete** button to remove a website from the table and `localStorage`.

5. **Searching for a Bookmark:**
   - Type into the **Search** field to filter the list of bookmarks by name and quickly find the one you’re looking for.

---

### Technologies
- Html
- Bootstrap 
- JavaScript 

---
This **Bookmarker Application** provides a simple yet effective way to manage websites, allowing users to store, modify, and search through their favorite bookmarks with ease. The use of `localStorage` ensures that bookmarks persist across page reloads.
