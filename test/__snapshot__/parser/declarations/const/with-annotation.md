# Kataw parser test case

## Input

`````js
const x: string;

const [x]: string = y;

const [x:symbol]: string = y;

const {x}: string = y;

`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 0,
                "end": 5
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
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 5,
                        "end": 7
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 7
            },
            "flags": 33554448,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 8,
                "end": 15
            },
            "flags": 16,
            "start": 8,
            "end": 16
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 16,
                "end": 23
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 25,
                                        "end": 26
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 25,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 23,
                            "end": 27
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 23,
                        "end": 27
                    }
                ],
                "flags": 16777232,
                "start": 23,
                "end": 27
            },
            "flags": 33554448,
            "start": 16,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 96,
                    "start": 28,
                    "end": 35
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 35,
                    "end": 37
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 37,
                    "end": 39
                },
                "flags": 32,
                "start": 28,
                "end": 39
            },
            "flags": 16,
            "start": 28,
            "end": 40
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 40,
                "end": 47
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 49,
                                            "end": 50
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 49,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 49,
                                "end": 50
                            },
                            "flags": 32,
                            "start": 47,
                            "end": 50
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 47,
                        "end": 50
                    }
                ],
                "flags": 16777232,
                "start": 47,
                "end": 50
            },
            "flags": 33554448,
            "start": 40,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "symbol",
                "rawText": "symbol",
                "flags": 96,
                "start": 51,
                "end": 57
            },
            "flags": 16,
            "start": 51,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 96,
                    "start": 59,
                    "end": 66
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 66,
                    "end": 68
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 68,
                    "end": 70
                },
                "flags": 32,
                "start": 59,
                "end": 70
            },
            "flags": 16,
            "start": 59,
            "end": 71
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 71,
                "end": 78
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 80,
                                            "end": 81
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 80,
                                        "end": 81
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 80,
                                "end": 81
                            },
                            "flags": 32,
                            "start": 78,
                            "end": 82
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 78,
                        "end": 82
                    }
                ],
                "flags": 16777232,
                "start": 78,
                "end": 82
            },
            "flags": 33554448,
            "start": 71,
            "end": 82
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 96,
                    "start": 83,
                    "end": 90
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 90,
                    "end": 92
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 92,
                    "end": 94
                },
                "flags": 32,
                "start": 83,
                "end": 94
            },
            "flags": 16,
            "start": 83,
            "end": 95
        }
    ],
    "isModule": false,
    "source": "const x: string;\n\nconst [x]: string = y;\n\nconst [x:symbol]: string = y;\n\nconst {x}: string = y;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Missing initializer in const declaration - start: 7, end: 8
✖ ',' expected - start: 7, end: 8
✖ Expected a `;` - start: 7, end: 8
✖ Missing initializer in const declaration - start: 27, end: 28
✖ ',' expected - start: 27, end: 28
✖ Expected a `;` - start: 27, end: 28
✖ ',' expected - start: 50, end: 51
✖ Did you forgot a ']' to match the `[` token? - start: 50, end: 51
✖ Missing initializer in const declaration - start: 50, end: 51
✖ ',' expected - start: 50, end: 51
✖ Expected a `;` - start: 57, end: 58
✖ Declaration or statement expected - start: 58, end: 59
✖ Missing initializer in const declaration - start: 82, end: 83
✖ ',' expected - start: 82, end: 83
✖ Expected a `;` - start: 82, end: 83

```

