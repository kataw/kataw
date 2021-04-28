# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: super
## Input

`````js
{ super
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
                            "kind": 203,
                            "chain": {
                                "kind": 225,
                                "superKeyword": {
                                    "kind": 4259935,
                                    "flags": 1,
                                    "start": 0,
                                    "end": 7
                                },
                                "flags": 768,
                                "start": 1,
                                "end": 7
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 7
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "{ super",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 7, end: 7
✖ Dot property must be an identifier - start: 7, end: 7

```

