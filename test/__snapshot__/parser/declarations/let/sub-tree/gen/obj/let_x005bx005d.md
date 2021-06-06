# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\obj
> :: test: obj
> :: case: let
>          []
## Input

`````js
a = { let
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
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "let",
                                "rawText": "let",
                                "flags": 96,
                                "start": 5,
                                "end": 9
                            },
                            {
                                "kind": 194,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 11,
                                    "end": 11
                                },
                                "flags": 32,
                                "start": 9,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 12
                    },
                    "flags": 48,
                    "start": 3,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "a = { let\n[] }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 9, end: 11
✖ ',' expected - start: 9, end: 11
✖ Identifier expected - start: 11, end: 12
✖ Property definition expected. Did you mean to use a ':'? - start: 12, end: 14

```

