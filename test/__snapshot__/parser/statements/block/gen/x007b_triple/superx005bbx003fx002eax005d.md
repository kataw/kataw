# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: super[b?.a]
## Input

`````js
{ { { super[b?.a]
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
                                                    "kind": 130,
                                                    "member": {
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
                                                        "kind": 205,
                                                        "chainToken": {
                                                            "kind": 393240,
                                                            "flags": 768,
                                                            "start": 13,
                                                            "end": 15
                                                        },
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 768,
                                                            "start": 12,
                                                            "end": 13
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
                                                                    "start": 15,
                                                                    "end": 16
                                                                },
                                                                "flags": 256,
                                                                "start": 15,
                                                                "end": 16
                                                            },
                                                            "flags": 256,
                                                            "start": 15,
                                                            "end": 16
                                                        },
                                                        "flags": 256,
                                                        "start": 12,
                                                        "end": 16
                                                    },
                                                    "flags": 256,
                                                    "start": 5,
                                                    "end": 17
                                                },
                                                "flags": 128,
                                                "start": 5,
                                                "end": 17
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 5,
                                        "end": 17
                                    },
                                    "flags": 128,
                                    "start": 3,
                                    "end": 17
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 3,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 17
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "{ { { super[b?.a]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 11, end: 12

```

