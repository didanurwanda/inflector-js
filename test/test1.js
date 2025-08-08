import {
  pluralize,
  singularize,
  camelize,
  underscore,
  humanize,
  capitalize,
  dasherize,
  camel2words,
  demodulize,
  tableize,
  classify,
  foreignKey,
  ordinalize
} from '../dist/index.js';

console.log('--- Inflector Tests ---');

console.log('pluralize("person") =>', pluralize('person'));
console.log('singularize("people") =>', singularize('people'));
console.log('camelize("message_properties") =>', camelize('message_properties'));
console.log('camelize("message_properties", true) =>', camelize('message_properties', true));
console.log('underscore("MessageProperties") =>', underscore('MessageProperties'));
console.log('humanize("message_properties") =>', humanize('message_properties'));
console.log('humanize("message_properties", true) =>', humanize('message_properties', true));
console.log('capitalize("message properties") =>', capitalize('message properties'));
console.log('dasherize("message_properties") =>', dasherize('message_properties'));
console.log('dasherize("message properties") =>', dasherize('message properties'));
console.log('camel2words("message_properties") =>', camel2words('message_properties'));
console.log('camel2words("Message_propertyId", true) =>', camel2words('Message_propertyId', true));
console.log('demodulize("Message::Bus::Properties") =>', demodulize('Message::Bus::Properties'));
console.log('tableize("MessageBusProperty") =>', tableize('MessageBusProperty'));
console.log('classify("message_bus_properties") =>', classify('message_bus_properties'));
console.log('foreignKey("MessageBusProperty") =>', foreignKey('MessageBusProperty'));
console.log('foreignKey("MessageBusProperty", true) =>', foreignKey('MessageBusProperty', true));
console.log('ordinalize("the 1 pitch") =>', ordinalize('the 1 pitch'));
