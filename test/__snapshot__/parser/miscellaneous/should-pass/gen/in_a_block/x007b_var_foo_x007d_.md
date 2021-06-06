# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: { var foo; };
## Input

`````js
{ { var foo; }; }
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
                                    "kind": 155,
                                    "declareKeyword": null,
                                    "varKeyword": {
                                        "kind": 37757002,
                                        "flags": 80,
                                        "start": 3,
                                        "end": 7
                                    },
                                    "declarationList": {
                                        "kind": 156,
                                        "declarations": [
                                            {
                                                "kind": 157,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 11
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 7,
                                                "end": 11
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 7,
                                        "end": 11
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 12
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 14
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "start": 14,
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
    "source": "{ { var foo; }; }",
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
    var foo;
  }

}
```

### Diagnostics

```javascript
✔ No errors
```

