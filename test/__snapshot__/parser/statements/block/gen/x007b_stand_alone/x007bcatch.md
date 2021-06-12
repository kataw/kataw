# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: {catch
## Options

`````js
{}
`````
## Input

`````js
{ {catch
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 159,
                                    "tryKeyword": null,
                                    "block": {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [],
                                            "flags": 16,
                                            "start": 3,
                                            "end": 3
                                        },
                                        "flags": 16,
                                        "start": 3,
                                        "end": 3
                                    },
                                    "catchClause": {
                                        "kind": 173,
                                        "catchKeyword": {
                                            "kind": 4202575,
                                            "flags": 80,
                                            "start": 3,
                                            "end": 8
                                        },
                                        "catchParameter": null,
                                        "block": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 8,
                                                "end": 8
                                            },
                                            "flags": 16,
                                            "start": 8,
                                            "end": 8
                                        },
                                        "flags": 80,
                                        "start": 3,
                                        "end": 8
                                    },
                                    "finallyKeyword": null,
                                    "finallyBlock": null,
                                    "flags": 16,
                                    "start": 3,
                                    "end": 8
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 8
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "{ {catch",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 3, end: 8
✖ The parser expected to find a '}' to match the '{' token here - start: 8, end: 8

```

