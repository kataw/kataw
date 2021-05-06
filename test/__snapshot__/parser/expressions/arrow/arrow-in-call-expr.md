# Kataw parser test case

## Input

`````js
foo((x, y) => {});
foo(x,(y) => {});
foo(y,(y) => ok);
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 10,
                                "end": 13
                            },
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 9
                                    }
                                ]
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 15,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 4,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 18,
                    "end": 22
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 23,
                            "end": 24
                        },
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 28,
                                "end": 31
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 27
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 33,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 31,
                                "end": 34
                            },
                            "flags": 32,
                            "start": 25,
                            "end": 34
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 23,
                    "end": 34
                },
                "flags": 32,
                "start": 18,
                "end": 35
            },
            "flags": 16,
            "start": 18,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 36,
                    "end": 40
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 41,
                            "end": 42
                        },
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 46,
                                "end": 49
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 45
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "ok",
                                "rawText": "ok",
                                "flags": 96,
                                "start": 49,
                                "end": 52
                            },
                            "flags": 32,
                            "start": 43,
                            "end": 52
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 41,
                    "end": 52
                },
                "flags": 32,
                "start": 36,
                "end": 53
            },
            "flags": 16,
            "start": 36,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "foo((x, y) => {});\nfoo(x,(y) => {});\nfoo(y,(y) => ok);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

