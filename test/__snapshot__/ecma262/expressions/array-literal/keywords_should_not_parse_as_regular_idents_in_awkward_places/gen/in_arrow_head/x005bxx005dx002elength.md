# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/gen/in_arrow_head
> :: test: in arrow head
> :: case: [x].length
## Options

`````js
{}
`````
## Input

`````js
([ [x].length ]) => {}
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
                "asyncKeyword": null,
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
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 4,
                                                    "end": 5
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 6
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "length",
                                        "rawText": "length",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 13
                                    },
                                    "flags": 536870944,
                                    "start": 2,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 15
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 16,
                    "end": 19
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 21,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 22
                },
                "flags": 34,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "([ [x].length ]) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 16, end: 19

```

