# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: import.call
## Input

`````js
{[ import.call
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 207,
                                            "importKeyword": {
                                                "kind": 37814364,
                                                "flags": 768,
                                                "start": 2,
                                                "end": 9
                                            },
                                            "flags": 768,
                                            "start": 9,
                                            "end": 14
                                        },
                                        "flags": 128,
                                        "start": 9,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 14
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "{[ import.call",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ 'import.meta' must not contain escaped characters - start: 10, end: 14
@{x2716}@ Cannot use 'import.meta' outside a module - start: 14, end: 14
@{x2716}@ ',' expected - start: 14, end: 14

```

