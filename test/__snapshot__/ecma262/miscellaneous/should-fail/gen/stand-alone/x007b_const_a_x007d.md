# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: { const a; }
## Options

`````js
{}
`````
## Input

`````js
{ const a; }
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
                            "kind": 37757004,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 7
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "transformFlags": 4224,
                                    "start": 7,
                                    "end": 9
                                }
                            ],
                            "flags": 16777232,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 9
                        },
                        "flags": 33554448,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 10
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "{ const a; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in const declaration - start: 9, end: 10

```

