# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: async try while { catch }
## Input

`````js
{ { { async try while { catch }
`````

## Output
### CST

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
                                                    "kind": 134299649,
                                                    "text": "async",
                                                    "rawText": "async",
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 11
                                            },
                                            {
                                                "kind": 159,
                                                "tryKeyword": {
                                                    "kind": 37757027,
                                                    "flags": 0,
                                                    "start": 11,
                                                    "end": 15
                                                },
                                                "block": {
                                                    "kind": 249,
                                                    "block": {
                                                        "kind": 124,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 15,
                                                        "end": 15
                                                    },
                                                    "flags": 16,
                                                    "start": 15,
                                                    "end": 15
                                                },
                                                "catchClause": null,
                                                "finallyKeyword": null,
                                                "finallyBlock": {
                                                    "kind": 249,
                                                    "block": {
                                                        "kind": 124,
                                                        "statements": [
                                                            {
                                                                "kind": 159,
                                                                "tryKeyword": null,
                                                                "block": {
                                                                    "kind": 249,
                                                                    "block": {
                                                                        "kind": 124,
                                                                        "statements": [],
                                                                        "flags": 16,
                                                                        "start": 29,
                                                                        "end": 29
                                                                    },
                                                                    "flags": 16,
                                                                    "start": 29,
                                                                    "end": 29
                                                                },
                                                                "catchClause": null,
                                                                "finallyKeyword": null,
                                                                "finallyBlock": {
                                                                    "kind": 249,
                                                                    "block": {
                                                                        "kind": 124,
                                                                        "statements": [],
                                                                        "flags": 16,
                                                                        "start": 31,
                                                                        "end": 31
                                                                    },
                                                                    "flags": 16,
                                                                    "start": 31,
                                                                    "end": 31
                                                                },
                                                                "flags": 16,
                                                                "start": 23,
                                                                "end": 31
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 23,
                                                        "end": 31
                                                    },
                                                    "flags": 16,
                                                    "start": 21,
                                                    "end": 31
                                                },
                                                "flags": 16,
                                                "start": 11,
                                                "end": 31
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 31
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 31
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "{ { { async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 11, end: 15
✖ 'try' expected - start: 23, end: 29
✖ The parser expected to find a '}' to match the '{' token here - start: 31, end: 31

```

