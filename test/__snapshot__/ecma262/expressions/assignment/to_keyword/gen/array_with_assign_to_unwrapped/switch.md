# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/array_with_assign_to_unwrapped
> :: test: array with assign to unwrapped
> :: case: switch
## Options

`````js
{}
`````
## Input

`````js
async x => switch = 1
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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 7,
                    "end": 10
                },
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
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
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 10,
                "end": 17
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
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
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 21,
                "end": 21
            },
            "flags": 80,
            "start": 10,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "async x => switch = 1",
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
✖ Missing an opening parentheses - '( - start: 18, end: 19
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 17, end: 19
✖ Declaration or statement expected - start: 20, end: 21

```

