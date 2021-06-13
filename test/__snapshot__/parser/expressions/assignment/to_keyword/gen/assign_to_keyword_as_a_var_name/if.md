# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_keyword_as_a_var_name
> :: test: assign to keyword as a var name
> :: case: if
## Options

`````js
{}
`````
## Input

`````js
if = x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 2,
                    "end": 2
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 2,
                    "end": 4
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 4,
                    "end": 6
                },
                "flags": 32,
                "start": 2,
                "end": 6
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 6,
                    "end": 6
                },
                "flags": 16,
                "start": 6,
                "end": 6
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "if = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 3, end: 4
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 2, end: 4
✖ Declaration or statement expected - start: 5, end: 6

```

