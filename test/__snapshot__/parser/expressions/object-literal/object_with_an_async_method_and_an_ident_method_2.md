# Kataw parser test case

## Input

`````js
x({foo(){}, async bar(){}});
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
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 3,
                                                "end": 6
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 9,
                                                    "end": 9
                                                },
                                                "flags": 32,
                                                "start": 8,
                                                "end": 10
                                            },
                                            "flags": 32,
                                            "start": 6,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 10
                                    },
                                    {
                                        "kind": 257,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 17,
                                                "end": 21
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 288,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 24,
                                                    "end": 24
                                                },
                                                "flags": 32,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "flags": 288,
                                            "start": 21,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 3,
                                "end": 25
                            },
                            "flags": 48,
                            "start": 2,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 26
                },
                "flags": 268435488,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "x({foo(){}, async bar(){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

x({ foo {}, async bar {} });
```

### Diagnostics

```javascript
✔ No errors
```

