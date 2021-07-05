# Kataw parser test case

## Input

`````js
wrap({foo(){}, bar(){}});
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
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
                    "start": 0,
                    "end": 4
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
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 6,
                                                "end": 9
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 12,
                                                    "end": 12
                                                },
                                                "flags": 32,
                                                "start": 11,
                                                "end": 13
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 13
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 18
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 19,
                                                "end": 20
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 21,
                                                    "end": 21
                                                },
                                                "flags": 32,
                                                "start": 20,
                                                "end": 22
                                            },
                                            "flags": 32,
                                            "start": 18,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "start": 14,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 22
                            },
                            "flags": 48,
                            "start": 5,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 23
                },
                "flags": 268435488,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "wrap({foo(){}, bar(){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

wrap({foo() {}, bar() {}});
```

### Diagnostics

```javascript
✔ No errors
```

