# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/gen/in_arrow_head
> :: test: in arrow head
> :: case: delete x.y
## Options

`````js
{}
`````
## Input

`````js
([ delete x.y ]) => {}
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
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 4259886,
                                            "flags": 96,
                                            "start": 2,
                                            "end": 9
                                        },
                                        "operand": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 11
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "flags": 96,
                                            "start": 9,
                                            "end": 13
                                        },
                                        "flags": 32,
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
                    "trailingComma": false,
                    "flags": 2,
                    "start": 1,
                    "end": 16
                },
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
    "source": "([ delete x.y ]) => {}",
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

