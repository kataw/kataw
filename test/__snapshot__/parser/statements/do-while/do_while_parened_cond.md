# Kataw parser test case

## Input

`````js
do {} while ((""));
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 67174403,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 14,
                    "end": 16
                },
                "flags": 256,
                "start": 13,
                "end": 17
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 5,
                "end": 11
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "flags": 128,
                "start": 2,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "do {} while ((\"\"));",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

