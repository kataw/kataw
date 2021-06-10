# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_keyword_as_a_var_name
> :: test: assign to keyword as a var name
> :: case: throw
## Input

`````js
throw = x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 158,
            "throwKeyword": {
                "kind": 37757026,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 5,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 7,
                    "end": 9
                },
                "flags": 32,
                "start": 5,
                "end": 9
            },
            "flags": 80,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "throw = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 5, end: 7
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 5, end: 7

```

