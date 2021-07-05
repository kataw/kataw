# Kataw parser test case

## Input

`````js
do {} while ((""));
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "start": 2,
                "end": 5
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 5,
                "end": 11
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392131,
                    "text": "",
                    "rawText": "\"\"",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 13,
                "start": 32,
                "end": 17
            },
            "flags": 80,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "do {} while ((\"\"));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

do  {}
while (("\"\""));
```

### Diagnostics

```javascript
✔ No errors
```

