# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE var inside delete in param default
> :: case: import
## Options

`````js
{}
`````
## Input

`````js
(x = delete ((import) = f)) => {}
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
                    "start": 27,
                    "end": 30
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 32,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 33
                },
                "flags": 34,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "(x = delete ((import) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 21, end: 23
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 21, end: 23
✖ Expected a `;` - start: 26, end: 27
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 13, end: 30
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 11, end: 30

```

