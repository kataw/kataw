# Kataw parser test case

## Input

`````js
({;x:y,a:b})
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
                    "flags": 32,
                    "start": 0,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 3,
                "end": 4
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "x",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 3,
                    "end": 4
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 4,
                "end": 5
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 5,
                            "end": 6
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        }
                    ],
                    "flags": 32,
                    "start": 5,
                    "end": 8
                },
                "flags": 16,
                "start": 5,
                "end": 8
            },
            "flags": 16,
            "start": 3,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 9,
                "end": 10
            },
            "flags": 16,
            "start": 9,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "({;x:y,a:b})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 8, end: 9
✖ Statement expected - start: 8, end: 9
✖ Statement expected - start: 10, end: 11
✖ Statement expected - start: 11, end: 12

```

