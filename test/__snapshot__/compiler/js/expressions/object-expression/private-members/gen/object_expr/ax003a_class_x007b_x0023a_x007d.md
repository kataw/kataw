# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/object-expression/private-members/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\object-expression\private-members\gen\object_expr
> :: test: object_expr
> :: case: a: class { #a }
## Input

`````js
({ a: class { #a } })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "({ a: class { #a } })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65721,
                                "left": {
                                    "kind": 196711,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 4
                                },
                                "right": {
                                    "kind": 66099,
                                    "name": null,
                                    "typeParameters": null,
                                    "classHeritage": null,
                                    "implementClauses": null,
                                    "members": {
                                        "kind": 50,
                                        "elements": [
                                            {
                                                "kind": 16468,
                                                "key": {
                                                    "kind": 131252,
                                                    "text": "#a",
                                                    "rawText": "#a",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 524288,
                                                    "start": 13,
                                                    "end": 16
                                                },
                                                "isInKeyword": false,
                                                "expression": null,
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
                                                "symbol": null,
                                                "transformFlags": 524352,
                                                "start": 13,
                                                "end": 16
                                            }
                                        ],
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "decorators": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 5,
                                    "end": 18
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 18
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 20
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

