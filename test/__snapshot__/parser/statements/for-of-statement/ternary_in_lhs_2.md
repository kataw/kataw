# Kataw parser test case

## Input

`````js
for (a ? b : c of x);
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
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 81921,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 5,
                    "end": 6
                },
                "questionToken": {
                    "kind": 22,
                    "flags": 768,
                    "start": 6,
                    "end": 8
                },
                "consequent": {
                    "kind": 81921,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 8,
                    "end": 10
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 10,
                    "end": 12
                },
                "alternate": {
                    "kind": 81921,
                    "text": "c",
                    "rawText": "c",
                    "flags": 768,
                    "start": 12,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "condition": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 17,
                "end": 19
            },
            "incrementor": {
                "kind": 81921,
                "text": "of",
                "rawText": "of",
                "flags": 768,
                "start": 14,
                "end": 17
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 20,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "for (a ? b : c of x);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 19
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

