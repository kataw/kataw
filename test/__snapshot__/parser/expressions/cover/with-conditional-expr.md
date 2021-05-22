# Kataw parser test case

## Input

`````js
(a?:b:c)
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
                    "kind": 132,
                    "flags": 32,
                    "start": 0,
                    "end": 3
                },
                "flags": 32,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "b",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 4,
                    "end": 5
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 5,
                "end": 6
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 6,
                    "end": 7
                },
                "flags": 16,
                "start": 6,
                "end": 7
            },
            "flags": 16,
            "start": 4,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "(a?:b:c)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 3, end: 4
✖ Expected '=>' - start: 3, end: 4
✖ Expected a `;` - start: 7, end: 8

```

