# Kataw parser test case

## Input

`````js
for ([a.b](foo) of c) d
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 81921,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 6,
                                    "end": 7
                                },
                                "expression": {
                                    "kind": 81921,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 9
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 6,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 10
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 81921,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 11,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 11,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "expression": {
                "kind": 81921,
                "text": "c",
                "rawText": "c",
                "flags": 768,
                "start": 18,
                "end": 20
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "text": "d",
                    "rawText": "d",
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
    "text": "for ([a.b](foo) of c) d",
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

