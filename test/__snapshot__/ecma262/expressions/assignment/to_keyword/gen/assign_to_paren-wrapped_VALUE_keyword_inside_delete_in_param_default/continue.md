# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE keyword inside delete in param default
> :: case: continue
## Options

`````js
{}
`````
## Input

`````js
function *f(x = delete ((continue) = f)) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 22
                            },
                            "operand": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "flags": 24,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 25
                                },
                                "flags": 22,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 25
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 15,
                            "end": 25
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 12,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 12,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        },
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 80,
                "transformFlags": 0,
                "start": 25,
                "end": 33
            },
            "label": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 36,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 36,
            "end": 38
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 42,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 40,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "function *f(x = delete ((continue) = f)) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 25, end: 33
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 25, end: 33
✖ Identifier expected - start: 33, end: 34
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 25, end: 34
✖ Declaration or statement expected - start: 34, end: 36
✖ Expected a `;` - start: 38, end: 39
✖ Declaration or statement expected - start: 39, end: 40

```

