# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: { /a/iui
## Input

`````js
{[ { /a/iui
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
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 4,
                                            "end": 4
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 4
                                    },
                                    {
                                        "kind": 221,
                                        "text": "/a/iui",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 11
                    }
                ],
                "multiLine": false,
                "flags": 16,
                "start": 1,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "{[ { /a/iui",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 4, end: 11
✖ ',' expected - start: 11, end: 11

```

