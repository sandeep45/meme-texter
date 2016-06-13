npm install --save normalizr
npm install --save lodash
npm install --save autobind-decorator

setup loading of non fetched data on show page
componentWillMount() {
 loadData(this.props)
}

componentWillReceiveProps(nextProps) {
  if (nextProps.login !== this.props.login) {
    loadData(nextProps)
  }
}

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Pagination

Front end should only show what it desires to.
And it should be able to ask backend to give it more data when it desires so.

so front end says show page 2 with 10 per page.
now it should only show those records even if it has more in front end store.
if it has less it needs to fetch more.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

build mime builder

Phone Number
Text box, enter text (hash tag your emotion)

http://version1.api.memegenerator.net/


## Data FLow
1. User enters `to`, `text` & `tag`.
2. We call `updateMessage`. It also calls the `Generator Search` and gets back `variousImages` which is an array of `generator ids & image ids`. Geneate Preview Urls. All this is put in the store.
3. User clicks on a generated preview. We call the image creator, get the image, send it out via twilio and say sucess to the user, while showing the latest sent image.


## SEARCH
http://version1.api.memegenerator.net/Generators_Search?q=drink&pageIndex=0&pageSize=12
{
  "success": true,
  "result": [
    {
    "generatorID": 5753832,
    "displayName": "drink",
    "urlName": "Drink",
    "totalVotesScore": 0,
    "imageUrl": "https://cdn.meme.am/images/400x/14699288.jpg",
    "instancesCount": 3,
    "ranking": 123674
    },
    {
    "generatorID": 3466964,
    "displayName": "Kermit The Frog Drinking Tea",
    "urlName": "Kermit-The-Frog-Drinking-Tea",
    "totalVotesScore": 131,
    "imageUrl": "https://cdn.meme.am/images/400x/11590722.jpg",
    "instancesCount": 277585,
    "ranking": 40
    },
    {
    "generatorID": 1230327,
    "displayName": "drunk baby 1",
    "urlName": "Drunk-Baby-1",
    "totalVotesScore": 459,
    "imageUrl": "https://cdn.meme.am/images/400x/5188389.jpg",
    "instancesCount": 114512,
    "ranking": 57
    },
    {
    "generatorID": 1120481,
    "displayName": "high/drunk guy",
    "urlName": "HighDrunk-Guy",
    "totalVotesScore": 6,
    "imageUrl": "https://cdn.meme.am/images/400x/4802831.jpg",
    "instancesCount": 14048,
    "ranking": 484
    }
  ]
}

## Preview

https://cdn.meme.am/Instance/Preview?imageID=5188389&generatorTypeID=1230327&panels=&text0=we gonna&text1=drink tonight


http://version1.api.memegenerator.net/Instance_Create?username=sandeep45&password=123Mock123!&languageCode=en&text0=sandeep%20is&text1=testingiphone&imageID=10561365&generatorID=45

{
  "success": true,
  "result": {
    "generatorID": 45,
    "displayName": "Insanity Wolf",
    "urlName": "Insanity-Wolf",
    "totalVotesScore": 0,
    "imageUrl": "https://cdn.meme.am/images/400x/10561365.jpg",
    "instanceID": 68695018,
    "text0": "sandeep is",
    "text1": "testingiphone",
    "instanceImageUrl": "https://cdn.meme.am/instances/400x/68695018.jpg",
    "instanceUrl": "http://memegenerator.net/instance/68695018"
  }
}



140 characters
split on white space after 70 characters have passed


Send via twilio

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


MessageList
This shows all messages inbound and outbound.

MessageHistory
This shows all conversations with a person
