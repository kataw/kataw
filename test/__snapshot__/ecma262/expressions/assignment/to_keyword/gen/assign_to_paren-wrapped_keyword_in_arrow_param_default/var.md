# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_arrow_param_default
> :: test: assign to paren-wrapped keyword in arrow param default
> :: case: var
## Options

`````js
{}
`````
## Input

`````js
(x = (var) = f) => {}
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
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 6,
                "end": 9
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 9,
                "end": 9
            },
            "flags": 16,
            "start": 6,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 12,
                "end": 14
            },
            "flags": 16,
            "start": 12,
            "end": 14
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 20,
                "end": 20
            },
            "flags": 16,
            "start": 18,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "(x = (var) = f) => {}",
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
✖ Identifier expected - start: 6, end: 9
✖ Expected a `;` - start: 9, end: 10
✖ Declaration or statement expected - start: 10, end: 12
✖ Expected a `;` - start: 14, end: 15
✖ Declaration or statement expected - start: 15, end: 18

```

