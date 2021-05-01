# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in array
> :: case: [x].length
## Input

`````js
[ [x].length ]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "original": "x",
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 3,
                                            "end": 4
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 3,
                                    "end": 4
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 5
                            },
                            "expression": {
                                "kind": 134299649,
                                "original": "length",
                                "text": "length",
                                "rawText": "length",
                                "flags": 96,
                                "start": 6,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "[ [x].length ]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
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

