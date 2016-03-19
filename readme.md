# INFLECTOR-JS

Inflector pluralizes and singularizes English nouns. It also contains some other useful methods.

### Download

NPM

```
npm install inflector-js --save
```

BOWER

```
bower install inflector-js --save
```

or download [here](https://github.com/didanurwanda/inflector-js/archive/master.zip)

### How to use

Node JS

```JavaScript
var Inflector = require('inflector-js')
```

RequireJS

```JavaScript
define(['bower_components/inflector-js/index'], function(Inflector) {
    // your code
});
```

Manual

```
<script type="text/javascript" src="bower_components/inflector-js/index.js"></script>
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
Inflactor.camel2words('Message_propertyId', true)   -> 'Message Properties Id'
```

* demodulize

```
Inflector.demodulize('Message::Bus::Properties')    -> 'Properties'
```

* tabelize

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