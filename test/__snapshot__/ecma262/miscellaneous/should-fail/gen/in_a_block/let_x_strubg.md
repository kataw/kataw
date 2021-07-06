# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: let x; strubg
## Options

`````js
{}
`````
## Input

`````js
{ let x; strubg }
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
                            "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "transformFlags": 128,
                                    "start": 5,
                                    "end": 7
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "flags": 33554448,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 8
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "strubg",
                            "rawText": "strubg",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 15
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 15
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "{ let x; strubg }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

{
  let x;
  strubg;
}
```

### Diagnostics

```javascript
✔ No errors
```

