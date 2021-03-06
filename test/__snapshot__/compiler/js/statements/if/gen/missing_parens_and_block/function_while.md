# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\if\gen\missing_parens_and_block
> :: test: missing parens and block
> :: case: function while
## Input

`````js
if else function while
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "if else function while",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097257,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 2
                },
                "consequent": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 2
                },
                "alternate": {
                    "kind": 264284,
                    "name": {
                        "kind": 131102,
                        "text": "",
                        "rawText": "",
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 16,
                        "end": 16
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 16
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
                            "start": 22,
                            "end": 22
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 22
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 256,
                    "start": 7,
                    "end": 22
                },
                "isWebCompat": true,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 22
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'while' is a reserved word that cannot be used here",
            "start": 17,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

