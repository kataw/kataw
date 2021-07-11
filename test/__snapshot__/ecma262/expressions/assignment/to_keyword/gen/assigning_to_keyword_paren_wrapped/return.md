# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: return
## Options

`````js
{}
`````
## Input

`````js
(return = x)
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
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 1,
                    "end": 1
                },
                "flags": 32,
                "start": 0,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "start": 1,
                "end": 7
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 7,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 9,
                    "end": 11
                },
                "flags": 32,
                "start": 7,
                "end": 11
            },
            "flags": 80,
            "start": 1,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "(return = x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 7
✖ A return statement can only be used within a function_body - start: 1, end: 7
✖ Identifier expected - start: 7, end: 9
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 7, end: 9
✖ Expected a `;` - start: 11, end: 12

```

