# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/sub-tree/gen/spread
> :: test: spread
> :: case: let {x} = y
## Options

`````js
{}
`````
## Input

`````js
[...let {x} = y]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 1,
                                "end": 4
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "let",
                                "rawText": "let",
                                "flags": 96,
                                "start": 4,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 7
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 9,
                                    "end": 10
                                },
                                "flags": 48,
                                "start": 7,
                                "end": 11
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 11,
                                "end": 13
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 15
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
    "source": "[...let {x} = y]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 8, end: 9

```

