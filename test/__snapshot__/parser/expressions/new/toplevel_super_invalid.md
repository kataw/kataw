# Kataw parser test case

## Input

`````js
new super
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 203,
                    "chain": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 3,
                            "start": 0,
                            "end": 9
                        },
                        "flags": 768,
                        "start": 3,
                        "end": 9
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 9
                },
                "argumentList": null,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "new super",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 9, end: 9
✖ Dot property must be an identifier - start: 9, end: 9

```

