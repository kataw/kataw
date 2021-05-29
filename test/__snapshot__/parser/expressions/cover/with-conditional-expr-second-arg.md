# Kataw parser test case

## Input

`````js
(x, a?:c:{})
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
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 3,
                                "end": 5
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 5,
                                "end": 6
                            },
                            "consequent": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 6,
                                "end": 6
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 6,
                                "end": 7
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 8
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 10,
                "end": 10
            },
            "flags": 16,
            "start": 9,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "(x, a?:c:{})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 7
✖ Expected a ')' to match the '(' token here - start: 8, end: 9
✖ Declaration or statement expected - start: 11, end: 12

```

