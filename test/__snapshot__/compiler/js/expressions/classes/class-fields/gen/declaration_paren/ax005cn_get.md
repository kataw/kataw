# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/class-fields/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\class-fields\gen\declaration_paren
> :: test: declaration_paren
> :: case: a\n get
## Input

`````js
(class extends Base { a\n get });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class extends Base { a\\n get });",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 82483,
                        "name": null,
                        "typeParameters": null,
                        "classHeritage": {
                            "kind": 52,
                            "expression": {
                                "kind": 196712,
                                "text": "Base",
                                "rawText": "Base",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 19
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 19
                        },
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [
                                {
                                    "kind": 84,
                                    "key": {
                                        "kind": 196711,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "isAbstract": false,
                                    "isReadOnly": false,
                                    "isOptional": false,
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": null,
                                    "decorators": null,
                                    "accessModifier": null,
                                    "isStatic": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 524352,
                                    "start": 21,
                                    "end": 23
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 21,
                            "end": 23
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 23
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 23
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "n",
                    "rawText": "n",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 25
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 24,
                "end": 25
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "get",
                    "rawText": "get",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 29
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 25,
                "end": 29
            },
            {
                "kind": 6291526,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 32,
                "end": 33
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 33
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 31,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

