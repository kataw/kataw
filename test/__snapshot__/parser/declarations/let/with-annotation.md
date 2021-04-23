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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
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
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 768,
                "start": 6,
                "end": 13
            },
            "flags": 128,
            "start": 6,
            "end": 14
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
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
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 21,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 21,
                                "end": 22
                            },
                            "flags": 256,
                            "start": 19,
                            "end": 23
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 19,
                        "end": 23
                    }
                ],
                "flags": 128,
                "start": 19,
                "end": 23
            },
            "flags": 128,
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
                    "flags": 768,
                    "start": 24,
                    "end": 31
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 31,
                    "end": 33
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 33,
                    "end": 35
                },
                "flags": 256,
                "start": 24,
                "end": 35
            },
            "flags": 128,
            "start": 24,
            "end": 36
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
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
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 43,
                                        "end": 44
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 43,
                                "end": 44
                            },
                            "flags": 256,
                            "start": 41,
                            "end": 44
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 41,
                        "end": 44
                    }
                ],
                "flags": 128,
                "start": 41,
                "end": 44
            },
            "flags": 128,
            "start": 36,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "symbol",
                "rawText": "symbol",
                "flags": 768,
                "start": 45,
                "end": 51
            },
            "flags": 128,
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
                    "flags": 768,
                    "start": 53,
                    "end": 60
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 60,
                    "end": 62
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 62,
                    "end": 64
                },
                "flags": 256,
                "start": 53,
                "end": 64
            },
            "flags": 128,
            "start": 53,
            "end": 65
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
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
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 72,
                                            "end": 73
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 72,
                                        "end": 73
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 72,
                                "end": 73
                            },
                            "flags": 256,
                            "start": 70,
                            "end": 74
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 70,
                        "end": 74
                    }
                ],
                "flags": 128,
                "start": 70,
                "end": 74
            },
            "flags": 128,
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
                    "flags": 768,
                    "start": 75,
                    "end": 82
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 82,
                    "end": 84
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 84,
                    "end": 86
                },
                "flags": 256,
                "start": 75,
                "end": 86
            },
            "flags": 128,
            "start": 75,
            "end": 87
        }
    ],
    "isModule": false,
    "text": "let x: string;\n\nlet [x]: string = y;\n\nlet [x:symbol]: string = y;\n\nlet {x}: string = y;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 88
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

