# Kataw parser test case

## Input

`````js
{ {var x} async function x() {} }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
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
                                        "flags": 0,
                                        "start": 3,
                                        "end": 6
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
                                                    "start": 6,
                                                    "end": 8
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 6,
                                                "end": 8
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 8
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 8
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 9
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 9,
                            "end": 15
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 0,
                            "start": 15,
                            "end": 24
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 24,
                            "end": 26
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 26,
                            "end": 28
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 30,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 28,
                            "end": 31
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 144,
                        "start": 9,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "{ {var x} async function x() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 24, end: 26

```

