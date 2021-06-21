# Kataw parser test case

## Input

`````js
type Expr<T> = FieldExpr<T> | LiteralExpr<T>;

type ConstantExpr<T> = Expr<Constant> | LiteralExpr<T>;
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "Expr",
                "rawText": "Expr",
                "flags": 96,
                "start": 4,
                "end": 9
            },
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
                                "start": 10,
                                "end": 11
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 10,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 10,
                    "end": 11
                },
                "flags": 2097152,
                "start": 9,
                "end": 12
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 12,
                "end": 14
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "FieldExpr",
                                "rawText": "FieldExpr",
                                "flags": 96,
                                "start": 14,
                                "end": 24
                            },
                            "typeParameters": {
                                "kind": 310,
                                "typeInstantiations": {
                                    "kind": 309,
                                    "types": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 25,
                                                    "end": 26
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 25,
                                                "end": 26
                                            },
                                            "flags": 2097152,
                                            "start": 25,
                                            "end": 26
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 25,
                                    "end": 26
                                },
                                "flags": 2097152,
                                "start": 24,
                                "end": 27
                            },
                            "flags": 2097152,
                            "start": 14,
                            "end": 27
                        },
                        {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "LiteralExpr",
                                "rawText": "LiteralExpr",
                                "flags": 96,
                                "start": 29,
                                "end": 41
                            },
                            "typeParameters": {
                                "kind": 310,
                                "typeInstantiations": {
                                    "kind": 309,
                                    "types": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 42,
                                                    "end": 43
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 42,
                                                "end": 43
                                            },
                                            "flags": 2097152,
                                            "start": 42,
                                            "end": 43
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 42,
                                    "end": 43
                                },
                                "flags": 2097152,
                                "start": 41,
                                "end": 44
                            },
                            "flags": 2097152,
                            "start": 29,
                            "end": 44
                        }
                    ],
                    "flags": 2097152,
                    "start": 27,
                    "end": 44
                },
                "flags": 2097152,
                "start": 14,
                "end": 44
            },
            "flags": 2097152,
            "start": 0,
            "end": 45
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 45,
                "end": 64
            },
            "name": {
                "kind": 134299649,
                "text": "ConstantExpr",
                "rawText": "ConstantExpr",
                "flags": 96,
                "start": 51,
                "end": 64
            },
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
                                "start": 65,
                                "end": 66
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 65,
                            "end": 66
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 65,
                    "end": 66
                },
                "flags": 2097152,
                "start": 64,
                "end": 67
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 67,
                "end": 69
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "Expr",
                                "rawText": "Expr",
                                "flags": 96,
                                "start": 69,
                                "end": 74
                            },
                            "typeParameters": {
                                "kind": 310,
                                "typeInstantiations": {
                                    "kind": 309,
                                    "types": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "Constant",
                                                    "rawText": "Constant",
                                                    "flags": 96,
                                                    "start": 75,
                                                    "end": 83
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 75,
                                                "end": 83
                                            },
                                            "flags": 2097152,
                                            "start": 75,
                                            "end": 83
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 75,
                                    "end": 83
                                },
                                "flags": 2097152,
                                "start": 74,
                                "end": 84
                            },
                            "flags": 2097152,
                            "start": 69,
                            "end": 84
                        },
                        {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "LiteralExpr",
                                "rawText": "LiteralExpr",
                                "flags": 96,
                                "start": 86,
                                "end": 98
                            },
                            "typeParameters": {
                                "kind": 310,
                                "typeInstantiations": {
                                    "kind": 309,
                                    "types": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 99,
                                                    "end": 100
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 99,
                                                "end": 100
                                            },
                                            "flags": 2097152,
                                            "start": 99,
                                            "end": 100
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 99,
                                    "end": 100
                                },
                                "flags": 2097152,
                                "start": 98,
                                "end": 101
                            },
                            "flags": 2097152,
                            "start": 86,
                            "end": 101
                        }
                    ],
                    "flags": 2097152,
                    "start": 84,
                    "end": 101
                },
                "flags": 2097152,
                "start": 69,
                "end": 101
            },
            "flags": 2097153,
            "start": 45,
            "end": 102
        }
    ],
    "isModule": false,
    "source": "type Expr<T> = FieldExpr<T> | LiteralExpr<T>;\n\ntype ConstantExpr<T> = Expr<Constant> | LiteralExpr<T>;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 102
}
```

### Printed

```javascript

 type Expr<T> = FieldExpr, LiteralExpr, type ConstantExpr<T> = Expr, LiteralExpr 
```

### Diagnostics

```javascript
✔ No errors
```

