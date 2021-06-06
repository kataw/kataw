# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: { const enum = null; }
## Input

`````js
{ { const enum = null; } }
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
                                    "kind": 162,
                                    "lexicalKeyword": {
                                        "kind": 37757004,
                                        "flags": 80,
                                        "start": 3,
                                        "end": 9
                                    },
                                    "binding": {
                                        "kind": 151,
                                        "bindingList": [
                                            {
                                                "kind": 190,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "enum",
                                                    "rawText": "enum",
                                                    "flags": 96,
                                                    "start": 9,
                                                    "end": 14
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": {
                                                    "kind": 138477575,
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 21
                                                },
                                                "flags": 16,
                                                "start": 9,
                                                "end": 21
                                            }
                                        ],
                                        "flags": 16777232,
                                        "start": 9,
                                        "end": 21
                                    },
                                    "flags": 33554448,
                                    "start": 3,
                                    "end": 22
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 22
                        },
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
    "source": "{ { const enum = null; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

{
  {
    const enum = null;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

