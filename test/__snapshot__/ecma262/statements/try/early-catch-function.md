# Kataw parser test case

## Input

`````js
function f() {
    try {
    } catch (e) {
        function e(){}
    }
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
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 81,
                                "start": 14,
                                "end": 22
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 17,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 16,
                                "start": 22,
                                "end": 30
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 80,
                                    "start": 30,
                                    "end": 36
                                },
                                "catchParameter": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 39
                                },
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 65,
                                                    "start": 42,
                                                    "end": 59
                                                },
                                                "asteriskToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "e",
                                                    "rawText": "e",
                                                    "flags": 96,
                                                    "start": 59,
                                                    "end": 61
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 61,
                                                    "end": 61
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 64,
                                                        "end": 64
                                                    },
                                                    "flags": 32,
                                                    "start": 63,
                                                    "end": 65
                                                },
                                                "returnType": null,
                                                "flags": 16,
                                                "start": 42,
                                                "end": 65
                                            }
                                        ],
                                        "flags": 17,
                                        "start": 42,
                                        "end": 65
                                    },
                                    "flags": 16,
                                    "start": 40,
                                    "end": 71
                                },
                                "flags": 80,
                                "start": 30,
                                "end": 71
                            },
                            "finallyKeyword": null,
                            "finallyBlock": null,
                            "flags": 16,
                            "start": 14,
                            "end": 71
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 71
                },
                "flags": 32,
                "start": 12,
                "end": 73
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "function f() {\n    try {\n    } catch (e) {\n        function e(){}\n    }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A block-scoped variable cannot shadow a catch clause binding - start: 59, end: 61

```

