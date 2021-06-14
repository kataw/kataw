# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword var inside delete in param default
> :: case: continue
## Options

`````js
{}
`````
## Input

`````js
(x = delete ((continue) = f)) => {}
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
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 0,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 80,
                "start": 14,
                "end": 22
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 22,
                "end": 22
            },
            "flags": 16,
            "start": 14,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 25,
                "end": 27
            },
            "flags": 16,
            "start": 25,
            "end": 27
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 34,
                "end": 34
            },
            "flags": 16,
            "start": 32,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "(x = delete ((continue) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 22
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 14, end: 22
✖ Identifier expected - start: 22, end: 23
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 14, end: 23
✖ Declaration or statement expected - start: 23, end: 25
✖ Expected a `;` - start: 27, end: 28
✖ Declaration or statement expected - start: 28, end: 29
✖ Declaration or statement expected - start: 29, end: 32

```

