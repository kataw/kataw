# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: let [enum] = [];
## Input

`````js
{ let [enum] = []; }
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
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 202,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "enum",
                                                    "rawText": "enum",
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 11
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 7,
                                            "end": 11
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 12
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 17
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 17
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "{ let [enum] = []; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

{
  let [enum] = [];
}
```

### Diagnostics

```javascript
✔ No errors
```

