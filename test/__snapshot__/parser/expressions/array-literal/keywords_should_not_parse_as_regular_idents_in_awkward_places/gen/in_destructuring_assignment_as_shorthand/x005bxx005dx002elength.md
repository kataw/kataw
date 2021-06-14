# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/gen/in_destructuring_assignment_as_shorthand
> :: test: in destructuring assignment as shorthand
> :: case: [x].length
## Options

`````js
{}
`````
## Input

`````js
[ [x].length ] = x
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
                                                "start": 3,
                                                "end": 4
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "flags": 32,
                                    "start": 1,
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
                                "start": 1,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 16,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "[ [x].length ] = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

[[x].length] = x;
```

### Diagnostics

```javascript
✔ No errors
```

