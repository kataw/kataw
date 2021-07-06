# Kataw parser test case

## Input

`````js
const [one, two = null, three = null] = arr;
a = ([s=1,]) => 1
const { children, ...props } = this.props

const { user: { firstName, lastName } } = this.props;

const {
  name: { first, last },
  organisation: { address: { street: orgStreetAddress, postcode: orgPostcode } }
} = user;

function f({ data: { name } }) {}

const UserComponent = function({
  name: { first, last },
  organisation: { address: { street: orgStreetAddress, postcode: orgPostcode } },
}) {
  return
};

const { a, b, c, d: { e } } = someObject;

try {
  // code
} catch ({ data: { message }}) {
  // code
}

try {
  // code
} catch ({ data: { message: { errors }}}) {
  // code
}

const obj = {
  func(id, { blog: { title } }) {
    return id + title;
  },
};

class A {
  func(id, { blog: { title } }) {
    return id + title;
  }
}

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
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "one",
                                        "rawText": "one",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 10
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "two",
                                            "rawText": "two",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 22
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "three",
                                            "rawText": "three",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 29
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 36
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 36
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 37
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 43
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 43
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 43
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 46
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 48
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 201,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "s",
                                                "rawText": "s",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 51,
                                                "end": 52
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 54
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 51,
                                            "end": 54
                                        }
                                    ],
                                    "trailingComma": true,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 55
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 56
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 50,
                        "end": 57
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 60
                    },
                    "contents": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 60,
                        "end": 62
                    },
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 62
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 44,
                "end": 62
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 44,
            "end": 62
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 62,
                "end": 68
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "children",
                                        "rawText": "children",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 70,
                                        "end": 79
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 80,
                                            "end": 84
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "props",
                                            "rawText": "props",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 84,
                                            "end": 89
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 80,
                                        "end": 89
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 89
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 91
                        },
                        "type": null,
                        "initializer": {
                            "kind": 129,
                            "member": {
                                "kind": 4276321,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 93,
                                "end": 98
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "props",
                                "rawText": "props",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 104
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 93,
                            "end": 104
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 68,
                        "end": 104
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 68,
                "end": 104
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 62,
            "end": 104
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 104,
                "end": 111
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "user",
                                            "rawText": "user",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 113,
                                            "end": 118
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "firstName",
                                                        "rawText": "firstName",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 121,
                                                        "end": 131
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "lastName",
                                                        "rawText": "lastName",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 132,
                                                        "end": 141
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 121,
                                                "end": 141
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 119,
                                            "end": 143
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 113,
                                        "end": 143
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 113,
                                "end": 143
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 111,
                            "end": 145
                        },
                        "type": null,
                        "initializer": {
                            "kind": 129,
                            "member": {
                                "kind": 4276321,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 147,
                                "end": 152
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "props",
                                "rawText": "props",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 153,
                                "end": 158
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 147,
                            "end": 158
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 111,
                        "end": 158
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 111,
                "end": 158
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 104,
            "end": 159
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 159,
                "end": 166
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "name",
                                            "rawText": "name",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 168,
                                            "end": 175
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "first",
                                                        "rawText": "first",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 178,
                                                        "end": 184
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "last",
                                                        "rawText": "last",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 185,
                                                        "end": 190
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 178,
                                                "end": 190
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 176,
                                            "end": 192
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 168,
                                        "end": 192
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "organisation",
                                            "rawText": "organisation",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 193,
                                            "end": 208
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "address",
                                                            "rawText": "address",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 211,
                                                            "end": 219
                                                        },
                                                        "value": {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [
                                                                    {
                                                                        "kind": 329,
                                                                        "key": {
                                                                            "kind": 134299649,
                                                                            "text": "street",
                                                                            "rawText": "street",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 222,
                                                                            "end": 229
                                                                        },
                                                                        "value": {
                                                                            "kind": 134299649,
                                                                            "text": "orgStreetAddress",
                                                                            "rawText": "orgStreetAddress",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 230,
                                                                            "end": 247
                                                                        },
                                                                        "initializer": null,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 222,
                                                                        "end": 247
                                                                    },
                                                                    {
                                                                        "kind": 329,
                                                                        "key": {
                                                                            "kind": 134299649,
                                                                            "text": "postcode",
                                                                            "rawText": "postcode",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 248,
                                                                            "end": 257
                                                                        },
                                                                        "value": {
                                                                            "kind": 134299649,
                                                                            "text": "orgPostcode",
                                                                            "rawText": "orgPostcode",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 258,
                                                                            "end": 270
                                                                        },
                                                                        "initializer": null,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 248,
                                                                        "end": 270
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 222,
                                                                "end": 270
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 220,
                                                            "end": 272
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 211,
                                                        "end": 272
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 211,
                                                "end": 272
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 209,
                                            "end": 274
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 193,
                                        "end": 274
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 168,
                                "end": 274
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 166,
                            "end": 276
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "user",
                            "rawText": "user",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 278,
                            "end": 283
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 166,
                        "end": 283
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 166,
                "end": 283
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 159,
            "end": 284
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 284,
                "end": 294
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 294,
                "end": 296
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 329,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "data",
                                        "rawText": "data",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 298,
                                        "end": 303
                                    },
                                    "value": {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "name",
                                                    "rawText": "name",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 306,
                                                    "end": 311
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 306,
                                            "end": 311
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 304,
                                        "end": 313
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 298,
                                    "end": 313
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 298,
                            "end": 313
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 297,
                        "end": 315
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 297,
                "end": 315
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 318,
                    "end": 318
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 316,
                "end": 319
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 284,
            "end": 319
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 319,
                "end": 326
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "UserComponent",
                            "rawText": "UserComponent",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 326,
                            "end": 340
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 342,
                                "end": 351
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 353,
                                                        "end": 360
                                                    },
                                                    "value": {
                                                        "kind": 212,
                                                        "propertyList": {
                                                            "kind": 213,
                                                            "properties": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "first",
                                                                    "rawText": "first",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 363,
                                                                    "end": 369
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "last",
                                                                    "rawText": "last",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 370,
                                                                    "end": 375
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 363,
                                                            "end": 375
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 361,
                                                        "end": 377
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 353,
                                                    "end": 377
                                                },
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "organisation",
                                                        "rawText": "organisation",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 378,
                                                        "end": 393
                                                    },
                                                    "value": {
                                                        "kind": 212,
                                                        "propertyList": {
                                                            "kind": 213,
                                                            "properties": [
                                                                {
                                                                    "kind": 329,
                                                                    "key": {
                                                                        "kind": 134299649,
                                                                        "text": "address",
                                                                        "rawText": "address",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 396,
                                                                        "end": 404
                                                                    },
                                                                    "value": {
                                                                        "kind": 212,
                                                                        "propertyList": {
                                                                            "kind": 213,
                                                                            "properties": [
                                                                                {
                                                                                    "kind": 329,
                                                                                    "key": {
                                                                                        "kind": 134299649,
                                                                                        "text": "street",
                                                                                        "rawText": "street",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 407,
                                                                                        "end": 414
                                                                                    },
                                                                                    "value": {
                                                                                        "kind": 134299649,
                                                                                        "text": "orgStreetAddress",
                                                                                        "rawText": "orgStreetAddress",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 415,
                                                                                        "end": 432
                                                                                    },
                                                                                    "initializer": null,
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 407,
                                                                                    "end": 432
                                                                                },
                                                                                {
                                                                                    "kind": 329,
                                                                                    "key": {
                                                                                        "kind": 134299649,
                                                                                        "text": "postcode",
                                                                                        "rawText": "postcode",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 433,
                                                                                        "end": 442
                                                                                    },
                                                                                    "value": {
                                                                                        "kind": 134299649,
                                                                                        "text": "orgPostcode",
                                                                                        "rawText": "orgPostcode",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 443,
                                                                                        "end": 455
                                                                                    },
                                                                                    "initializer": null,
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 433,
                                                                                    "end": 455
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 407,
                                                                            "end": 455
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 405,
                                                                        "end": 457
                                                                    },
                                                                    "initializer": null,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 396,
                                                                    "end": 457
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 396,
                                                            "end": 457
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 394,
                                                        "end": 459
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 378,
                                                    "end": 459
                                                }
                                            ],
                                            "trailingComma": true,
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 353,
                                            "end": 460
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 352,
                                        "end": 462
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 352,
                                "end": 462
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 465,
                                                "end": 474
                                            },
                                            "expression": null,
                                            "flags": 81,
                                            "transformFlags": 256,
                                            "start": 465,
                                            "end": 474
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 465,
                                    "end": 474
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 463,
                                "end": 476
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 342,
                            "end": 476
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 326,
                        "end": 476
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 326,
                "end": 476
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 319,
            "end": 477
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 477,
                "end": 484
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 486,
                                        "end": 488
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 489,
                                        "end": 491
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 492,
                                        "end": 494
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 495,
                                            "end": 497
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "e",
                                                        "rawText": "e",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 500,
                                                        "end": 502
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 500,
                                                "end": 502
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 498,
                                            "end": 504
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 495,
                                        "end": 504
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 486,
                                "end": 504
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 484,
                            "end": 506
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "someObject",
                            "rawText": "someObject",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 508,
                            "end": 519
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 484,
                        "end": 519
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 484,
                "end": 519
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 477,
            "end": 520
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 520,
                "end": 525
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 527,
                    "end": 527
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 525,
                "end": 539
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 539,
                    "end": 545
                },
                "catchParameter": {
                    "kind": 212,
                    "propertyList": {
                        "kind": 213,
                        "properties": [
                            {
                                "kind": 329,
                                "key": {
                                    "kind": 134299649,
                                    "text": "data",
                                    "rawText": "data",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 548,
                                    "end": 553
                                },
                                "value": {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "message",
                                                "rawText": "message",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 556,
                                                "end": 564
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 556,
                                        "end": 564
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 554,
                                    "end": 566
                                },
                                "initializer": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 548,
                                "end": 566
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 548,
                        "end": 566
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 547,
                    "end": 567
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 570,
                        "end": 570
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 568,
                    "end": 582
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 539,
                "end": 582
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 520,
            "end": 582
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 582,
                "end": 587
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 589,
                    "end": 589
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 587,
                "end": 601
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 601,
                    "end": 607
                },
                "catchParameter": {
                    "kind": 212,
                    "propertyList": {
                        "kind": 213,
                        "properties": [
                            {
                                "kind": 329,
                                "key": {
                                    "kind": 134299649,
                                    "text": "data",
                                    "rawText": "data",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 610,
                                    "end": 615
                                },
                                "value": {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 329,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "message",
                                                    "rawText": "message",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 618,
                                                    "end": 626
                                                },
                                                "value": {
                                                    "kind": 212,
                                                    "propertyList": {
                                                        "kind": 213,
                                                        "properties": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "errors",
                                                                "rawText": "errors",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 629,
                                                                "end": 636
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 629,
                                                        "end": 636
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 627,
                                                    "end": 638
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 618,
                                                "end": 638
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 618,
                                        "end": 638
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 616,
                                    "end": 639
                                },
                                "initializer": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 610,
                                "end": 639
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 610,
                        "end": 639
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 609,
                    "end": 640
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 643,
                        "end": 643
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 641,
                    "end": 655
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 601,
                "end": 655
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 582,
            "end": 655
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 655,
                "end": 662
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 662,
                            "end": 666
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "func",
                                                "rawText": "func",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 670,
                                                "end": 677
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "id",
                                                        "rawText": "id",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 678,
                                                        "end": 680
                                                    },
                                                    {
                                                        "kind": 212,
                                                        "propertyList": {
                                                            "kind": 213,
                                                            "properties": [
                                                                {
                                                                    "kind": 329,
                                                                    "key": {
                                                                        "kind": 134299649,
                                                                        "text": "blog",
                                                                        "rawText": "blog",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 683,
                                                                        "end": 688
                                                                    },
                                                                    "value": {
                                                                        "kind": 212,
                                                                        "propertyList": {
                                                                            "kind": 213,
                                                                            "properties": [
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "title",
                                                                                    "rawText": "title",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 691,
                                                                                    "end": 697
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 691,
                                                                            "end": 697
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 689,
                                                                        "end": 699
                                                                    },
                                                                    "initializer": null,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 683,
                                                                    "end": 699
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 683,
                                                            "end": 699
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 681,
                                                        "end": 701
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 678,
                                                "end": 702
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 161,
                                                            "returnKeyword": {
                                                                "kind": 37757022,
                                                                "flags": 81,
                                                                "transformFlags": 0,
                                                                "start": 704,
                                                                "end": 715
                                                            },
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "id",
                                                                    "rawText": "id",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 715,
                                                                    "end": 718
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 99634,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 718,
                                                                    "end": 720
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "title",
                                                                    "rawText": "title",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 720,
                                                                    "end": 726
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 1024,
                                                                "start": 715,
                                                                "end": 726
                                                            },
                                                            "flags": 81,
                                                            "transformFlags": 256,
                                                            "start": 704,
                                                            "end": 727
                                                        }
                                                    ],
                                                    "flags": 33,
                                                    "transformFlags": 0,
                                                    "start": 704,
                                                    "end": 727
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 702,
                                                "end": 731
                                            },
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 677,
                                            "end": 731
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 670,
                                        "end": 731
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 670,
                                "end": 732
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 668,
                            "end": 734
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 662,
                        "end": 734
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 662,
                "end": 734
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 655,
            "end": 735
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 735,
                "end": 742
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 742,
                "end": 744
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "func",
                                    "rawText": "func",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 746,
                                    "end": 753
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "id",
                                            "rawText": "id",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 754,
                                            "end": 756
                                        },
                                        {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "blog",
                                                            "rawText": "blog",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 759,
                                                            "end": 764
                                                        },
                                                        "value": {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "title",
                                                                        "rawText": "title",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 767,
                                                                        "end": 773
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 767,
                                                                "end": 773
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 765,
                                                            "end": 775
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 759,
                                                        "end": 775
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 759,
                                                "end": 775
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 757,
                                            "end": 777
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 754,
                                    "end": 778
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 780,
                                                    "end": 791
                                                },
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "id",
                                                        "rawText": "id",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 791,
                                                        "end": 794
                                                    },
                                                    "operatorToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 794,
                                                        "end": 796
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "title",
                                                        "rawText": "title",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 796,
                                                        "end": 802
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 1024,
                                                    "start": 791,
                                                    "end": 802
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 780,
                                                "end": 803
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 780,
                                        "end": 803
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 778,
                                    "end": 807
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 753,
                                "end": 807
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 746,
                            "end": 807
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 746,
                    "end": 807
                },
                "flags": 744,
                "transformFlags": 0,
                "start": 32,
                "end": 809
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 735,
            "end": 809
        }
    ],
    "isModule": false,
    "source": "const [one, two = null, three = null] = arr;\na = ([s=1,]) => 1\nconst { children, ...props } = this.props\n\nconst { user: { firstName, lastName } } = this.props;\n\nconst {\n  name: { first, last },\n  organisation: { address: { street: orgStreetAddress, postcode: orgPostcode } }\n} = user;\n\nfunction f({ data: { name } }) {}\n\nconst UserComponent = function({\n  name: { first, last },\n  organisation: { address: { street: orgStreetAddress, postcode: orgPostcode } },\n}) {\n  return\n};\n\nconst { a, b, c, d: { e } } = someObject;\n\ntry {\n  // code\n} catch ({ data: { message }}) {\n  // code\n}\n\ntry {\n  // code\n} catch ({ data: { message: { errors }}}) {\n  // code\n}\n\nconst obj = {\n  func(id, { blog: { title } }) {\n    return id + title;\n  },\n};\n\nclass A {\n  func(id, { blog: { title } }) {\n    return id + title;\n  }\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 810
}
```

### Printed

```javascript

const [one, two = null, three = null] = arr;
a = ([s = 1,]) => 1;

const { children, ...props } = this.props;

const { user: { firstName, lastName } } = this.props;

const {
    name: { first, last },
    organisation: {
      address: { street: orgStreetAddress, postcode: orgPostcode }
    }
  } = user;

function f({ data: { name } }) {}

const UserComponent = function ({
    name: { first, last },
    organisation: {
      address: { street: orgStreetAddress, postcode: orgPostcode }
    },
  }) {
    return;
  };

const { a, b, c, d: { e } } = someObject;

try {} catch ({ data: { message } }) {}

try {} catch ({ data: { message: { errors } } }) {}

const obj = { func(id, { blog: { title } }) {
      return id + title;
    } };

class A {
  func(
    id,
    { blog: { title } }
  ) {
    return id + title;
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

