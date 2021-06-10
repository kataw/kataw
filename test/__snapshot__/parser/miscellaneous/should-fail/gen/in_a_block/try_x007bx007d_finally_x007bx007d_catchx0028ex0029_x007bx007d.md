# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: try {} finally {} catch(e) {}
## Input

`````js
{ try {} finally {} catch(e) {} }
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
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 16,
                            "start": 5,
                            "end": 8
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "start": 8,
                            "end": 16
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 19
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 19
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 19,
                                "end": 25
                            },
                            "catchParameter": {
                                "kind": 134299649,
                                "text": "e",
                                "rawText": "e",
                                "flags": 96,
                                "start": 26,
                                "end": 27
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 16,
                                "start": 28,
                                "end": 31
                            },
                            "flags": 80,
                            "start": 19,
                            "end": 31
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 19,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "{ try {} finally {} catch(e) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 19, end: 25

```

