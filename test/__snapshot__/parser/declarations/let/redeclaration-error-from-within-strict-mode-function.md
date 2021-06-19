# Kataw parser test case

## Input

`````js
(function() { 'use strict'; { let f; var f; } })
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
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 1,
                        "end": 9
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 9,
                        "end": 11
                    },
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
                                    "start": 13,
                                    "end": 26
                                }
                            ],
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 41951307,
                                                    "flags": 80,
                                                    "start": 29,
                                                    "end": 33
                                                },
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "f",
                                                                "rawText": "f",
                                                                "flags": 96,
                                                                "start": 33,
                                                                "end": 35
                                                            },
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "start": 33,
                                                            "end": 35
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 33,
                                                    "end": 35
                                                },
                                                "flags": 33554448,
                                                "start": 29,
                                                "end": 36
                                            },
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 80,
                                                    "start": 36,
                                                    "end": 40
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "f",
                                                                "rawText": "f",
                                                                "flags": 96,
                                                                "start": 40,
                                                                "end": 42
                                                            },
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "start": 40,
                                                            "end": 42
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 40,
                                                    "end": 42
                                                },
                                                "flags": 16,
                                                "start": 36,
                                                "end": 43
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 29,
                                        "end": 43
                                    },
                                    "flags": 16,
                                    "start": 27,
                                    "end": 45
                                }
                            ],
                            "flags": 4194336,
                            "start": 13,
                            "end": 45
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 47
                    },
                    "returnType": null,
                    "flags": 32,
                    "start": 1,
                    "end": 47
                },
                "flags": 32,
                "start": 0,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "(function() { 'use strict'; { let f; var f; } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 40, end: 42

```

