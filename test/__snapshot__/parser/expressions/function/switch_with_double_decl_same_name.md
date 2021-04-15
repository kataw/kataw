# Kataw parser test case

## Input

`````js
switch (0) {
  case 1:
    function f() {}
  default:
    function f() {}
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
                            "end": 19
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 19,
                            "end": 21
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37814362,
                                    "flags": 768,
                                    "start": 22,
                                    "end": 35
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 768,
                                    "start": 35,
                                    "end": 37
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 39
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 41,
                                        "end": 41
                                    },
                                    "flags": 256,
                                    "start": 39,
                                    "end": 42
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 256,
                                "start": 22,
                                "end": 42
                            }
                        ],
                        "flags": 128,
                        "start": 12,
                        "end": 42
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": null,
                        "statements": [
                            {
                                "kind": 176,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37814362,
                                    "flags": 768,
                                    "start": 53,
                                    "end": 66
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 768,
                                    "start": 66,
                                    "end": 68
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 68,
                                    "end": 70
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 72,
                                        "end": 72
                                    },
                                    "flags": 256,
                                    "start": 70,
                                    "end": 73
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 256,
                                "start": 53,
                                "end": 73
                            }
                        ],
                        "flags": 128,
                        "start": 42,
                        "end": 73
                    }
                ],
                "flags": 128,
                "start": 10,
                "end": 75
            },
            "flags": 128,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "text": "switch (0) {\n  case 1:\n    function f() {}\n  default:\n    function f() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 52,
            "end": 53
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 53,
            "end": 66
        }
    ],
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

