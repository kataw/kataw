# Kataw parser test case

## Input

`````js
function f() { { async function x() {} { var x } }
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
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 10
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 176,
                                        "declareKeyword": null,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 22
                                        },
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 22,
                                            "end": 31
                                        },
                                        "asteriskToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 33,
                                            "end": 33
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 37,
                                                "end": 37
                                            },
                                            "flags": 32,
                                            "start": 35,
                                            "end": 38
                                        },
                                        "returnType": null,
                                        "flags": 144,
                                        "start": 16,
                                        "end": 38
                                    },
                                    {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "start": 40,
                                                        "end": 44
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 44,
                                                                    "end": 46
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 44,
                                                                "end": 46
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 44,
                                                        "end": 46
                                                    },
                                                    "flags": 16,
                                                    "start": 40,
                                                    "end": 46
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 40,
                                            "end": 46
                                        },
                                        "flags": 16,
                                        "start": 38,
                                        "end": 48
                                    }
                                ],
                                "flags": 16,
                                "start": 16,
                                "end": 48
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 50
                },
                "flags": 32,
                "start": 12,
                "end": 50
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "function f() { { async function x() {} { var x } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 44, end: 46
✖ The parser expected to find a '}' to match the '{' token here - start: 49, end: 50

```

