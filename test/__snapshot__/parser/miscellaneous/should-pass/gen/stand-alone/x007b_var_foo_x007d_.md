# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: { var foo; };
## Input

`````js
{ var foo; };
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
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 5,
                                    "end": 9
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 12,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "{ var foo; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

{
  var foo;
}

```

### Diagnostics

```javascript
✔ No errors
```

