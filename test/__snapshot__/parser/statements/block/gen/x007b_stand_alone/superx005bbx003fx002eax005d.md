# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: super[b?.a]
## Input

`````js
{ super[b?.a]
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
                            "kind": 130,
                            "member": {
                                "kind": 225,
                                "superKeyword": {
                                    "kind": 4259935,
                                    "flags": 768,
                                    "start": 1,
                                    "end": 7
                                },
                                "flags": 768,
                                "start": 1,
                                "end": 7
                            },
                            "expression": {
                                "kind": 205,
                                "member": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 9
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
                                            "start": 11,
                                            "end": 12
                                        },
                                        "flags": 256,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "flags": 256,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 256,
                                "start": 8,
                                "end": 12
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 13
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "{ super[b?.a]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ 'super' can only be referenced in members of derived classes or object literal expressions - start: 7, end: 8
@{x2716}@ Unexpected token. - start: 13, end: 13

```

