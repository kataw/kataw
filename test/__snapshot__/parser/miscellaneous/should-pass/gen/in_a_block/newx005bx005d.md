# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: new[]
## Input

`````js
{ new[] }
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
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "start": 1,
                                "end": 5
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 6,
                                    "end": 6
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 7
                            },
                            "argumentList": null,
                            "flags": 32,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 7
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "{ new[] }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

{
  new  []();
}
```

### Diagnostics

```javascript
✔ No errors
```

