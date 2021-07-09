# Kataw parser test case

## Input

`````js
x({async foo(){}, bar(){}});
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
                    "transformFlags": 0,
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
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 8
                                        },
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
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 12
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 288,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 14
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 15
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 16
                                            },
                                            "flags": 288,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 16
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
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 21
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 24,
                                                    "end": 24
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 25
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 2,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 26
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "x({async foo(){}, bar(){}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
x({ async foo() {}, bar() {} });
```

### Diagnostics

```javascript
✔ No errors
```

