# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_async_arrow_head
> :: test: in async arrow head
> :: case: /aaaaaaaaa
## Input

`````js
async ([ /aaaaaaaaa , x: /aaaaaaaaa ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async ([ /aaaaaaaaa , x: /aaaaaaaaa ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 81936,
                "typeParameters": null,
                "parameters": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554437,
                                "elementList": {
                                    "kind": 29,
                                    "elements": [
                                        {
                                            "kind": 4260544,
                                            "text": "/aaaaaaaaa , x: /aaaaaaaaa",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 35
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 37
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 7,
                            "end": 38
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 38
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 43
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 44
                },
                "flags": 1073741824,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 44
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 26,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 27,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 28,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 29,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 30,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 31,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 32,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 33,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 34,
            "length": 1
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

