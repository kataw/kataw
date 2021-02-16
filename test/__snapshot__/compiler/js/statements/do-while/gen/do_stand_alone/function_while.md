# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_stand_alone
> :: test: do stand alone
> :: case: function while
## Input

`````js
do function while
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do function while",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097218,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 17,
                    "end": 17
                },
                "statement": {
                    "kind": 264284,
                    "name": {
                        "kind": 131102,
                        "text": "",
                        "rawText": "",
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 1025,
                        "parent": null,
                        "emitNode": null,
                        "start": 11,
                        "end": 11
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 11,
                        "end": 11
                    },
                    "type": null,
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 17,
                            "end": 17
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 11,
                        "end": 17
                    },
                    "typeParameters": null,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 256,
                    "parent": null,
                    "emitNode": null,
                    "start": 2,
                    "end": 17
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 17
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 17
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'while' is a reserved word that cannot be used here",
            "start": 12,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

