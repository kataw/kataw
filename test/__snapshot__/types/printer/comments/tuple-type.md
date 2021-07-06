# Kataw parser test case

## Input

`````js

let q: [/*1*/];

let w: [

  /*1*/

  ];

let x: [.../*1*/a/*2*/];

let y: [...[/*1*/(/*2*/a/*3*/&/*4*/b/*5*/)/*6*/]/*7*/]

`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 6
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 147,
                                "elementTypes": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 15
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 15
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 4,
                        "end": 15
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 4,
                "end": 15
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 16,
                "end": 21
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "w",
                            "rawText": "w",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 23
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 147,
                                "elementTypes": [],
                                "trailingComma": false,
                                "flags": 2097153,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 40
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 40
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 21,
                        "end": 40
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 21,
                "end": 40
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 16,
            "end": 41
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 41,
                "end": 46
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 48
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 333,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 51,
                                            "end": 54
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 54,
                                                    "end": 60
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 54,
                                                "end": 60
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 54,
                                            "end": 60
                                        },
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 60
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 66
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 66
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 46,
                        "end": 66
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 46,
                "end": 66
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 41,
            "end": 67
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 67,
                "end": 72
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 72,
                            "end": 74
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 333,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 77,
                                            "end": 80
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 147,
                                                "elementTypes": [
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 290,
                                                            "type": {
                                                                "kind": 138,
                                                                "types": [
                                                                    {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 87,
                                                                            "end": 93
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 81,
                                                                        "end": 93
                                                                    },
                                                                    {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "b",
                                                                            "rawText": "b",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 99,
                                                                            "end": 105
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 99,
                                                                        "end": 105
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 93,
                                                                "end": 105
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 81,
                                                            "end": 111
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 81,
                                                        "end": 111
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 80,
                                                "end": 117
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 80,
                                            "end": 117
                                        },
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 77,
                                        "end": 117
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 123
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 75,
                            "end": 123
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 72,
                        "end": 123
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 72,
                "end": 123
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 67,
            "end": 123
        }
    ],
    "isModule": false,
    "source": "\nlet q: [/*1*/];\n\nlet w: [\n\n  /*1*/\n\n  ];\n\nlet x: [.../*1*/a/*2*/];\n\nlet y: [...[/*1*/(/*2*/a/*3*/&/*4*/b/*5*/)/*6*/]/*7*/]\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 124
}
```

### Printed

```javascript
let q: [];
let w: [];

let x: [...a];

let y: [...[(a & b)]];

```

### Diagnostics

```javascript
✔ No errors
```

