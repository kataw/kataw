# Kataw parser test case

## Input

`````js
a: { a: x }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 0,
                "end": 1
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "a",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 1
                },
                {
                    "kind": 256,
                    "label": "a",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 4,
                    "end": 6
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 1,
                "end": 2
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 4,
                                "end": 6
                            },
                            "labels": [
                                {
                                    "kind": 256,
                                    "label": "a",
                                    "iterationStatement": false,
                                    "flags": 16,
                                    "start": 0,
                                    "end": 1
                                },
                                {
                                    "kind": 256,
                                    "label": "a",
                                    "iterationStatement": false,
                                    "flags": 16,
                                    "start": 4,
                                    "end": 6
                                }
                            ],
                            "colonToken": {
                                "kind": 21,
                                "flags": 0,
                                "start": 6,
                                "end": 7
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 9
                                },
                                "flags": 16,
                                "start": 7,
                                "end": 9
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 9
                        }
                    ],
                    "flags": 16,
                    "start": 4,
                    "end": 9
                },
                "flags": 16,
                "start": 2,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "a: { a: x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate label - start: 4, end: 7

```

