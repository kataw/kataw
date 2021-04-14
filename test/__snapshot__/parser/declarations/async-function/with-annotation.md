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
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "flags": 768,
                                "start": 6,
                                "end": 13
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 5,
                            "end": 13
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 13
            },
            "flags": 128,
            "start": 0,
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
                                            "kind": 81921,
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
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "flags": 768,
                                "start": 24,
                                "end": 31
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 23,
                            "end": 31
                        },
                        "initializer": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 33,
                            "end": 35
                        },
                        "flags": 128,
                        "start": 19,
                        "end": 35
                    }
                ],
                "flags": 128,
                "start": 19,
                "end": 35
            },
            "flags": 128,
            "start": 14,
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
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 16615,
                                                "flags": 768,
                                                "start": 45,
                                                "end": 51
                                            },
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 44,
                                            "end": 51
                                        },
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 43,
                                        "end": 51
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 43,
                                "end": 51
                            },
                            "flags": 256,
                            "start": 41,
                            "end": 52
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "flags": 768,
                                "start": 53,
                                "end": 60
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 52,
                            "end": 60
                        },
                        "initializer": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 62,
                            "end": 64
                        },
                        "flags": 128,
                        "start": 41,
                        "end": 64
                    }
                ],
                "flags": 128,
                "start": 41,
                "end": 64
            },
            "flags": 128,
            "start": 36,
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
                                            "kind": 81921,
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
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "flags": 768,
                                "start": 75,
                                "end": 82
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 74,
                            "end": 82
                        },
                        "initializer": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 84,
                            "end": 86
                        },
                        "flags": 128,
                        "start": 70,
                        "end": 86
                    }
                ],
                "flags": 128,
                "start": 70,
                "end": 86
            },
            "flags": 128,
            "start": 65,
            "end": 87
        }
    ],
    "isModule": false,
    "text": "let x: string;\n\nlet [x]: string = y;\n\nlet [x:symbol]: string = y;\n\nlet {x}: string = y;\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 88
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

