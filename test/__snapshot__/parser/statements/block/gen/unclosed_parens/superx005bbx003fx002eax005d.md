# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: s
> :: test: unclosed parens
> :: case: super[b?.a]
## Input

`````js
{( super[b?.a]
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 536871042,
                                "member": {
                                    "kind": 225,
                                    "superKeyword": {
                                        "kind": 4259935,
                                        "flags": 96,
                                        "start": 2,
                                        "end": 8
                                    },
                                    "flags": 96,
                                    "start": 2,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "member": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "chain": {
                                        "kind": 206,
                                        "chain": {
                                            "kind": 536871114,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "flags": 32,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 12,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "{( super[b?.a]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 2, end: 9
✖ Expected a ')' to match the '(' token here - start: 14, end: 14

```

