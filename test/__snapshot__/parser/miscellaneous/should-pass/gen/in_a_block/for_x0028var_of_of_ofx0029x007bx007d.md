# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: for (var of of of){}
## Input

`````js
{ for (var of of of){} }
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
                        "kind": 167,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "awaitKeyword": null,
                        "initializer": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "of",
                                        "rawText": "of",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 10,
                                    "end": 13
                                }
                            ],
                            "flags": 16,
                            "start": 10,
                            "end": 13
                        },
                        "ofKeyword": {
                            "kind": 16793717,
                            "flags": 64,
                            "start": 13,
                            "end": 16
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "of",
                            "rawText": "of",
                            "flags": 96,
                            "start": 16,
                            "end": 19
                        },
                        "statement": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 21,
                                "end": 21
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 22
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "{ for (var of of of){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

{
  for ( of of)
    {
    }
}
```

### Diagnostics

```javascript
✔ No errors
```

