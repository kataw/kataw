# Kataw parser test case

## Input

`````js
let x: string;

let [x]: string = y;

let [x:symbol]: string = y;

let {x}: string = y;

`````

## Options

### Parser Options

`````js
{}
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 5
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 6,
            "end": 14
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 14,
                "end": 19
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 22
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 23
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 19,
                        "end": 23
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 19,
                "end": 23
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 14,
            "end": 23
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
                    "transformFlags": 0,
                    "start": 24,
                    "end": 31
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 33
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 35
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 24,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 24,
            "end": 36
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 36,
                "end": 41
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 43,
                                        "end": 44
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 44
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 44
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 41,
                        "end": 44
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 41,
                "end": 44
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 36,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "symbol",
                "rawText": "symbol",
                "flags": 96,
                "transformFlags": 0,
                "start": 45,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 45,
            "end": 51
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
                    "transformFlags": 0,
                    "start": 53,
                    "end": 60
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 62
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 64
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 53,
                "end": 64
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 53,
            "end": 65
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 65,
                "end": 70
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 72,
                                        "end": 73
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 72,
                                "end": 73
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 70,
                            "end": 74
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 70,
                        "end": 74
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 70,
                "end": 74
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 65,
            "end": 74
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
                    "transformFlags": 0,
                    "start": 75,
                    "end": 82
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 84
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 86
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 75,
                "end": 86
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 75,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "let x: string;\n\nlet [x]: string = y;\n\nlet [x:symbol]: string = y;\n\nlet {x}: string = y;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 88
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 5, end: 6
✖ Expected a `;` - start: 5, end: 6
✖ Duplicate identifier - start: 21, end: 22
✖ Missing initializer in destructuring declaration - start: 23, end: 24
✖ ',' expected - start: 23, end: 24
✖ Expected a `;` - start: 23, end: 24
✖ Duplicate identifier - start: 43, end: 44
✖ ',' expected - start: 44, end: 45
✖ Did you forgot a ']' to match the `[` token? - start: 44, end: 45
✖ Missing initializer in destructuring declaration - start: 44, end: 45
✖ ',' expected - start: 44, end: 45
✖ Expected a `;` - start: 51, end: 52
✖ Declaration or statement expected - start: 52, end: 53
✖ Duplicate identifier - start: 73, end: 74
✖ Missing initializer in destructuring declaration - start: 74, end: 75
✖ ',' expected - start: 74, end: 75
✖ Expected a `;` - start: 74, end: 75

```

