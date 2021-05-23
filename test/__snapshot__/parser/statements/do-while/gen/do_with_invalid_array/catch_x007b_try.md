# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: y
> :: test: do with invalid array
> :: case: catch { try
## Input

`````js
do while [catch] catch { try
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
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 134299649,
                            "text": "try",
                            "rawText": "try",
                            "flags": 96,
                            "start": 24,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 24,
                    "end": 28
                },
                "flags": 48,
                "start": 22,
                "end": 28
            },
            "whileKeyword": null,
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 2,
                    "end": 8
                },
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 10
                },
                "statement": {
                    "kind": 159,
                    "tryKeyword": null,
                    "block": {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 15,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 15
                    },
                    "catchClause": null,
                    "finallyKeyword": null,
                    "finallyBlock": {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 16,
                    "start": 10,
                    "end": 16
                },
                "flags": 16,
                "start": 2,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "do while [catch] catch { try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 8, end: 10
✖ Did you forgot a ']' to match the `[` token? - start: 10, end: 15
✖ 'try' expected - start: 10, end: 15
✖ Property definition expected. Did you mean to use a ':'? - start: 28, end: 28
✖ ',' expected - start: 28, end: 28
✖ The parser expected to find a '}' to match the '{' token here - start: 28, end: 28

```

