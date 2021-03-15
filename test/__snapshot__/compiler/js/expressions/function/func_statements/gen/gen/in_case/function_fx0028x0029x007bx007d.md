# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/function/func_statements/gen/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/function/func_statements/gen/gen/in_case
> :: test: in case
> :: case: function f(){}
## Input

`````js
switch (x) {
  case foo:
    function f(){}
}
`````
## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch (x) {\n  case foo:\n    function f(){}\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                                    "kind": 264284,
                                    "name": {
                                        "kind": 131102,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 37,
                                        "end": 39
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 41
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
                                            "start": 42,
                                            "end": 42
                                        },
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "typeParameters": null,
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 256,
                                    "start": 24,
                                    "end": 43
                                }
                            ],
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 43
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 45
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 45
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 45
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

