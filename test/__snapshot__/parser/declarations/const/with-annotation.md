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
            "lexicalKeyword": null,
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
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "flags": 768,
                                "start": 8,
                                "end": 15
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 7,
                            "end": 15
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 5,
                        "end": 15
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 162,
            "lexicalKeyword": null,
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
                                            "start": 25,
                                            "end": 26
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 25,
                                        "end": 26
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 25,
                                "end": 26
                            },
                            "flags": 256,
                            "start": 23,
                            "end": 27
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "flags": 768,
                                "start": 28,
                                "end": 35
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 27,
                            "end": 35
                        },
                        "initializer": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 37,
                            "end": 39
                        },
                        "flags": 128,
                        "start": 23,
                        "end": 39
                    }
                ],
                "flags": 160,
                "start": 23,
                "end": 39
            },
            "flags": 128,
            "start": 16,
            "end": 40
        },
        {
            "kind": 162,
            "lexicalKeyword": null,
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
                                            "start": 49,
                                            "end": 50
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 16615,
                                                "flags": 768,
                                                "start": 51,
                                                "end": 57
                                            },
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 50,
                                            "end": 57
                                        },
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 49,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 49,
                                "end": 57
                            },
                            "flags": 256,
                            "start": 47,
                            "end": 58
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "flags": 768,
                                "start": 59,
                                "end": 66
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 58,
                            "end": 66
                        },
                        "initializer": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 68,
                            "end": 70
                        },
                        "flags": 128,
                        "start": 47,
                        "end": 70
                    }
                ],
                "flags": 160,
                "start": 47,
                "end": 70
            },
            "flags": 128,
            "start": 40,
            "end": 71
        },
        {
            "kind": 162,
            "lexicalKeyword": null,
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
                                            "start": 80,
                                            "end": 81
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 80,
                                        "end": 81
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 80,
                                "end": 81
                            },
                            "flags": 256,
                            "start": 78,
                            "end": 82
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "flags": 768,
                                "start": 83,
                                "end": 90
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 82,
                            "end": 90
                        },
                        "initializer": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 92,
                            "end": 94
                        },
                        "flags": 128,
                        "start": 78,
                        "end": 94
                    }
                ],
                "flags": 160,
                "start": 78,
                "end": 94
            },
            "flags": 128,
            "start": 71,
            "end": 95
        }
    ],
    "isModule": false,
    "text": "const x: string;\n\nconst [x]: string = y;\n\nconst [x:symbol]: string = y;\n\nconst {x}: string = y;\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 5
        },
        {
            "kind": 2,
            "source": 2,
            "code": 13,
            "error": "Missing initializer in const declaration",
            "start": 15,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 40,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 71,
            "end": 78
        }
    ],
    "start": 0,
    "end": 96
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

