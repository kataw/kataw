# Kataw parser test case

## Input

`````js
for(t`${x in y}`;;);
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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "t",
                    "rawText": "t",
                    "flags": 768,
                    "start": 4,
                    "end": 5
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 228,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 9
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 512,
                                    "start": 9,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 12,
                                    "end": 14
                                },
                                "flags": 256,
                                "start": 8,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 14
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 16
                },
                "flags": 256,
                "start": 4,
                "end": 16
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 19,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "for(t`${x in y}`;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

