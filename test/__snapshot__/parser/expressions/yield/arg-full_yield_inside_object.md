# Kataw parser test case

## Input

`````js
({ *g1() {   return {x: yield 1}  }})
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
                                    "start": 2,
                                    "end": 4
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "g1",
                                        "rawText": "g1",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 6
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "start": 10,
                                                        "end": 19
                                                    },
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
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "start": 21,
                                                                        "end": 22
                                                                    },
                                                                    "right": {
                                                                        "kind": 229,
                                                                        "yieldKeyword": {
                                                                            "kind": 8454253,
                                                                            "flags": 64,
                                                                            "start": 23,
                                                                            "end": 29
                                                                        },
                                                                        "delegate": false,
                                                                        "asteriskToken": null,
                                                                        "expression": {
                                                                            "kind": 201392130,
                                                                            "text": 1,
                                                                            "rawText": "1",
                                                                            "flags": 96,
                                                                            "start": 29,
                                                                            "end": 31
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 23,
                                                                        "end": 31
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 21,
                                                                    "end": 31
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 21,
                                                            "end": 31
                                                        },
                                                        "flags": 48,
                                                        "start": 19,
                                                        "end": 32
                                                    },
                                                    "flags": 80,
                                                    "start": 10,
                                                    "end": 32
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 10,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "start": 8,
                                        "end": 35
                                    },
                                    "flags": 160,
                                    "start": 6,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 35
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 36
                },
                "flags": 32,
                "start": 0,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "({ *g1() {   return {x: yield 1}  }})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

 ({ * g1() {
    return { x : yield 1 };
    } }); 
```

### Diagnostics

```javascript
✔ No errors
```

