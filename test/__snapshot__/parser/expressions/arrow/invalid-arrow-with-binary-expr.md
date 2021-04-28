# Kataw parser test case

## Input

`````js
(localVar |= defaultValue) => {}
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
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "localVar",
                        "rawText": "localVar",
                        "flags": 768,
                        "start": 1,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4136,
                        "flags": 768,
                        "start": 9,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "defaultValue",
                        "rawText": "defaultValue",
                        "flags": 768,
                        "start": 12,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 31,
                "end": 31
            },
            "flags": 128,
            "start": 29,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "(localVar |= defaultValue) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 26, end: 29

```

