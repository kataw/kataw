# Kataw parser test case

## Input

`````js
for ({a: b.c}() of d) e
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 131,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 81921,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 768,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 6,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 6,
                                    "end": 7
                                },
                                "flags": 256,
                                "start": 6,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 6,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 13
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 14,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "expression": {
                "kind": 81921,
                "text": "d",
                "rawText": "d",
                "flags": 768,
                "start": 18,
                "end": 20
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "text": "e",
                    "rawText": "e",
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "flags": 128,
                "start": 21,
                "end": 23
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "for ({a: b.c}() of d) e",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 63,
            "error": "Invalid left-hand side in for-of loop",
            "start": 18,
            "end": 20
        }
    ],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

