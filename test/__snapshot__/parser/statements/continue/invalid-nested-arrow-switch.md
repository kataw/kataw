# Kataw parser test case

## Input

`````js
() => { switch (x){ case z:       continue y   }}
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2,
                    "end": 5
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 160,
                                "switchKeyword": {
                                    "kind": 37757024,
                                    "flags": 80,
                                    "start": 7,
                                    "end": 14
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 17
                                },
                                "caseBlock": {
                                    "kind": 152,
                                    "clauses": [
                                        {
                                            "kind": 175,
                                            "caseKeyword": {
                                                "kind": 4194382,
                                                "flags": 80,
                                                "start": 19,
                                                "end": 24
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 26,
                                                "end": 27
                                            },
                                            "statements": [
                                                {
                                                    "kind": 172,
                                                    "continueKeyword": {
                                                        "kind": 37757009,
                                                        "flags": 80,
                                                        "start": 27,
                                                        "end": 42
                                                    },
                                                    "label": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 42,
                                                        "end": 44
                                                    },
                                                    "flags": 16,
                                                    "start": 27,
                                                    "end": 44
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 19,
                                            "end": 44
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 18,
                                    "end": 48
                                },
                                "flags": 80,
                                "start": 7,
                                "end": 48
                            }
                        ],
                        "flags": 32,
                        "start": 7,
                        "end": 48
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 49
                },
                "flags": 32,
                "start": 0,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "() => { switch (x){ case z:       continue y   }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 27, end: 42
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 27, end: 48

```

