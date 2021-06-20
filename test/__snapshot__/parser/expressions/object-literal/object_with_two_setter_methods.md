# Kataw parser test case

## Input

`````js
x({set [foo](b){}, set [bar](d){}});
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
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": {
                                            "kind": 16499,
                                            "flags": 96,
                                            "start": 3,
                                            "end": 6
                                        },
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 8,
                                                    "end": 11
                                                },
                                                "flags": 32,
                                                "start": 6,
                                                "end": 12
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 13,
                                                        "end": 14
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 608,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 16,
                                                    "end": 16
                                                },
                                                "flags": 32,
                                                "start": 15,
                                                "end": 17
                                            },
                                            "flags": 544,
                                            "start": 12,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 17
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": {
                                            "kind": 16499,
                                            "flags": 96,
                                            "start": 18,
                                            "end": 22
                                        },
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "start": 24,
                                                    "end": 27
                                                },
                                                "flags": 32,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "d",
                                                        "rawText": "d",
                                                        "flags": 96,
                                                        "start": 29,
                                                        "end": 30
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 608,
                                                "start": 29,
                                                "end": 31
                                            },
                                            "returnType": null,
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
                                                "start": 31,
                                                "end": 33
                                            },
                                            "flags": 544,
                                            "start": 28,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 33
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 3,
                                "end": 33
                            },
                            "flags": 48,
                            "start": 2,
                            "end": 34
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 34
                },
                "flags": 268435488,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "x({set [foo](b){}, set [bar](d){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

x({ set [foo] {}, set [bar] {} });
```

### Diagnostics

```javascript
✔ No errors
```

