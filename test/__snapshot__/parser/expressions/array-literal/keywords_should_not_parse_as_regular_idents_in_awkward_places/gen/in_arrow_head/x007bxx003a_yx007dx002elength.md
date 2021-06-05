# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\array-literal\keywords_should_not_parse_as_regular_idents_in_awkward_places\gen\in_arrow_head
> :: test: in arrow head
> :: case: {x: y}.length
## Input

`````js
([ {x: y}.length ]) => {}
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 19,
                    "end": 22
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 129,
                                    "member": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 4,
                                                        "end": 5
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 6,
                                                        "end": 8
                                                    },
                                                    "flags": 32,
                                                    "start": 4,
                                                    "end": 8
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 4,
                                            "end": 8
                                        },
                                        "flags": 48,
                                        "start": 2,
                                        "end": 9
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "length",
                                        "rawText": "length",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 16
                                    },
                                    "flags": 536870944,
                                    "start": 2,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 1
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 25
                },
                "flags": 34,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "([ {x: y}.length ]) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 19, end: 22

```

