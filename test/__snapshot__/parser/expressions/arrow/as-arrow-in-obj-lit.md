# Kataw parser test case

## Input

`````js
x = {arrow: (x) => ok};

x = {arrow: (x, y) => ok};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 271,
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 13,
                                            "end": 14
                                        }
                                    ],
                                    "asyncToken": false,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 81921,
                                        "value": "ok",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 11,
                                    "end": 21
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "arrow",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 10
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 5,
                        "end": 21
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 22
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 23,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 23,
                    "end": 28
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 271,
                                    "typeParameters": null,
                                    "parameters": [
                                        [
                                            {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 38,
                                                "end": 39
                                            },
                                            {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 40,
                                                "end": 42
                                            }
                                        ]
                                    ],
                                    "asyncToken": false,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 81921,
                                        "value": "ok",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 46,
                                        "end": 49
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 49
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "arrow",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 30,
                                    "end": 35
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 30,
                                "end": 49
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 30,
                        "end": 49
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 28,
                    "end": 50
                },
                "autofix": 0,
                "flags": 256,
                "start": 23,
                "end": 50
            },
            "autofix": 0,
            "flags": 128,
            "start": 23,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "x = {arrow: (x) => ok};\n\nx = {arrow: (x, y) => ok};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

