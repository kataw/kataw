# Kataw parser test case

## Input

`````js

const [y]: string = y;

const [z:symbol]: string = y;

const {q}: string = y;

`````

## Options

### Parser Options

`````js
{ allowTypes: true }
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 6
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
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 10
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 18
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 18
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 6,
                        "end": 22
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 6,
                "end": 22
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 23,
                "end": 30
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
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 33
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234343,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 40
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 40
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 40
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 41
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 49
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 49
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 53
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 30,
                        "end": 53
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 30,
                "end": 53
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 23,
            "end": 54
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 54,
                "end": 61
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
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 63,
                                        "end": 64
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 64
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 61,
                            "end": 65
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 73
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 73
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 75,
                            "end": 77
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 61,
                        "end": 77
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 61,
                "end": 77
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 54,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "\nconst [y]: string = y;\n\nconst [z:symbol]: string = y;\n\nconst {q}: string = y;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

const [y]: string = y;
const [z: symbol]: string = y;

const {q}: string = y;

```

### Diagnostics

```javascript
✔ No errors
```

