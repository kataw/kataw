# Kataw parser test case

## Input

`````js
function x(x = y) { "use strict"; }

function x(...x) { "use strict"; }

function x([x]) { "use strict"; }

function x({x}) { "use strict"; }

`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 258,
                        "start": 11,
                        "end": 16
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 10,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "use strict",
                            "flags": 768,
                            "start": 19,
                            "end": 32
                        }
                    ],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 33
                },
                "flags": 256,
                "start": 17,
                "end": 35
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 35
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 35,
                "end": 45
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 45,
                "end": 47
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 768,
                            "start": 48,
                            "end": 51
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 51,
                            "end": 52
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 258,
                        "start": 48,
                        "end": 52
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 47,
                "end": 53
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "use strict",
                            "flags": 768,
                            "start": 55,
                            "end": 68
                        }
                    ],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 55,
                    "end": 69
                },
                "flags": 256,
                "start": 53,
                "end": 71
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 35,
            "end": 71
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 71,
                "end": 81
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 81,
                "end": 83
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
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
                                            "start": 85,
                                            "end": 86
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 85,
                                        "end": 86
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 85,
                                "end": 86
                            },
                            "flags": 256,
                            "start": 84,
                            "end": 87
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 258,
                        "start": 84,
                        "end": 87
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 83,
                "end": 88
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "use strict",
                            "flags": 768,
                            "start": 90,
                            "end": 103
                        }
                    ],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 90,
                    "end": 104
                },
                "flags": 256,
                "start": 88,
                "end": 106
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 71,
            "end": 106
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 106,
                "end": 116
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 116,
                "end": 118
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
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
                                            "start": 120,
                                            "end": 121
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 120,
                                        "end": 121
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 120,
                                "end": 121
                            },
                            "flags": 256,
                            "start": 119,
                            "end": 122
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 258,
                        "start": 119,
                        "end": 122
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 118,
                "end": 123
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "use strict",
                            "flags": 768,
                            "start": 125,
                            "end": 138
                        }
                    ],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 125,
                    "end": 139
                },
                "flags": 256,
                "start": 123,
                "end": 141
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 106,
            "end": 141
        }
    ],
    "isModule": false,
    "text": "function x(x = y) { \"use strict\"; }\n\nfunction x(...x) { \"use strict\"; }\n\nfunction x([x]) { \"use strict\"; }\n\nfunction x({x}) { \"use strict\"; }\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 142
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 32, end: 33
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 68, end: 69
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 103, end: 104
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 138, end: 139

```

