# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: continue
## Options

`````js
{}
`````
## Input

`````js
(continue = x)
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
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 80,
                "start": 1,
                "end": 9
            },
            "label": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 9,
                "end": 9
            },
            "flags": 16,
            "start": 1,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 11,
                "end": 13
            },
            "flags": 16,
            "start": 11,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "(continue = x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 9
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 1, end: 9
✖ Identifier expected - start: 9, end: 11
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 1, end: 11
✖ Expected a `;` - start: 13, end: 14

```

