# Kataw parser test case

## Input

`````js
({*method(public){}});
({method(protected){}});
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 2,
                                    "end": 3
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 9
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "public",
                                                "rawText": "public",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 16
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 224,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 17
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
                                            "start": 18,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 19
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 19
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 20
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
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
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "protected",
                                                "rawText": "protected",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 41
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 42
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
                                            "start": 43,
                                            "end": 43
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 44
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 44
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 24,
                    "end": 45
                },
                "flags": 22,
                "transformFlags": 0,
                "start": 35,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 22,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "({*method(public){}});\n({method(protected){}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

({* method(public) {}});
({method(protected) {}});

```

### Diagnostics

```javascript
✔ No errors
```

