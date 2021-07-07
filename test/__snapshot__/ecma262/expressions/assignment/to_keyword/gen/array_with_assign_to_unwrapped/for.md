# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/array_with_assign_to_unwrapped
> :: test: array with assign to unwrapped
> :: case: for
## Options

`````js
{}
`````
## Input

`````js
async x => for = 1
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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 10
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 10,
                "end": 14
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 14,
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
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 18
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 10,
                "end": 18
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 18,
                "end": 18
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 10,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "async x => for = 1",
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
✖ Identifier expected - start: 10, end: 14
✖ Missing an opening parentheses - '( - start: 15, end: 16
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 14, end: 16
✖ Identifier expected - start: 18, end: 18

```

