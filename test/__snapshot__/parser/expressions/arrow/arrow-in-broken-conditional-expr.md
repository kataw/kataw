# Kataw parser test case

## Input

`````js
bar ? (=> 0) : baz;
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 768,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 7,
                        "end": 7
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 7
                },
                "colonToken": null,
                "alternate": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "baz",
                "rawText": "baz",
                "flags": 768,
                "start": 14,
                "end": 18
            },
            "flags": 128,
            "start": 14,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "bar ? (=> 0) : baz;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 7, end: 9
✖ Statement expected - start: 11, end: 12
✖ Statement expected - start: 12, end: 14

```

