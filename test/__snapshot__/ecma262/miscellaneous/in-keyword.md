# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
let tests = [
  // objects on RHS
  function() {
    ('foo' in {});
    ('foo' in { foo: null });
    (0 in {});
    (0 in { "0": null });
  },

  // arrays on RHS
  function() {
    ('foo' in []);
    (0 in []);
    ('length' in []);
  },

  // primitive classes on RHS
  function() {
    ('foo' in new String('bar'));
    ('foo' in new Number(123));
  },
   // primitives on RHS
  function() {
    ('foo' in 123); // error
    ('foo' in 'bar'); // error
    ('foo' in void 0); // error
    ('foo' in null); // error
  },

  // bogus stuff on LHS
  function() {
    (null in {}); // error
    (void 0 in {}); // error
    ({} in {}); // error
    ([] in {}); // error
    (false in []); // error
  },

  // in predicates
  function() {
    if ('foo' in 123) {} // error
    if (!'foo' in {}) {} // error, !'foo' is a boolean
    if (!('foo' in {})) {}
  },

  // annotations on RHS
  function(x: Object, y: mixed) {
    ('foo' in x); // ok
    ('foo' in y); // error
  },
]
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "tests",
                            "rawText": "tests",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 44
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 45
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 54,
                                                                    "end": 59
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 59,
                                                                    "end": 62
                                                                },
                                                                "right": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 64,
                                                                        "end": 64
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 62,
                                                                    "end": 65
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 54,
                                                                "end": 65
                                                            },
                                                            "flags": 48,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 66
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 48,
                                                        "end": 67
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 73,
                                                                    "end": 78
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 78,
                                                                    "end": 81
                                                                },
                                                                "right": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "foo",
                                                                                    "rawText": "foo",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 83,
                                                                                    "end": 87
                                                                                },
                                                                                "right": {
                                                                                    "kind": 138477575,
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 88,
                                                                                    "end": 93
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 128,
                                                                                "start": 83,
                                                                                "end": 93
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 83,
                                                                        "end": 93
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 81,
                                                                    "end": 95
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 73,
                                                                "end": 95
                                                            },
                                                            "flags": 67,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 96
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 67,
                                                        "end": 97
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392130,
                                                                    "text": 0,
                                                                    "rawText": "0",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 103,
                                                                    "end": 104
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 104,
                                                                    "end": 107
                                                                },
                                                                "right": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 109,
                                                                        "end": 109
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 107,
                                                                    "end": 110
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 5120,
                                                                "start": 103,
                                                                "end": 110
                                                            },
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 111
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 97,
                                                        "end": 112
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392130,
                                                                    "text": 0,
                                                                    "rawText": "0",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 118,
                                                                    "end": 119
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 119,
                                                                    "end": 122
                                                                },
                                                                "right": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 201392131,
                                                                                    "text": "0",
                                                                                    "rawText": "\"0\"",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 124,
                                                                                    "end": 128
                                                                                },
                                                                                "right": {
                                                                                    "kind": 138477575,
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 129,
                                                                                    "end": 134
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 128,
                                                                                "start": 124,
                                                                                "end": 134
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 124,
                                                                        "end": 134
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 122,
                                                                    "end": 136
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 5120,
                                                                "start": 118,
                                                                "end": 136
                                                            },
                                                            "flags": 112,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 137
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 112,
                                                        "end": 138
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 138
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 46,
                                            "end": 142
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 142
                                    },
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 143,
                                            "end": 174
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 175,
                                            "end": 175
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 184,
                                                                    "end": 189
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 189,
                                                                    "end": 192
                                                                },
                                                                "right": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 194,
                                                                        "end": 194
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 8,
                                                                    "start": 192,
                                                                    "end": 195
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 184,
                                                                "end": 195
                                                            },
                                                            "flags": 178,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 196
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 178,
                                                        "end": 197
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392130,
                                                                    "text": 0,
                                                                    "rawText": "0",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 203,
                                                                    "end": 204
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 204,
                                                                    "end": 207
                                                                },
                                                                "right": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 209,
                                                                        "end": 209
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 8,
                                                                    "start": 207,
                                                                    "end": 210
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 5120,
                                                                "start": 203,
                                                                "end": 210
                                                            },
                                                            "flags": 197,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 211
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 197,
                                                        "end": 212
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "length",
                                                                    "rawText": "'length'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 218,
                                                                    "end": 226
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 226,
                                                                    "end": 229
                                                                },
                                                                "right": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 231,
                                                                        "end": 231
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 8,
                                                                    "start": 229,
                                                                    "end": 232
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 218,
                                                                "end": 232
                                                            },
                                                            "flags": 212,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 233
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 212,
                                                        "end": 234
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 178,
                                                "end": 234
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 176,
                                            "end": 238
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 143,
                                        "end": 238
                                    },
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 239,
                                            "end": 281
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 282,
                                            "end": 282
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 291,
                                                                    "end": 296
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 296,
                                                                    "end": 299
                                                                },
                                                                "right": {
                                                                    "kind": 210,
                                                                    "newKeyword": {
                                                                        "kind": 138477661,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 299,
                                                                        "end": 303
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "String",
                                                                        "rawText": "String",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 303,
                                                                        "end": 310
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392131,
                                                                                "text": "bar",
                                                                                "rawText": "'bar'",
                                                                                "flags": 4194400,
                                                                                "transformFlags": 0,
                                                                                "start": 311,
                                                                                "end": 316
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 311,
                                                                        "end": 316
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 2048,
                                                                    "start": 299,
                                                                    "end": 317
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 291,
                                                                "end": 317
                                                            },
                                                            "flags": 285,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 318
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 285,
                                                        "end": 319
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 325,
                                                                    "end": 330
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 330,
                                                                    "end": 333
                                                                },
                                                                "right": {
                                                                    "kind": 210,
                                                                    "newKeyword": {
                                                                        "kind": 138477661,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 333,
                                                                        "end": 337
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "Number",
                                                                        "rawText": "Number",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 337,
                                                                        "end": 344
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 123,
                                                                                "rawText": "123",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 345,
                                                                                "end": 348
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 345,
                                                                        "end": 348
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 2048,
                                                                    "start": 333,
                                                                    "end": 349
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 325,
                                                                "end": 349
                                                            },
                                                            "flags": 319,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 350
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 319,
                                                        "end": 351
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 285,
                                                "end": 351
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 283,
                                            "end": 355
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 239,
                                        "end": 355
                                    },
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 356,
                                            "end": 391
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 392,
                                            "end": 392
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 401,
                                                                    "end": 406
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 406,
                                                                    "end": 409
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 123,
                                                                    "rawText": "123",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 409,
                                                                    "end": 413
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 401,
                                                                "end": 413
                                                            },
                                                            "flags": 395,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 414
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 395,
                                                        "end": 415
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 430,
                                                                    "end": 435
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 435,
                                                                    "end": 438
                                                                },
                                                                "right": {
                                                                    "kind": 201392131,
                                                                    "text": "bar",
                                                                    "rawText": "'bar'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 438,
                                                                    "end": 444
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 430,
                                                                "end": 444
                                                            },
                                                            "flags": 415,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 445
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 415,
                                                        "end": 446
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 461,
                                                                    "end": 466
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 466,
                                                                    "end": 469
                                                                },
                                                                "right": {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 138477615,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 469,
                                                                        "end": 474
                                                                    },
                                                                    "operand": {
                                                                        "kind": 201392130,
                                                                        "text": 0,
                                                                        "rawText": "0",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 474,
                                                                        "end": 476
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 1024,
                                                                    "start": 469,
                                                                    "end": 476
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 461,
                                                                "end": 476
                                                            },
                                                            "flags": 446,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 477
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 446,
                                                        "end": 478
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 493,
                                                                    "end": 498
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 498,
                                                                    "end": 501
                                                                },
                                                                "right": {
                                                                    "kind": 138477575,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 501,
                                                                    "end": 506
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 493,
                                                                "end": 506
                                                            },
                                                            "flags": 478,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 507
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 478,
                                                        "end": 508
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 395,
                                                "end": 508
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 393,
                                            "end": 521
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 356,
                                        "end": 521
                                    },
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 522,
                                            "end": 558
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 559,
                                            "end": 559
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 138477575,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 568,
                                                                    "end": 572
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 572,
                                                                    "end": 575
                                                                },
                                                                "right": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 577,
                                                                        "end": 577
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 575,
                                                                    "end": 578
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 5120,
                                                                "start": 568,
                                                                "end": 578
                                                            },
                                                            "flags": 562,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 579
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 562,
                                                        "end": 580
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 138477615,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 595,
                                                                        "end": 599
                                                                    },
                                                                    "operand": {
                                                                        "kind": 201392130,
                                                                        "text": 0,
                                                                        "rawText": "0",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 599,
                                                                        "end": 601
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 1024,
                                                                    "start": 595,
                                                                    "end": 601
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 601,
                                                                    "end": 604
                                                                },
                                                                "right": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 606,
                                                                        "end": 606
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 604,
                                                                    "end": 607
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 5120,
                                                                "start": 595,
                                                                "end": 607
                                                            },
                                                            "flags": 580,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 608
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 580,
                                                        "end": 609
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 625,
                                                                        "end": 625
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 624,
                                                                    "end": 626
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 626,
                                                                    "end": 629
                                                                },
                                                                "right": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 631,
                                                                        "end": 631
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 629,
                                                                    "end": 632
                                                                },
                                                                "flags": 48,
                                                                "transformFlags": 5120,
                                                                "start": 609,
                                                                "end": 632
                                                            },
                                                            "flags": 609,
                                                            "transformFlags": 0,
                                                            "start": 35,
                                                            "end": 633
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 609,
                                                        "end": 634
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 650,
                                                                        "end": 650
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 8,
                                                                    "start": 649,
                                                                    "end": 651
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 651,
                                                                    "end": 654
                                                                },
                                                                "right": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 656,
                                                                        "end": 656
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 654,
                                                                    "end": 657
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 5120,
                                                                "start": 634,
                                                                "end": 657
                                                            },
                                                            "flags": 634,
                                                            "transformFlags": 0,
                                                            "start": 35,
                                                            "end": 658
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 634,
                                                        "end": 659
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 205586437,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 674,
                                                                    "end": 679
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 679,
                                                                    "end": 682
                                                                },
                                                                "right": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 684,
                                                                        "end": 684
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 8,
                                                                    "start": 682,
                                                                    "end": 685
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 5120,
                                                                "start": 674,
                                                                "end": 685
                                                            },
                                                            "flags": 659,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 686
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 659,
                                                        "end": 687
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 562,
                                                "end": 687
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 560,
                                            "end": 700
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 522,
                                        "end": 700
                                    },
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 701,
                                            "end": 732
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 733,
                                            "end": 733
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 164,
                                                        "ifKeyword": {
                                                            "kind": 37757019,
                                                            "flags": 81,
                                                            "transformFlags": 0,
                                                            "start": 736,
                                                            "end": 743
                                                        },
                                                        "expression": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "'foo'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 745,
                                                                "end": 750
                                                            },
                                                            "operatorToken": {
                                                                "kind": 21006388,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 750,
                                                                "end": 753
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 123,
                                                                "rawText": "123",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 753,
                                                                "end": 757
                                                            },
                                                            "flags": 4194400,
                                                            "transformFlags": 5120,
                                                            "start": 745,
                                                            "end": 757
                                                        },
                                                        "consequent": {
                                                            "kind": 124,
                                                            "block": {
                                                                "kind": 249,
                                                                "statements": [],
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 760,
                                                                "end": 760
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 758,
                                                            "end": 761
                                                        },
                                                        "elseKeyword": null,
                                                        "alternate": null,
                                                        "flags": 81,
                                                        "transformFlags": 0,
                                                        "start": 736,
                                                        "end": 761
                                                    },
                                                    {
                                                        "kind": 164,
                                                        "ifKeyword": {
                                                            "kind": 37757019,
                                                            "flags": 81,
                                                            "transformFlags": 0,
                                                            "start": 761,
                                                            "end": 777
                                                        },
                                                        "expression": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 126,
                                                                "operandToken": {
                                                                    "kind": 65584,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 779,
                                                                    "end": 780
                                                                },
                                                                "operand": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 780,
                                                                    "end": 785
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 1024,
                                                                "start": 779,
                                                                "end": 785
                                                            },
                                                            "operatorToken": {
                                                                "kind": 21006388,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 785,
                                                                "end": 788
                                                            },
                                                            "right": {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [],
                                                                    "trailingComma": false,
                                                                    "flags": 16,
                                                                    "transformFlags": 0,
                                                                    "start": 790,
                                                                    "end": 790
                                                                },
                                                                "flags": 48,
                                                                "transformFlags": 8,
                                                                "start": 788,
                                                                "end": 791
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 5120,
                                                            "start": 779,
                                                            "end": 791
                                                        },
                                                        "consequent": {
                                                            "kind": 124,
                                                            "block": {
                                                                "kind": 249,
                                                                "statements": [],
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 794,
                                                                "end": 794
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 792,
                                                            "end": 795
                                                        },
                                                        "elseKeyword": null,
                                                        "alternate": null,
                                                        "flags": 81,
                                                        "transformFlags": 0,
                                                        "start": 761,
                                                        "end": 795
                                                    },
                                                    {
                                                        "kind": 164,
                                                        "ifKeyword": {
                                                            "kind": 37757019,
                                                            "flags": 81,
                                                            "transformFlags": 0,
                                                            "start": 795,
                                                            "end": 832
                                                        },
                                                        "expression": {
                                                            "kind": 126,
                                                            "operandToken": {
                                                                "kind": 65584,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 834,
                                                                "end": 835
                                                            },
                                                            "operand": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 198,
                                                                    "left": {
                                                                        "kind": 201392131,
                                                                        "text": "foo",
                                                                        "rawText": "'foo'",
                                                                        "flags": 4194400,
                                                                        "transformFlags": 0,
                                                                        "start": 836,
                                                                        "end": 841
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 21006388,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 841,
                                                                        "end": 844
                                                                    },
                                                                    "right": {
                                                                        "kind": 220,
                                                                        "propertyList": {
                                                                            "kind": 218,
                                                                            "properties": [],
                                                                            "trailingComma": false,
                                                                            "flags": 16,
                                                                            "transformFlags": 0,
                                                                            "start": 846,
                                                                            "end": 846
                                                                        },
                                                                        "flags": 48,
                                                                        "transformFlags": 8,
                                                                        "start": 844,
                                                                        "end": 847
                                                                    },
                                                                    "flags": 4194400,
                                                                    "transformFlags": 5120,
                                                                    "start": 836,
                                                                    "end": 847
                                                                },
                                                                "flags": 835,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 848
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 1024,
                                                            "start": 834,
                                                            "end": 848
                                                        },
                                                        "consequent": {
                                                            "kind": 124,
                                                            "block": {
                                                                "kind": 249,
                                                                "statements": [],
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 851,
                                                                "end": 851
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 849,
                                                            "end": 852
                                                        },
                                                        "elseKeyword": null,
                                                        "alternate": null,
                                                        "flags": 81,
                                                        "transformFlags": 0,
                                                        "start": 795,
                                                        "end": 852
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 736,
                                                "end": 852
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 734,
                                            "end": 856
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 701,
                                        "end": 856
                                    },
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 857,
                                            "end": 893
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 894,
                                                        "end": 895
                                                    },
                                                    "optionalToken": null,
                                                    "type": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "Object",
                                                                "rawText": "Object",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 896,
                                                                "end": 903
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 896,
                                                            "end": 903
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 896,
                                                        "end": 903
                                                    },
                                                    "right": null,
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 894,
                                                    "end": 903
                                                },
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 904,
                                                        "end": 906
                                                    },
                                                    "optionalToken": null,
                                                    "type": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "mixed",
                                                                "rawText": "mixed",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 907,
                                                                "end": 913
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 907,
                                                            "end": 913
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 907,
                                                        "end": 913
                                                    },
                                                    "right": null,
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 904,
                                                    "end": 913
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 894,
                                            "end": 913
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 922,
                                                                    "end": 927
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 927,
                                                                    "end": 930
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 930,
                                                                    "end": 932
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 922,
                                                                "end": 932
                                                            },
                                                            "flags": 916,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 933
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 916,
                                                        "end": 934
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "'foo'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 946,
                                                                    "end": 951
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 951,
                                                                    "end": 954
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 954,
                                                                    "end": 956
                                                                },
                                                                "flags": 4194400,
                                                                "transformFlags": 5120,
                                                                "start": 946,
                                                                "end": 956
                                                            },
                                                            "flags": 934,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 957
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 934,
                                                        "end": 958
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 916,
                                                "end": 958
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 914,
                                            "end": 971
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 857,
                                        "end": 971
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 972
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 11,
                            "end": 974
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 974
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 974
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 974
        }
    ],
    "isModule": true,
    "source": "let tests = [\n  // objects on RHS\n  function() {\n    ('foo' in {});\n    ('foo' in { foo: null });\n    (0 in {});\n    (0 in { \"0\": null });\n  },\n\n  // arrays on RHS\n  function() {\n    ('foo' in []);\n    (0 in []);\n    ('length' in []);\n  },\n\n  // primitive classes on RHS\n  function() {\n    ('foo' in new String('bar'));\n    ('foo' in new Number(123));\n  },\n   // primitives on RHS\n  function() {\n    ('foo' in 123); // error\n    ('foo' in 'bar'); // error\n    ('foo' in void 0); // error\n    ('foo' in null); // error\n  },\n\n  // bogus stuff on LHS\n  function() {\n    (null in {}); // error\n    (void 0 in {}); // error\n    ({} in {}); // error\n    ([] in {}); // error\n    (false in []); // error\n  },\n\n  // in predicates\n  function() {\n    if ('foo' in 123) {} // error\n    if (!'foo' in {}) {} // error, !'foo' is a boolean\n    if (!('foo' in {})) {}\n  },\n\n  // annotations on RHS\n  function(x: Object, y: mixed) {\n    ('foo' in x); // ok\n    ('foo' in y); // error\n  },\n]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 974
}
```

### Printed

```javascript
let tests = [function () {
      ("'foo'" in {});
      ("'foo'" in { foo: null });
      (0 in {});
      (0 in { "\"0\"": null });
    }, function () {
      ("'foo'" in []);
      (0 in []);
      ("'length'" in []);
    }, function () {
      ("'foo'" in new String("'bar'"));
      ("'foo'" in new Number(123));
    }, function () {
      ("'foo'" in 123);
      ("'foo'" in "'bar'");
      ("'foo'" in void 0);
      ("'foo'" in null);
    }, function () {
      (null in {});
      (void 0 in {});
      ({} in {});
      ([] in {});
      (false in []);
    }, function () {
      if ("'foo'" in 123) {}
      if (!"'foo'" in {}) {}
      if (!("'foo'" in {})) {}
    }, function (x: Object, y: mixed) {
      ("'foo'" in x);
      ("'foo'" in y);
    },];
```

### Diagnostics

```javascript
✔ No errors
```

