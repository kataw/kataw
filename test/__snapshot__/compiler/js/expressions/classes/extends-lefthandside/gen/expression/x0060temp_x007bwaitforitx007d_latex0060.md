# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\expression
> :: test: expression
> :: case: `temp {waitforit} late`
## Input

`````js
(class B extends `temp {waitforit} late` {})
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class B extends `temp {waitforit} late` {})",
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
                        "name": {
                            "kind": 131102,
                            "text": "B",
                            "rawText": "B",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 6,
                            "end": 8
                        },
                        "typeParameters": null,
                        "classHeritage": {
                            "kind": 52,
                            "expression": {
                                "kind": 4260568,
                                "rawText": "temp {waitforit} late",
                                "text": "temp {waitforit} late",
                                "literal": true,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 16,
                                "end": 40
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 40
                        },
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 42,
                            "end": 43
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 43
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 44
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 44
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 44
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

