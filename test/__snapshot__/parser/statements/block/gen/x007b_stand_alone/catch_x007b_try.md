# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: catch { try
## Input

`````js
{ catch { try
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
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [
                                    {
                                        "kind": 159,
                                        "tryKeyword": {
                                            "kind": 37757027,
                                            "flags": 0,
                                            "start": 9,
                                            "end": 13
                                        },
                                        "block": {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 13,
                                                "end": 13
                                            },
                                            "flags": 16,
                                            "start": 13,
                                            "end": 13
                                        },
                                        "catchClause": null,
                                        "finallyKeyword": null,
                                        "finallyBlock": {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 13,
                                                "end": 13
                                            },
                                            "flags": 16,
                                            "start": 13,
                                            "end": 13
                                        },
                                        "flags": 16,
                                        "start": 9,
                                        "end": 13
                                    }
                                ],
                                "flags": 16,
                                "start": 9,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 7,
                            "end": 13
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "{ catch { try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

{
   {
    try {
    } try{
    }
  } {
  }
}
```

### Diagnostics

```javascript
✖ 'try' expected - start: 1, end: 7
✖ The parser expected to find a '}' to match the '{' token here - start: 13, end: 13

```

