# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: { let enum; }
## Input

`````js
{ { let enum; } }
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
                                        "kind": 41951307,
                                        "flags": 80,
                                        "start": 3,
                                        "end": 7
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
                                                    "start": 7,
                                                    "end": 12
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 7,
                                                "end": 12
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 7,
                                        "end": 12
                                    },
                                    "flags": 33554448,
                                    "start": 3,
                                    "end": 13
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "{ { let enum; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

{
  {
    let enum;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

