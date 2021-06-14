# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/sub-tree/gen/obj
> :: test: obj
> :: case: let
>          [] = y
## Options

`````js
{}
`````
## Input

`````js
a = { let
[] = y }
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
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 125,
                    "left": {
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
                        "end": 12
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "a = { let\n[] = y }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 9, end: 11
✖ ',' expected - start: 10, end: 11
✖ Identifier expected - start: 11, end: 12
✖ Property definition expected. Did you mean to use a ':'? - start: 12, end: 14
✖ ',' expected - start: 13, end: 14
✖ Declaration or statement expected - start: 16, end: 18

```

