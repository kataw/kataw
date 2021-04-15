# Kataw parser test case

## Input

`````js
switch (0) { case 1: async function* f() {} default: function f() {} }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 768,
                            "start": 12,
                            "end": 17
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 26
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 768,
                                    "start": 26,
                                    "end": 35
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 768,
                                    "start": 35,
                                    "end": 36
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 768,
                                    "start": 36,
                                    "end": 38
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 40
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 42,
                                        "end": 42
                                    },
                                    "flags": 256,
                                    "start": 40,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 3200,
                                "start": 20,
                                "end": 43
                            }
                        ],
                        "flags": 128,
                        "start": 12,
                        "end": 43
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": null,
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 768,
                                    "start": 52,
                                    "end": 61
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 768,
                                    "start": 61,
                                    "end": 63
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 63,
                                    "end": 65
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 67,
                                        "end": 67
                                    },
                                    "flags": 256,
                                    "start": 65,
                                    "end": 68
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 128,
                                "start": 52,
                                "end": 68
                            }
                        ],
                        "flags": 128,
                        "start": 43,
                        "end": 68
                    }
                ],
                "flags": 128,
                "start": 10,
                "end": 70
            },
            "flags": 128,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "text": "switch (0) { case 1: async function* f() {} default: function f() {} }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 52,
            "end": 61
        }
    ],
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

