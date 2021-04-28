# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: super
## Input

`````js
{ { { super
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
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 203,
                                                    "chain": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 768,
                                                            "start": 5,
                                                            "end": 11
                                                        },
                                                        "flags": 768,
                                                        "start": 5,
                                                        "end": 11
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 12,
                                                        "start": 11,
                                                        "end": 11
                                                    },
                                                    "flags": 256,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "flags": 128,
                                                "start": 5,
                                                "end": 11
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "flags": 128,
                                    "start": 3,
                                    "end": 11
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 3,
                            "end": 11
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 11
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "{ { { super",
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
✖ 'super' must be followed by an argument list or member access. - start: 11, end: 11
✖ Dot property must be an identifier - start: 11, end: 11

```

