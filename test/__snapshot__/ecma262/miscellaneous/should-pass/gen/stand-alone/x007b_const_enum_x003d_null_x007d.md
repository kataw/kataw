# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: { const enum = null; }
## Options

`````js
{}
`````
## Input

`````js
{ const enum = null; }
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
                                        "text": "enum",
                                        "rawText": "enum",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 12
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "start": 14,
                                        "end": 19
                                    },
                                    "flags": 16,
                                    "start": 7,
                                    "end": 19
                                }
                            ],
                            "flags": 16777232,
                            "start": 7,
                            "end": 19
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 20
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "{ const enum = null; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

{
  const enum = null;
}
```

### Diagnostics

```javascript
✔ No errors
```

