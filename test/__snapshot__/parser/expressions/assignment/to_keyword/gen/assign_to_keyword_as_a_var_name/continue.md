# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_keyword_as_a_var_name
> :: test: assign to keyword as a var name
> :: case: continue
## Input

`````js
continue = x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 80,
                "start": 0,
                "end": 8
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 8,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 10,
                "end": 12
            },
            "flags": 16,
            "start": 10,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "continue = x",
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
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 0, end: 8
✖ Identifier expected - start: 8, end: 10
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 0, end: 10

```

