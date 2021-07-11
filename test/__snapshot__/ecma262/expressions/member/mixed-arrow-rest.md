# Kataw parser test case

## Input

`````js
a[{...()=>{}}.m()]
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
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 3,
                                            "end": 6
                                        },
                                        "argument": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 7,
                                                "end": 7
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 8,
                                                "end": 10
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 11,
                                                    "end": 11
                                                },
                                                "flags": 32,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "flags": 32,
                                            "start": 6,
                                            "end": 12
                                        },
                                        "flags": 1073741856,
                                        "start": 3,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 3,
                                "end": 12
                            },
                            "flags": 48,
                            "start": 2,
                            "end": 13
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "m",
                            "rawText": "m",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "flags": 48,
                        "start": 2,
                        "end": 15
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 268435488,
                    "start": 2,
                    "end": 17
                },
                "flags": 536870944,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "a[{...()=>{}}.m()]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  a[{ ...() => {} }.m()];

```

### Diagnostics

```javascript
✔ No errors
```

