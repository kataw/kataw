# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: catch try {
## Input

`````js
{ { { catch try {
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
                                                "kind": 159,
                                                "tryKeyword": null,
                                                "block": {
                                                    "kind": 249,
                                                    "block": {
                                                        "kind": 124,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 11,
                                                        "end": 11
                                                    },
                                                    "flags": 16,
                                                    "start": 11,
                                                    "end": 11
                                                },
                                                "catchClause": null,
                                                "finallyKeyword": null,
                                                "finallyBlock": {
                                                    "kind": 249,
                                                    "block": {
                                                        "kind": 124,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 17,
                                                        "end": 17
                                                    },
                                                    "flags": 16,
                                                    "start": 15,
                                                    "end": 17
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 17
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 17
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 17
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "{ { { catch try {",
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
✖ 'try' expected - start: 5, end: 11
✖ The parser expected to find a '}' to match the '{' token here - start: 17, end: 17

```

