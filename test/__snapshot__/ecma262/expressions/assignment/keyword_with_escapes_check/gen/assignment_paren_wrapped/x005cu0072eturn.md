# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/gen/assignment_paren_wrapped
> :: test: assignment paren wrapped
> :: case: \u0072eturn
## Options

`````js
{}
`````
## Input

`````js
(\u0072eturn = x);
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
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 1
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 1
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 16464,
                "transformFlags": 0,
                "start": 1,
                "end": 12
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 12,
                "end": 16
            },
            "flags": 16464,
            "transformFlags": 256,
            "start": 1,
            "end": 16
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 17,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "(\\u0072eturn = x);",
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
✖ Identifier expected - start: 1, end: 12
✖ A return statement can only be used within a function_body - start: 1, end: 12
✖ Keywords cannot contain escape characters - start: 1, end: 12
✖ Identifier expected - start: 12, end: 14
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 12, end: 14
✖ ')' is not allowed here. Did you mean ';'? - start: 16, end: 17

```

