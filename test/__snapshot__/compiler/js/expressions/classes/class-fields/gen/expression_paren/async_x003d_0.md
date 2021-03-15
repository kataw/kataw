# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/class-fields/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\class-fields\gen\expression_paren
> :: test: expression_paren
> :: case: async = 0
## Input

`````js
(class { async = 0 });
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class { async = 0 });",
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
                                "kind": 16468,
                                "key": {
                                    "kind": 196711,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 14
                                },
                                "isInKeyword": false,
                                "expression": null,
                                "isAbstract": false,
                                "isReadOnly": false,
                                "isOptional": false,
                                "exclamation": false,
                                "type": null,
                                "initializer": {
                                    "kind": 4261540,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 18
                                },
                                "decorators": null,
                                "accessModifier": null,
                                "isStatic": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 524352,
                                "start": 8,
                                "end": 18
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 8,
                        "end": 20
                    },
                    "decorators": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 20
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 22
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

