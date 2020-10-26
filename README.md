# Description

Une bibliothèque javascript pour la gestion de vos bugs qui sont directement envoyés dans notre plateforme Jbugs-plateforme que vous pouvez visualisez via notre application mobile ou Web.

## Installation

```bash
npm install jsbug --save
```

## Usage

```bash
import {JsBug} from 'JBUG'

JsBug(JSON.stringify( {
      token:'your token'
    flag:'Bug trace',
    date_create:'DDMMYY',
    user:'User'
   }));

   JsBug({
    hostname: 'your hostname',
    port: your port,
    path: 'your path ressource',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      }
  },

    JSON.stringify( {
    token:'your token'
    flag:'Bug trace',
    date_create:'DDMMYY',
    user:'User'
   }));
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
[Kevin.Lukanga] ()
