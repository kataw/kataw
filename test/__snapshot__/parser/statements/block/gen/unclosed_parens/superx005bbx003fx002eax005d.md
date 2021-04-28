# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: super[b?.a]
## Input

`````js
{( super[b?.a]
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
                            "kind": 121,
                            "expression": {
                                "kind": 130,
                                "member": {
                                    "kind": 225,
                                    "superKeyword": {
                                        "kind": 4259935,
                                        "flags": 2,
                                        "start": 0,
                                        "end": 8
                                    },
                                    "flags": 768,
                                    "start": 2,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 10,
                                        "start": 0,
                                        "end": 12
                                    },
                                    "member": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "chain": {
                                        "kind": 206,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "flags": 256,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "flags": 256,
                                        "start": 12,
                                        "end": 13
                                    },
                                    "flags": 256,
                                    "start": 9,
                                    "end": 13
                                },
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
    "text": "{( super[b?.a]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 8, end: 9

```

