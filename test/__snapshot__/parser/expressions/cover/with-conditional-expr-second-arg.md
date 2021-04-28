# Kataw parser test case

## Input

`````js
(x, a?:c:{})
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 3,
                                "end": 5
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 5,
                                "start": 0,
                                "end": 6
                            },
                            "consequent": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 6,
                                "end": 6
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 6,
                                "start": 0,
                                "end": 7
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 768,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 8
                        }
                    ],
                    "flags": 256,
                    "start": 0,
                    "end": 8
                },
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 10,
                "end": 10
            },
            "flags": 128,
            "start": 9,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "(x, a?:c:{})",
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
✖ Expression expected - start: 6, end: 7
✖ Statement expected - start: 8, end: 9
✖ Statement expected - start: 11, end: 12

```

