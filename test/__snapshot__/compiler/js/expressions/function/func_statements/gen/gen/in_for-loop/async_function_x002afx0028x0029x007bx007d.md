# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/function/func_statements/gen/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/function/func_statements/gen/gen/in_for-loop
> :: test: in for-loop
> :: case: async function *f(){}
## Input

`````js
for (;;) async function *f(){}
`````
## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "for (;;) async function *f(){}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099288,
                "initializer": null,
                "condition": null,
                "incrementor": null,
                "isVariableDeclarationList": false,
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 9963540,
                        "name": {
                            "kind": 131102,
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 25,
                            "end": 26
                        },
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 28
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 29
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 30
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8,
                        "start": 8,
                        "end": 30
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 30
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 30
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 30
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

