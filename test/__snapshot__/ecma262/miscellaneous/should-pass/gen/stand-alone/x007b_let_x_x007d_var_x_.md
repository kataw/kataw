# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: { let x; } var x;
## Options

`````js
{}
`````
## Input

`````js
{ let x; } var x;
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
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 80,
                            "start": 1,
                            "end": 5
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
                                        "start": 5,
                                        "end": 7
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 5,
                                    "end": 7
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 7
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 10,
                "end": 14
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
                            "start": 14,
                            "end": 16
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 14,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 16
            },
            "flags": 16,
            "start": 10,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "{ let x; } var x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

{
  let x;
}
var x;

```

### Diagnostics

```javascript
✔ No errors
```

