# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: try {} catch (enum) {}
## Input

`````js
{ try {} catch (enum) {} }
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
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 8,
                                "end": 14
                            },
                            "catchParameter": {
                                "kind": 134299649,
                                "text": "enum",
                                "rawText": "enum",
                                "flags": 96,
                                "start": 16,
                                "end": 20
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 23,
                                    "end": 23
                                },
                                "flags": 16,
                                "start": 21,
                                "end": 24
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 24
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 1,
                        "end": 24
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "{ try {} catch (enum) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

{
  try {
  } catch (enum) {
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

