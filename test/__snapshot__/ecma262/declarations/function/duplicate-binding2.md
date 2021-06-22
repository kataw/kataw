# Kataw parser test case

## Input

`````js
function f() { { function* x() {} { var x } }}
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
                "end": 12
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
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 25
                                        },
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 32,
                                                "end": 32
                                            },
                                            "flags": 32,
                                            "start": 30,
                                            "end": 33
                                        },
                                        "returnType": null,
                                        "flags": 272,
                                        "start": 16,
                                        "end": 33
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
                                                        "start": 35,
                                                        "end": 39
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
                                                                    "start": 39,
                                                                    "end": 41
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 39,
                                                                "end": 41
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 39,
                                                        "end": 41
                                                    },
                                                    "flags": 16,
                                                    "start": 35,
                                                    "end": 41
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 35,
                                            "end": 41
                                        },
                                        "flags": 16,
                                        "start": 33,
                                        "end": 43
                                    }
                                ],
                                "flags": 16,
                                "start": 16,
                                "end": 43
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 45
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 45
                },
                "flags": 32,
                "start": 12,
                "end": 46
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "function f() { { function* x() {} { var x } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 39, end: 41

```

