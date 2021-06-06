# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: for ( a ; ; ) { break }
## Input

`````js
{ for ( a ; ; ) { break } }
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
                        "kind": 165,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 7,
                            "end": 9
                        },
                        "condition": null,
                        "incrementor": null,
                        "statement": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 150,
                                        "breakKeyword": {
                                            "kind": 37757005,
                                            "flags": 80,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "label": null,
                                        "flags": 16,
                                        "start": 17,
                                        "end": 23
                                    }
                                ],
                                "flags": 16,
                                "start": 17,
                                "end": 23
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "{ for ( a ; ; ) { break } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

{
  for (a; ; )
    {}
}
```

### Diagnostics

```javascript
✔ No errors
```

