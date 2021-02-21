# Reflection
## Inspiration
“Describe yourself in three words.” A question asked by college applications, job interviews, and icebreakers. However, when put on the spot, we tend to blank out. We do not want anyone to be held back from reaching new opportunities. Instead of randomly searching for adjectives on various websites, we were inspired to create a website to not only discover your traits but also act as a journal prompt, that way you can always update your “words” to choose from. We want to use these words to connect people with similar traits. This is how we can amplify the voices of everyday people by reflecting our actions and noticing what change needs to occur within ourselves. 

## What it does
We created Reflection as a source to locate specific words for you to describe yourself in any situation. This is extremely important today, because we need to self-reflect and understand our actions. The user can pick one choice from the 3 by 3 grid that relates to them the most. The selected word will become the new highlighted word and will be surrounded by new words that are similar to it. We use a word-finding query engine API to help us select related words. The user can save the selected word so that they don’t lose the perfect word that describes themself. However, some saved words may not actually be best on further reflection, so we offer the option to delete words. After all, this self-reflection is not a one time thing. These traits and actions can connect us to other similar people which would be done with creating accounts and a community.


## How we built it

We used the DataMuse API to generate synonyms of the user’s selected word. jQuery was used to request DataMuse’s data. HTML, CSS, and JavaScript were utilized to create the Reflection webapp and implement the functionality of Reflection. 


## Challenges we ran into

Front-End Challenges: While we were able to create a website that helped users reflect about themselves, we were not able to implement a more social feature. We planned to create a place to upload our actions associated with certain traits. The user would have to essentially make a “polaroid” with a drawing or picture of their action/results and write a small description. Additionally, we struggled with asynchronous events within our javascript code.

Back-End Challenges: Our team did not have much experience with using an API, so we had a hard time understanding how to implement the word-finding query engine API and learning how to call methods. We used Fetch and XML before settling on jQuery. 

Through this process, we often had to go to the mentor for help, and we appreciate the support from the mentors. 

Unfortunately we had many changes in team members and lost their skill sets. However, we powered through and have a final project. 


## Accomplishments that we're proud of

-Making a website from scratch using HTML/CSS/Javascript
-Implementing the API and its methods for our usage
-An aesthetically pleasing website that encourages users to self-reflect 
-Providing synonyms of the words the user picked
-The ability to save and delete certain saved words

We have two first time hackathon team members in our group, both of which improved their skills drastically. Nitya and Tony used git for the first time, this was their first project that was not school related. Tony dedicated himself to learning how to use an API. Nitya learned how HTML, CSS, and Javascript interact with each other.


## What we learned

In these 36 hours, we gained a deeper understanding of how front end and back end overlap, how GitHub repositories function, how to implement API for our needs, and how HTML, CSS, and Javascript are related.


## What's next for Reflection
We plan to allow users to make accounts so that community members can interact with each other on the website or via other social media. This can be done through a database. We would also like to make the website more user friendly and professional. We will use the saved words for a question to get the user to think about the time they were the word they clicked on.

