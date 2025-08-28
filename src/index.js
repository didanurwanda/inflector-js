/**
 * Javascript inflector
 *
 * @author Dida Nurwanda <didanurwanda@gmail.com>
 * @since 1.0
 */

var Inflector = {
  uncountableWords: [
    'equipment',
    'information',
    'rice',
    'money',
    'species',
    'series',
    'fish',
    'sheep',
    'moose',
    'deer',
    'news',
  ],

  pluralRules: [
    [new RegExp('(m)an$', 'gi'), '$1en'],
    [new RegExp('(pe)rson$', 'gi'), '$1ople'],
    [new RegExp('(child)$', 'gi'), '$1ren'],
    [new RegExp('^(ox)$', 'gi'), '$1en'],
    [new RegExp('(ax|test)is$', 'gi'), '$1es'],
    [new RegExp('(octop|vir)us$', 'gi'), '$1i'],
    [new RegExp('(alias|status)$', 'gi'), '$1es'],
    [new RegExp('(bu)s$', 'gi'), '$1ses'],
    [new RegExp('(buffal|tomat|potat)o$', 'gi'), '$1oes'],
    [new RegExp('([ti])um$', 'gi'), '$1a'],
    [new RegExp('sis$', 'gi'), 'ses'],
    [new RegExp('(?:([^f])fe|([lr])f)$', 'gi'), '$1$2ves'],
    [new RegExp('(hive)$', 'gi'), '$1s'],
    [new RegExp('([^aeiouy]|qu)y$', 'gi'), '$1ies'],
    [new RegExp('(x|ch|ss|sh)$', 'gi'), '$1es'],
    [new RegExp('(matr|vert|ind)ix|ex$', 'gi'), '$1ices'],
    [new RegExp('([m|l])ouse$', 'gi'), '$1ice'],
    [new RegExp('(quiz)$', 'gi'), '$1zes'],
    [new RegExp('s$', 'gi'), 's'],
    [new RegExp('$', 'gi'), 's'],
  ],

  singularRules: [
    [new RegExp('(m)en$', 'gi'), '$1an'],
    [new RegExp('(pe)ople$', 'gi'), '$1rson'],
    [new RegExp('(child)ren$', 'gi'), '$1'],
    [new RegExp('([ti])a$', 'gi'), '$1um'],
    [
      new RegExp(
        '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$',
        'gi'
      ),
      '$1$2sis',
    ],
    [new RegExp('(hive)s$', 'gi'), '$1'],
    [new RegExp('(tive)s$', 'gi'), '$1'],
    [new RegExp('(curve)s$', 'gi'), '$1'],
    [new RegExp('([lr])ves$', 'gi'), '$1f'],
    [new RegExp('([^fo])ves$', 'gi'), '$1fe'],
    [new RegExp('([^aeiouy]|qu)ies$', 'gi'), '$1y'],
    [new RegExp('(s)eries$', 'gi'), '$1eries'],
    [new RegExp('(m)ovies$', 'gi'), '$1ovie'],
    [new RegExp('(x|ch|ss|sh)es$', 'gi'), '$1'],
    [new RegExp('([m|l])ice$', 'gi'), '$1ouse'],
    [new RegExp('(bus)es$', 'gi'), '$1'],
    [new RegExp('(o)es$', 'gi'), '$1'],
    [new RegExp('(shoe)s$', 'gi'), '$1'],
    [new RegExp('(cris|ax|test)es$', 'gi'), '$1is'],
    [new RegExp('(octop|vir)i$', 'gi'), '$1us'],
    [new RegExp('(alias|status)es$', 'gi'), '$1'],
    [new RegExp('^(ox)en', 'gi'), '$1'],
    [new RegExp('(vert|ind)ices$', 'gi'), '$1ex'],
    [new RegExp('(matr)ices$', 'gi'), '$1ix'],
    [new RegExp('(quiz)zes$', 'gi'), '$1'],
    [new RegExp('s$', 'gi'), ''],
  ],

  nonTitlecasedWords: [
    'and',
    'or',
    'nor',
    'a',
    'an',
    'the',
    'so',
    'but',
    'to',
    'of',
    'at',
    'by',
    'from',
    'into',
    'on',
    'onto',
    'off',
    'out',
    'in',
    'over',
    'with',
    'for',
  ],

  idSuffix: new RegExp('(_ids|_id)$', 'g'),
  underbar: new RegExp('_', 'g'),
  spaceOrUnderbar: new RegExp('[ _]', 'g'),

  applyRules: function (str, rules, skip, override) {
    if (override) {
      str = override;
    } else {
      var ignore = skip.indexOf(str.toLowerCase()) > -1;
      if (!ignore) {
        for (var x = 0; x < rules.length; x++) {
          if (str.match(rules[x][0])) {
            str = str.replace(rules[x][0], rules[x][1]);
            break;
          }
        }
      }
    }
    return str;
  },

  /**
   * Return the plural form of a word.
   *
   * @param {String} str
   * @param {String} [plural]
   * @return {String}
   * @example
   * Inflector.pluralize('person')           -> 'people'
   * Inflector.pluralize('octopus')          -> 'octopi'
   * Inflector.pluralize('Hat')              -> 'Hats'
   * Inflector.pluralize('person', 'guys')   -> 'guys'
   */
  pluralize: function (str, plural) {
    return Inflector.applyRules(
      str,
      Inflector.pluralRules,
      Inflector.uncountableWords,
      plural
    );
  },

  /**
   * Return the singular form of a word.
   *
   * @param {String} str
   * @param {String} [singular]
   * @return {String}
   * @example
   * Inflector.singularize('person')         -> 'person'
   * Inflector.singularize('octopi')         -> 'octopus'
   * Inflector.singularize('hats')           -> 'hat'
   * Inflector.singularize('guys', 'person') -> 'person'
   */
  singularize: function (str, singular) {
    return Inflector.applyRules(
      str,
      Inflector.singularRules,
      Inflector.uncountableWords,
      singular
    );
  },

  /**
   * Return the camelized form of a string.
   *
   * @param {String} str
   * @param {Boolean} [lowFirstLetter]
   * @return {String}
   * @example
   * Inflector.camelize('message_properties')        -> 'MessageProperties'
   * Inflector.camelize('message_properties', true)  -> 'messageProperties'
   */
  camelize: function (str, lowFirstLetter = false) {
    // var str = str.toLowerCase();
    str = str.replace(/\s+/g, '_'); // Ubah spasi jadi underscore

    var str_path = str.split('/');
    for (var i = 0; i < str_path.length; i++) {
      var str_arr = str_path[i].split('_');
      var initX = lowFirstLetter && i + 1 === str_path.length ? 1 : 0;
      for (var x = initX; x < str_arr.length; x++) {
        str_arr[x] =
          str_arr[x].charAt(0).toUpperCase() + str_arr[x].substring(1);
      }
      str_path[i] = str_arr.join('');
    }
    str = str_path.join('::');

    // fix
    if (lowFirstLetter === true) {
      var first = str.charAt(0).toLowerCase();
      var last = str.slice(1);
      str = first + last;
    }

    return str;
  },

  /*
   * Return the underscored form of a string.
   *
   * @param {String} str
   * @return {String}
   * @example
   * Inflector.underscore('MessageProperties')       -> 'message_properties'
   * Inflector.underscore('messageProperties')       -> 'message_properties'
   */
  underscore: function (str) {
    let withSpaces = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
    let cleaned = withSpaces.replace(/[^0-9a-zA-Z]/g, ' ');
    let formatted = cleaned.trim().replace(/\s+/g, '_');
    return formatted;
  },

  /**
   * Converts a string to a human-readable format.
   *
   * @param {String} str - The string to be humanized.
   * @param {Boolean} lowFirstLetter - If true, the first letter will remain lowercase.
   * @return {String} - The humanized string with words separated by spaces and optionally capitalized.
   * @example
   * Inflector.humanize('message_properties')        -> 'Message properties'
   * Inflector.humanize('message_properties', true)  -> 'message properties'
   */
  humanize: function (str, lowFirstLetter) {
    var str = str.toLowerCase();
    str = str.replace(Inflector.idSuffix, '');
    str = str.replace(Inflector.underbar, ' ');
    if (!lowFirstLetter) {
      str = Inflector.capitalize(str);
    }
    return str;
  },

  /**
   * Capitalizes the first letter of a string, converting the rest to lowercase.
   *
   * @param {String} str - The string to be capitalized.
   * @return {String} - The capitalized string with the first letter in uppercase and the rest in lowercase.
   * @example
   * Inflector.capitalize('message_properties') -> 'Message_properties'
   * Inflector.capitalize('message properties') -> 'Message properties'
   */
  capitalize: function (str) {
    var str = str.toLowerCase();
    str = str.substring(0, 1).toUpperCase() + str.substring(1);
    return str;
  },

  /**
   * Replaces spaces or underscores in a string with dashes.
   *
   * @param {String} str - The string to be transformed.
   * @return {String} - The transformed string with dashes instead of spaces or underscores.
   * @example
   * Inflector.dasherize('message_properties') -> 'message-properties'
   * Inflector.dasherize('message properties') -> 'message-properties'
   */
  dasherize: function (str) {
    str = str.replace(Inflector.spaceOrUnderbar, '-');
    return str;
  },

  /**
   * Converts a camelCase or snake_case string to a space-separated string with title-case words.
   *
   * @param {String} str - The input string to be transformed.
   * @param {Boolean} allFirstUpper - If true, converts the entire string to camelCase first,
   *                                  ensuring all words are capitalized.
   * @return {String} - The transformed string with words separated by spaces,
   *                    and optionally capitalized according to the given parameter.
   * @example
   * Inflector.camel2words('message_properties')         -> 'Message Properties'
   * Inflector.camel2words('message properties')         -> 'Message Properties'
   * Inflector.camel2words('Message_propertyId', true)   -> 'Message Properties Id'
   */
  camel2words: function (str, allFirstUpper) {
    //var str = str.toLowerCase();
    if (allFirstUpper === true) {
      str = Inflector.camelize(str);
      str = Inflector.underscore(str);
    } else {
      str = str.toLowerCase();
    }

    str = str.replace(Inflector.underbar, ' ');
    var str_arr = str.split(' ');
    for (var x = 0; x < str_arr.length; x++) {
      var d = str_arr[x].split('-');
      for (var i = 0; i < d.length; i++) {
        if (Inflector.nonTitlecasedWords.indexOf(d[i].toLowerCase()) < 0) {
          d[i] = Inflector.capitalize(d[i]);
        }
      }
      str_arr[x] = d.join('-');
    }
    str = str_arr.join(' ');
    str = str.substring(0, 1).toUpperCase() + str.substring(1);
    return str;
  },

  /**
   * Removes the module part of a qualified name.
   *
   * @param {String} str - The qualified name to be transformed.
   * @return {String} - The transformed string without the module part.
   * @example
   * Inflector.demodulize('Message::Bus::Properties')    -> 'Properties'
   */
  demodulize: function (str) {
    var str_arr = str.split('::');
    str = str_arr[str_arr.length - 1];
    return str;
  },

  /**
   * Converts a string to its table name form by underscoring and pluralizing it.
   *
   * @param {String} str - The class name to be converted.
   * @return {String} - The table name form of the class name.
   * @example
   * Inflector.tableize('MessageBusProperty') -> 'message_bus_properties'
   */
  tableize: function (str) {
    str = Inflector.pluralize(Inflector.underscore(str));
    return str;
  },

  /**
   * Converts a string to its camelCase form and then singularizes it.
   *
   * @param {String} str - The string to be converted.
   * @return {String} - The camelCase singularized string.
   * @example
   * Inflector.classify('message_bus_properties')    -> 'MessageBusProperty'
   */
  classify: function (str) {
    str = Inflector.singularize(Inflector.camelize(str));
    return str;
  },

  /**
   * Converts a class name to its foreign key form.
   *
   * @param {String} str - The class name to be converted.
   * @param {Boolean} [dropIdUbar] - Whether the _id suffix should be dropped.
   * @return {String} - The foreign key form of the class name.
   * @example
   * Inflector.foreignKey('MessageBusProperty')       -> 'message_bus_property_id'
   * Inflector.foreignKey('MessageBusProperty', true) -> 'message_bus_propertyid'
   */
  foreignKey: function (str, dropIdUbar) {
    str =
      Inflector.underscore(Inflector.demodulize(str)) +
      (dropIdUbar ? '' : '_') +
      'id';
    return str;
  },

  /**
   * Ordinalizes a given string.
   *
   * @param {String} str - The string to be ordinalized.
   * @return {String} - The ordinalized string.
   * @example
   * Inflector.ordinalize('the 1 pitch')     -> 'the 1st pitch'
   */
  ordinalize: function (str) {
    var str_arr = str.split(' ');
    for (var x = 0; x < str_arr.length; x++) {
      var i = parseInt(str_arr[x], 10);
      if (!Number.isNaN(i)) {
        var ltd = str_arr[x].slice(-2);
        var ld = str_arr[x].slice(-1);
        var suf = 'th';

        if (ltd !== '11' && ltd !== '12' && ltd !== '13') {
          if (ld === '1') {
            suf = 'st';
          } else if (ld === '2') {
            suf = 'nd';
          } else if (ld === '3') {
            suf = 'rd';
          }
        }

        str_arr[x] = str_arr[x] + suf;
      }
    }
    return str_arr.join(' ');
  },
};

export default Inflector;
export const pluralize = Inflector.pluralize;
export const singularize = Inflector.singularize;
export const camelize = Inflector.camelize;
export const underscore = Inflector.underscore;
export const humanize = Inflector.humanize;
export const capitalize = Inflector.capitalize;
export const dasherize = Inflector.dasherize;
export const camel2words = Inflector.camel2words;
export const demodulize = Inflector.demodulize;
export const tableize = Inflector.tableize;
export const classify = Inflector.classify;
export const foreignKey = Inflector.foreignKey;
export const ordinalize = Inflector.ordinalize;
