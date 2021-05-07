# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: async try while { catch }
## Input

`````js
{ async try while { catch }
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
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 7
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 0,
                            "start": 7,
                            "end": 11
                        },
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
                                                "start": 25,
                                                "end": 25
                                            },
                                            "flags": 16,
                                            "start": 25,
                                            "end": 25
                                        },
                                        "catchClause": null,
                                        "finallyKeyword": null,
                                        "finallyBlock": {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 27,
                                                "end": 27
                                            },
                                            "flags": 16,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 16,
                                        "start": 19,
                                        "end": 27
                                    }
                                ],
                                "flags": 16,
                                "start": 19,
                                "end": 27
                            },
                            "flags": 16,
                            "start": 17,
                            "end": 27
                        },
                        "flags": 16,
                        "start": 7,
                        "end": 27
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "{ async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 7, end: 11
✖ 'try' expected - start: 19, end: 25
✖ The parser expected to find a '}' to match the '{' token here - start: 27, end: 27

```

