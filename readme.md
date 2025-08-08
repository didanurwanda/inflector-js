# INFLECTOR-JS

A tiny utility for pluralizing, singularizing, and formatting English words — perfect for code and labels.

## Installation

### Install via NPM

```
npm install inflector-js
```

### Manual Download

[Last Release](https://github.com/didanurwanda/inflector-js/releases)

## How to use

Node JS
### Common JS

```js
var Inflector = require('inflector-js')
```

### ESM
```js
import Inflector from 'inflector-js';
console.log(Inflector.camelize('message_properties'))

import { humanize } from 'inflector-js';
console.log(humanize('message_properties'))
```
### Browser
```html
<script type="text/javascript" src="assets/inflector-js/dist/index.global.js"></script>

console.log(Inflector.camelize('message_properties'));
```

## API

* pluralize

```

Inflector.pluralize('person')           -> 'people'
Inflector.pluralize('octopus')          -> 'octopi'
Inflector.pluralize('Hat')              -> 'Hats'
Inflector.pluralize('person', 'guys')   -> 'guys' 

```

* singularize

```
Inflector.singularize('person')         -> 'person'
Inflector.singularize('octopi')         -> 'octopus'
Inflector.singularize('hats')           -> 'hat'
Inflector.singularize('guys', 'person') -> 'person'
```

* camelize

```
Inflector.camelize('message_properties')        -> 'MessageProperties'
Inflector.camelize('message_properties', true)  -> 'messageProperties'
```

* underscore

```
Inflector.underscore('MessageProperties')       -> 'message_properties'
Inflector.underscore('messageProperties')       -> 'message_properties'
```

* humanize

```
Inflector.humanize('message_properties')        -> 'Message properties'
Inflector.humanize('message_properties')        -> 'message properties'
```

* capitalize

```
Inflector.capitalize('message_properties')      -> 'Message_properties'
Inflector.capitalize('message properties')      -> 'Message properties'
```

* dasherize

```
Inflector.dasherize('message_properties')       -> 'message-properties'
Inflector.dasherize('message properties')       -> 'message-properties'
```

* camel2words

```
Inflector.camel2words('message_properties')         -> 'Message Properties'
Inflector.camel2words('message properties')         -> 'Message Properties'
Inflector.camel2words('Message_propertyId', true)   -> 'Message Properties Id'
```

* demodulize

```
Inflector.demodulize('Message::Bus::Properties')    -> 'Properties'
```

* tableize

```
Inflector.tableize('MessageBusProperty')    -> 'message_bus_properties'
```

* classify

```
Inflector.classify('message_bus_properties')    -> 'MessageBusProperty'
```

* foreignKey

```
Inflector.foreignKey('MessageBusProperty')       -> 'message_bus_property_id'
Inflector.foreignKey('MessageBusProperty', true) -> 'message_bus_propertyid'
```

* ordinalize

```
Inflector.ordinalize('the 1 pitch')     -> 'the 1st pitch'
```

## Author

Created and maintained by **Dida Nurwanda**  
[didanurwanda@gmail.com](mailto:didanurwanda@gmail.com)

---

## License

This project is licensed under the **MIT**. See the [LICENSE](./LICENSE) file for more details.
