# Kataw parser test case

## Input

`````js
switch (0) { case 1: var f; default: function* f() {} }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
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
                            "flags": 80,
                            "start": 12,
                            "end": 17
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 19,
                            "end": 20
                        },
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "start": 20,
                                    "end": 24
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
                                                "start": 24,
                                                "end": 26
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 24,
                                            "end": 26
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 24,
                                    "end": 26
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 27
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 27
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 27,
                            "end": 35
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 35,
                            "end": 36
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 36,
                                    "end": 45
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 45,
                                    "end": 46
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 46,
                                    "end": 48
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 48,
                                    "end": 50
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 52,
                                        "end": 52
                                    },
                                    "flags": 32,
                                    "start": 50,
                                    "end": 53
                                },
                                "returnType": null,
                                "flags": 272,
                                "start": 36,
                                "end": 53
                            }
                        ],
                        "flags": 16,
                        "start": 27,
                        "end": 53
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 55
            },
            "flags": 80,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "switch (0) { case 1: var f; default: function* f() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 46, end: 48

```

