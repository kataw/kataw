# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs empty arr with number init
> :: case: false
## Input

`````js
for ([] = 0 in {});
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
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 6,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 768,
                        "start": 11,
                        "end": 14
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 14,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 9,
                    "end": 17
                },
                "flags": 256,
                "start": 5,
                "end": 17
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 17,
                "end": 17
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 18,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "for ([] = 0 in {});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 17,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 18
        }
    ],
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

