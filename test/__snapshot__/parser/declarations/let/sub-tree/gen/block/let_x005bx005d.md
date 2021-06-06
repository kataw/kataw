# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/sub-tree/gen/block
> :: test: block
> :: case: let
>          []
## Input

`````js
{ let
[] }
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
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 7,
                                            "end": 7
                                        },
                                        "flags": 33,
                                        "start": 5,
                                        "end": 8
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 5,
                                    "end": 8
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 8
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
        }
    ],
    "isModule": false,
    "source": "{ let\n[] }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in destructuring declaration - start: 8, end: 10

```

