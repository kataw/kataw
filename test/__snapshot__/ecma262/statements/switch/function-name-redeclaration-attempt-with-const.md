# Kataw parser test case

## Input

`````js
switch (0) { case 1: function f() {} default: const f = 0 }
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
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 29
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 32,
                                    "end": 32
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 36
                                },
                                "returnType": null,
                                "flags": 16,
                                "start": 20,
                                "end": 36
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 36
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 36,
                            "end": 44
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 44,
                            "end": 45
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 37757004,
                                    "flags": 80,
                                    "start": 45,
                                    "end": 51
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
                                                "start": 51,
                                                "end": 53
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 55,
                                                "end": 57
                                            },
                                            "flags": 16,
                                            "start": 51,
                                            "end": 57
                                        }
                                    ],
                                    "flags": 16777232,
                                    "start": 51,
                                    "end": 57
                                },
                                "flags": 33554448,
                                "start": 45,
                                "end": 57
                            }
                        ],
                        "flags": 16,
                        "start": 36,
                        "end": 57
                    }
                ],
                "flags": 16,
                "start": 12,
                "end": 57
            },
            "flags": 80,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "switch (0) { case 1: function f() {} default: const f = 0 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 51, end: 53

```

