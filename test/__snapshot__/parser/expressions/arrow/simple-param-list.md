# Kataw parser test case

## Input

`````js
(([]) => {'use strict';})

({set a([]){'use strict'}  })

({a([]){'use strict'}})
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 5,
                                "end": 8
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 3,
                                        "end": 3
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 4
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [
                                        {
                                            "kind": 201392131,
                                            "text": "use strict",
                                            "rawText": "'use strict'",
                                            "flags": 4194400,
                                            "start": 10,
                                            "end": 22
                                        }
                                    ],
                                    "statements": [],
                                    "flags": 4194336,
                                    "start": 10,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 24
                            },
                            "flags": 34,
                            "start": 1,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 25
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 257,
                                            "asyncKeyword": null,
                                            "generatorToken": null,
                                            "getKeyword": null,
                                            "setKeyword": {
                                                "kind": 16499,
                                                "flags": 64,
                                                "start": 29,
                                                "end": 32
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 32,
                                                    "end": 34
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [
                                                        {
                                                            "kind": 203,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 201,
                                                                "elementList": {
                                                                    "kind": 202,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "start": 36,
                                                                    "end": 36
                                                                },
                                                                "flags": 32,
                                                                "start": 35,
                                                                "end": 37
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "right": null,
                                                            "flags": 34,
                                                            "start": 35,
                                                            "end": 37
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 546,
                                                    "start": 35,
                                                    "end": 38
                                                },
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [
                                                            {
                                                                "kind": 201392131,
                                                                "text": "use strict",
                                                                "rawText": "'use strict'",
                                                                "flags": 4194400,
                                                                "start": 39,
                                                                "end": 51
                                                            }
                                                        ],
                                                        "statements": [],
                                                        "flags": 4194336,
                                                        "start": 39,
                                                        "end": 51
                                                    },
                                                    "flags": 32,
                                                    "start": 38,
                                                    "end": 52
                                                },
                                                "flags": 544,
                                                "start": 34,
                                                "end": 52
                                            },
                                            "flags": 32,
                                            "start": 29,
                                            "end": 52
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 29,
                                    "end": 52
                                },
                                "flags": 48,
                                "start": 28,
                                "end": 55
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 28,
                        "end": 55
                    },
                    "flags": 268435488,
                    "start": 0,
                    "end": 56
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 60,
                                                "end": 61
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 203,
                                                        "ellipsisToken": null,
                                                        "left": {
                                                            "kind": 201,
                                                            "elementList": {
                                                                "kind": 202,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 63,
                                                                "end": 63
                                                            },
                                                            "flags": 32,
                                                            "start": 62,
                                                            "end": 64
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": null,
                                                        "flags": 34,
                                                        "start": 62,
                                                        "end": 64
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 34,
                                                "start": 62,
                                                "end": 65
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "use strict",
                                                            "rawText": "'use strict'",
                                                            "flags": 4194400,
                                                            "start": 66,
                                                            "end": 78
                                                        }
                                                    ],
                                                    "statements": [],
                                                    "flags": 4194336,
                                                    "start": 66,
                                                    "end": 78
                                                },
                                                "flags": 32,
                                                "start": 65,
                                                "end": 79
                                            },
                                            "flags": 32,
                                            "start": 61,
                                            "end": 79
                                        },
                                        "flags": 32,
                                        "start": 60,
                                        "end": 79
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 60,
                                "end": 79
                            },
                            "flags": 48,
                            "start": 59,
                            "end": 80
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 59,
                    "end": 80
                },
                "flags": 268435488,
                "start": 0,
                "end": 81
            },
            "flags": 16,
            "start": 0,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "(([]) => {'use strict';})\n\n({set a([]){'use strict'}  })\n\n({a([]){'use strict'}})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 0, end: 23
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 35, end: 52
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 62, end: 79

```

