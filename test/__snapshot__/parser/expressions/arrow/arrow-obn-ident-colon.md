# Kataw parser test case

## Input

`````js
({ident: {x: y}}) => x;

({ident: {x}}) => x;

({a} = b,) => {};
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
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 17,
                    "end": 20
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 204,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "ident",
                                        "rawText": "ident",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 7
                                    },
                                    "value": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 12,
                                                        "end": 14
                                                    },
                                                    "flags": 32,
                                                    "start": 10,
                                                    "end": 14
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 10,
                                            "end": 14
                                        },
                                        "flags": 48,
                                        "start": 8,
                                        "end": 15
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 2,
                                    "end": 15
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 16
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "flags": 34,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 39,
                    "end": 42
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 204,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "ident",
                                        "rawText": "ident",
                                        "flags": 96,
                                        "start": 27,
                                        "end": 32
                                    },
                                    "value": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 35,
                                                    "end": 36
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 35,
                                            "end": 36
                                        },
                                        "flags": 48,
                                        "start": 33,
                                        "end": 37
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 27,
                                    "end": 37
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 27,
                            "end": 37
                        },
                        "flags": 32,
                        "start": 26,
                        "end": 38
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 42,
                    "end": 44
                },
                "flags": 34,
                "start": 23,
                "end": 44
            },
            "flags": 16,
            "start": 23,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 57,
                    "end": 60
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 49,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 49,
                                "end": 50
                            },
                            "flags": 32,
                            "start": 48,
                            "end": 51
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 53,
                            "end": 55
                        },
                        "flags": 32,
                        "start": 48,
                        "end": 55
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 62,
                        "end": 62
                    },
                    "flags": 32,
                    "start": 60,
                    "end": 63
                },
                "flags": 34,
                "start": 45,
                "end": 63
            },
            "flags": 16,
            "start": 45,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "({ident: {x: y}}) => x;\n\n({ident: {x}}) => x;\n\n({a} = b,) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

({
  ident: { x: y }
}) =>  x;
({
  ident: { x }
}) =>  x;
({
  a
} = b) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

