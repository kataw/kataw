# Kataw parser test case

## Input

`````js
{ { var x } async function x() {} }
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
                                        "flags": 80,
                                        "start": 3,
                                        "end": 7
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
                                                    "start": 7,
                                                    "end": 9
                                                },
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 7,
                                                "end": 9
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 9
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 11
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 11,
                            "end": 17
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 17,
                            "end": 26
                        },
                        "asteriskToken": null,
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
                        "flags": 144,
                        "start": 11,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "{ { var x } async function x() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 26, end: 28

```

