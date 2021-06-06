# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: var foob\u{c481}r = 0;
## Input

`````js
{ var foob\u{c481}r = 0; }
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
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "foob쒁r",
                                        "rawText": "foob\\u{c481}r",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 19
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 23
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 23
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
    "source": "{ var foob\\u{c481}r = 0; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

{
  var foob쒁r = 0;
}
```

### Diagnostics

```javascript
✔ No errors
```

