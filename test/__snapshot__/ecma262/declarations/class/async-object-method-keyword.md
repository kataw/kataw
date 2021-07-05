# Kataw parser test case

## Input

`````js
({async delete() { }});
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
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 2,
                                    "end": 7
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "delete",
                                        "rawText": "delete",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 15,
                                        "end": 16
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 18,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 20
                                    },
                                    "flags": 288,
                                    "start": 14,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 20
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 21
                },
                "flags": 0,
                "start": 34,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "({async delete() { }});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

({ async delete(){} });
```

### Diagnostics

```javascript
✔ No errors
```

