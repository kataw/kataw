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

### CST

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
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 11,
                        "end": 16
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 11,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 32
                        }
                    ],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 33
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 35
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 35,
                "end": 45
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 45,
                "end": 47
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 51
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 52
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 48,
                        "end": 52
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 48,
                "end": 52
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 55,
                            "end": 68
                        }
                    ],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 69
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 53,
                "end": 71
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 35,
            "end": 71
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 71,
                "end": 81
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 81,
                "end": 83
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
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
                                    "start": 85,
                                    "end": 86
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 85,
                            "end": 86
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 84,
                        "end": 87
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 84,
                "end": 87
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 103
                        }
                    ],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 90,
                    "end": 104
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 88,
                "end": 106
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 71,
            "end": 106
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 106,
                "end": 116
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 116,
                "end": 118
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
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 120,
                                    "end": 121
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 120,
                            "end": 121
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 119,
                        "end": 122
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 119,
                "end": 122
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 125,
                            "end": 138
                        }
                    ],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 125,
                    "end": 139
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 123,
                "end": 141
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 106,
            "end": 141
        }
    ],
    "isModule": false,
    "source": "function x(x = y) { \"use strict\"; }\n\nfunction x(...x) { \"use strict\"; }\n\nfunction x([x]) { \"use strict\"; }\n\nfunction x({x}) { \"use strict\"; }\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 142
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 32, end: 33
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 68, end: 69

```

