# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: interface x {
## Input

`````js
{[ interface x {
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
                                        "kind": 134299649,
                                        "text": "interface",
                                        "rawText": "interface",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 12
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 14
                                    },
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "start": 14,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "{[ interface x {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 12, end: 14
✖ ',' expected - start: 14, end: 16
✖ ',' expected - start: 16, end: 16

```

