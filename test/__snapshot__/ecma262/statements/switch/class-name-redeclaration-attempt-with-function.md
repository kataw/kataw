# Kataw parser test case

## Input

`````js
switch (0) { case 1: class f {} default: function f() {} }
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
                                "kind": 178,
                                "declareKeyword": null,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 80,
                                    "start": 20,
                                    "end": 26
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 28
                                },
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 303,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 30,
                                        "end": 30
                                    },
                                    "flags": 28,
                                    "start": 32,
                                    "end": 31
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 31
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 31
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 31,
                            "end": 39
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 39,
                            "end": 40
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 40,
                                    "end": 49
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 49,
                                    "end": 51
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 52,
                                    "end": 52
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 55,
                                        "end": 55
                                    },
                                    "flags": 32,
                                    "start": 53,
                                    "end": 56
                                },
                                "returnType": null,
                                "flags": 16,
                                "start": 40,
                                "end": 56
                            }
                        ],
                        "flags": 16,
                        "start": 31,
                        "end": 56
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 58
            },
            "flags": 80,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "switch (0) { case 1: class f {} default: function f() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 49, end: 51

```

