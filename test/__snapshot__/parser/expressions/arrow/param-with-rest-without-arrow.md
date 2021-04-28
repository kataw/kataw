# Kataw parser test case

## Input

`````js
(b, ...a) + 1
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
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 215,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 768,
                                    "start": 3,
                                    "end": 7
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 7,
                                    "end": 8
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 258,
                                "start": 3,
                                "end": 8
                            }
                        ],
                        "flags": 256,
                        "start": 0,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 768,
                    "start": 11,
                    "end": 13
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "(b, ...a) + 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
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

