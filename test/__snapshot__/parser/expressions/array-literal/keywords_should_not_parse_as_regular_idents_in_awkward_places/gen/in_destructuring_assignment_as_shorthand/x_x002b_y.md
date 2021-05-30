# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\array-literal\keywords_should_not_parse_as_regular_idents_in_awkward_places\gen\in_destructuring_assignment_as_shorthand
> :: test: in destructuring assignment as shorthand
> :: case: x + y
## Input

`````js
[ x + y ] = x
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
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 3
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 3,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 7
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 7
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 9,
                    "end": 11
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "[ x + y ] = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 9, end: 11

```

