# Kataw parser test case

## Input

`````js
x = `1 ${ yield } 2 ${ 3 } 4`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 458760,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 226,
                    "member": {
                        "kind": 253,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 3,
                        "end": 3
                    },
                    "template": {
                        "kind": 227,
                        "spans": [
                            {
                                "kind": 228,
                                "rawText": "1 ",
                                "text": "1 ",
                                "expression": {
                                    "kind": 81921,
                                    "value": "yield",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 9,
                                    "end": 15
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 3,
                                "end": 15
                            },
                            {
                                "kind": 228,
                                "rawText": " 2 ",
                                "text": " 2 ",
                                "expression": {
                                    "kind": 81921,
                                    "value": 3,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 22,
                                    "end": 24
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 24
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "rawText": " 4",
                            "text": " 4",
                            "autofix": 0,
                            "flags": 256,
                            "start": 24,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 3,
                        "end": 29
                    },
                    "optional": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "x = `1 ${ yield } 2 ${ 3 } 4`",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 3,
            "end": 9
        }
    ],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

