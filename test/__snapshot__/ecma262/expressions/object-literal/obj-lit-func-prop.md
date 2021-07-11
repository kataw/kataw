# Kataw parser test case

## Input

`````js
({f: function <T>() {}})
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 3
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 4,
                                        "end": 13
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": {
                                        "kind": 307,
                                        "declarations": {
                                            "kind": 337,
                                            "parameters": [
                                                {
                                                    "kind": 146,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 15,
                                                        "end": 16
                                                    },
                                                    "type": null,
                                                    "assignToken": null,
                                                    "defaultType": null,
                                                    "flags": 2097152,
                                                    "start": 15,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 15,
                                            "end": 16
                                        },
                                        "flags": 2097152,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 18,
                                        "end": 18
                                    },
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
                                        "start": 19,
                                        "end": 22
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 4,
                                    "end": 22
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 22
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "({f: function <T>() {}})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

({ f: function < T > () {} });

```

### Diagnostics

```javascript
✔ No errors
```

