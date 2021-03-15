# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/misc/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\misc\gen\class-expr
> :: test: class-expr
> :: case: static *static() {}
## Input

`````js
(class { static *static() {} });
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class { static *static() {} });",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 66099,
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [
                            {
                                "kind": 49,
                                "isStatic": true,
                                "isAbstract": false,
                                "isReadOnly": false,
                                "isOptional": false,
                                "method": {
                                    "kind": 17320034,
                                    "name": {
                                        "kind": 196711,
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 25
                                    },
                                    "isSetter": false,
                                    "isGetter": false,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 28
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 23,
                                    "end": 28
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 8,
                                "end": 28
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 8,
                        "end": 30
                    },
                    "decorators": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 30
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 32
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
    "end": 32
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

