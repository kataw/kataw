# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\array-literal\keywords_should_not_parse_as_regular_idents_in_awkward_places\gen\in_arrow_head
> :: test: in arrow head
> :: case: {}.length
## Input

`````js
([ {}.length ]) => {}
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
                    "start": 15,
                    "end": 18
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 129,
                                    "member": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 4,
                                            "end": 4
                                        },
                                        "flags": 48,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "length",
                                        "rawText": "length",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 12
                                    },
                                    "flags": 536870944,
                                    "start": 2,
                                    "end": 12
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 14
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
                        "start": 20,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 18,
                    "end": 21
                },
                "flags": 34,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "([ {}.length ]) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 15, end: 18

```

