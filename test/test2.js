import Inflector from '../dist/index.js';

console.log('--- Inflector Tests ---');

console.log('pluralize("person") =>', Inflector.pluralize('person'));
console.log('singularize("people") =>', Inflector.singularize('people'));
console.log('camelize("message_properties") =>', Inflector.camelize('message_properties'));
console.log('camelize("message_properties", true) =>', Inflector.camelize('message_properties', true));
console.log('underscore("MessageProperties") =>', Inflector.underscore('MessageProperties'));
console.log('humanize("message_properties") =>', Inflector.humanize('message_properties'));
console.log('humanize("message_properties", true) =>', Inflector.humanize('message_properties', true));
console.log('capitalize("message properties") =>', Inflector.capitalize('message properties'));
console.log('dasherize("message_properties") =>', Inflector.dasherize('message_properties'));
console.log('dasherize("message properties") =>', Inflector.dasherize('message properties'));
console.log('camel2words("message_properties") =>', Inflector.camel2words('message_properties'));
console.log('camel2words("Message_propertyId", true) =>', Inflector.camel2words('Message_propertyId', true));
console.log('demodulize("Message::Bus::Properties") =>', Inflector.demodulize('Message::Bus::Properties'));
console.log('tableize("MessageBusProperty") =>', Inflector.tableize('MessageBusProperty'));
console.log('classify("message_bus_properties") =>', Inflector.classify('message_bus_properties'));
console.log('foreignKey("MessageBusProperty") =>', Inflector.foreignKey('MessageBusProperty'));
console.log('foreignKey("MessageBusProperty", true) =>', Inflector.foreignKey('MessageBusProperty', true));
console.log('ordinalize("the 1 pitch") =>', Inflector.ordinalize('the 1 pitch'));
