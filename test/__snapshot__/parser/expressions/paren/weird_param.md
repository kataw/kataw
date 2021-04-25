# Kataw parser test case

## Input

`````js
(a, 1, "c", d, e, f) => x;
`````

## Output

### Hybrid CST

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
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        {
                            "kind": 201392131,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 6,
                            "end": 10
                        },
                        {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        }
                    ],
                    "flags": 256,
                    "start": 0,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 23,
                "end": 25
            },
            "flags": 128,
            "start": 23,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "(a, 1, \"c\", d, e, f) => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 20, end: 23
@{x2716}@ Statement expected - start: 20, end: 23

```

