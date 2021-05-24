# Kataw parser test case

## Input

`````js
x= { prototype(){} }
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 2
                },
                "right": {
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
                                        "text": "prototype",
                                        "rawText": "prototype",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
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
                                            "start": 17,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 14,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 4,
                        "end": 18
                    },
                    "flags": 48,
                    "start": 2,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "x= { prototype(){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

x = { prototype() {} };
```

### Diagnostics

```javascript
✔ No errors
```

