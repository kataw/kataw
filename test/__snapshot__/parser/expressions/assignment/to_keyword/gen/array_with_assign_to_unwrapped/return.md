# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/array_with_assign_to_unwrapped
> :: test: array with assign to unwrapped
> :: case: return
## Options

`````js
{}
`````
## Input

`````js
async x => return = 1
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
                    "start": 7,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 10,
                    "end": 10
                },
                "flags": 288,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "start": 10,
                "end": 17
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 17,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "flags": 32,
                "start": 17,
                "end": 21
            },
            "flags": 80,
            "start": 10,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "async x => return = 1",
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
✖ Identifier expected - start: 10, end: 17
✖ A return statement can only be used within a function_body - start: 10, end: 17
✖ Identifier expected - start: 17, end: 19
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 17, end: 19

```

