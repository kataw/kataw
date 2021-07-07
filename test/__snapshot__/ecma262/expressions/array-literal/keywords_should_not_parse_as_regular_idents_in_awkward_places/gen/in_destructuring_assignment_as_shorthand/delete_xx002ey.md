# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/gen/in_destructuring_assignment_as_shorthand
> :: test: in destructuring assignment as shorthand
> :: case: delete x.y
## Options

`````js
{}
`````
## Input

`````js
[ delete x.y ] = x
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 8
                                },
                                "operand": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 8,
                                    "end": 12
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 1,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 12
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 18
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "[ delete x.y ] = x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 14, end: 16

```

