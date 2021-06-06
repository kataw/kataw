# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: { let x; } var x;
## Input

`````js
{ { let x; } var x; }
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
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 9
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 7,
                                                "end": 9
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "flags": 33554448,
                                    "start": 3,
                                    "end": 10
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 10
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 12
                    },
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 80,
                            "start": 12,
                            "end": 16
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 16,
                                    "end": 18
                                }
                            ],
                            "flags": 16,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 19
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "{ { let x; } var x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

{
  {
    let x;
  }
  var x;
}
```

### Diagnostics

```javascript
✔ No errors
```

