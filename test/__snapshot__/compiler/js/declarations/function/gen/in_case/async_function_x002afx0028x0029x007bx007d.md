# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\gen\in_case
> :: test: in case
> :: case: async function *f(){}
## Input

`````js
switch (x) {
  case foo:
    async function *f(){}
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch (x) {\n  case foo:\n    async function *f(){}\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 196712,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 23
                        },
                        "statements": [
                            {
                                "kind": 1837075,
                                "name": {
                                    "kind": 131102,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 45,
                                    "end": 46
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 48
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
                                        "start": 49,
                                        "end": 49
                                    },
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 50
                                },
                                "typeParameters": null,
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 264,
                                "start": 24,
                                "end": 50
                            }
                        ],
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 50
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 52
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

