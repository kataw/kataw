# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: super[b?.a]
## Input

`````js
{ [catch] super[b?.a]
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
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 3
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 3
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 8,
                    "end": 8
                },
                "flags": 128,
                "start": 8,
                "end": 8
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 9,
                    "end": 9
                },
                "flags": 128,
                "start": 9,
                "end": 9
            },
            "flags": 128,
            "start": 3,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 225,
                    "superKeyword": {
                        "kind": 4259935,
                        "flags": 768,
                        "start": 9,
                        "end": 15
                    },
                    "flags": 768,
                    "start": 9,
                    "end": 15
                },
                "expression": {
                    "kind": 205,
                    "member": {
                        "kind": 81921,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 16,
                        "end": 17
                    },
                    "chain": {
                        "kind": 206,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 19,
                                "end": 20
                            },
                            "flags": 256,
                            "start": 19,
                            "end": 20
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 20
                    },
                    "flags": 256,
                    "start": 16,
                    "end": 20
                },
                "flags": 256,
                "start": 9,
                "end": 21
            },
            "flags": 128,
            "start": 9,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "{ [catch] super[b?.a]",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 15,
            "end": 16
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: super[b?.a]
## Input

`````js
{ [catch] super[b?.a]
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: super[b?.a]
## Input

`````js
{ [catch] super[b?.a]
`````
```

