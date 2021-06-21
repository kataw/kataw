# Kataw parser test case

## Input

`````js
(
  { a, b }: T,
): T => {};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 7
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 5,
                                "end": 10
                            },
                            "flags": 49,
                            "start": 1,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 2097152,
                            "start": 13,
                            "end": 15
                        },
                        "right": null,
                        "flags": 32,
                        "start": 0,
                        "end": 15
                    }
                ],
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 144,
                        "typeName": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 19,
                            "end": 21
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 2097152,
                    "start": 19,
                    "end": 21
                },
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 21,
                    "end": 24
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 27
                },
                "flags": 34,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "(\n  { a, b }: T,\n): T => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

({ a, b }) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

