# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\block
> :: test: block
> :: case: let
>          {} = y
## Input

`````js
{ let
{} = y }
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
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 7,
                                            "end": 7
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 8
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 12
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 12
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 12
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "{ let\n{} = y }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

{
  let {} = y;
}
```

### Diagnostics

```javascript
✔ No errors
```

