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
                "flags": 1,
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
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 8,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 11,
                                "end": 18
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 18
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 6,
                        "end": 22
                    }
                ],
                "flags": 16777232,
                "start": 6,
                "end": 22
            },
            "flags": 33554448,
            "start": 0,
            "end": 23
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
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
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 32,
                                            "end": 33
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 134234343,
                                                "flags": 64,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "flags": 0,
                                            "start": 33,
                                            "end": 40
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 32,
                                        "end": 40
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 32,
                                "end": 40
                            },
                            "flags": 32,
                            "start": 30,
                            "end": 41
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 42,
                                "end": 49
                            },
                            "flags": 0,
                            "start": 41,
                            "end": 49
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 51,
                            "end": 53
                        },
                        "flags": 16,
                        "start": 30,
                        "end": 53
                    }
                ],
                "flags": 16777232,
                "start": 30,
                "end": 53
            },
            "flags": 33554448,
            "start": 23,
            "end": 54
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
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
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "q",
                                            "rawText": "q",
                                            "flags": 96,
                                            "start": 63,
                                            "end": 64
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 63,
                                        "end": 64
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 63,
                                "end": 64
                            },
                            "flags": 32,
                            "start": 61,
                            "end": 65
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 66,
                                "end": 73
                            },
                            "flags": 0,
                            "start": 65,
                            "end": 73
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 75,
                            "end": 77
                        },
                        "flags": 16,
                        "start": 61,
                        "end": 77
                    }
                ],
                "flags": 16777232,
                "start": 61,
                "end": 77
            },
            "flags": 33554448,
            "start": 54,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "\nconst [y]: string = y;\n\nconst [z:symbol]: string = y;\n\nconst {q}: string = y;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

const [y] = y;
const [z] = y;
const {
  q
} = y;
```

### Diagnostics

```javascript
✔ No errors
```

