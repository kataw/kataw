# Kataw parser test case

## Input

`````js
({a,b=b,a:c,[a]:[d]})=>0;
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
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 3
                                },
                                {
                                    "kind": 205,
                                    "left": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 4,
                                        "end": 5
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 6,
                                        "end": 7
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 4,
                                    "end": 7
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 81921,
                                        "value": "c",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 8,
                                    "end": 11
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": "d",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 17,
                                                    "end": 18
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "right": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 19
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 20
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": 0,
                    "autofix": 0,
                    "flags": 768,
                    "start": 23,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "({a,b=b,a:c,[a]:[d]})=>0;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

