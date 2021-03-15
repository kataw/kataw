# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/for/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\for\gen\lhs_dynamic_property_assignment
> :: test: lhs dynamic property assignment
> :: case: false
## Input

`````js
for(o[0] = 0 in {});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for(o[0] = 0 in {});",
    "filename": "",
    "statements": [
        {
            "kind": 2099286,
            "initializer": {
                "kind": 65550,
                "left": {
                    "kind": 67174980,
                    "member": {
                        "kind": 196712,
                        "text": "o",
                        "rawText": "o",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 5
                    },
                    "expression": {
                        "kind": 4261540,
                        "text": 0,
                        "rawText": "0",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 8
                },
                "operator": "=",
                "right": {
                    "kind": 4261540,
                    "text": 0,
                    "rawText": "0",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 12
            },
            "expression": {
                "kind": 98984,
                "propertyList": {
                    "kind": 65722,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 17
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 18
            },
            "statement": {
                "kind": 6291526,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
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
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

