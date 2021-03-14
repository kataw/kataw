# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/gen/declaration
> :: test: declaration
> :: case: fooo`bar`
## Input

`````js
class A extends fooo`bar` {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class A extends fooo`bar` {}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 66260,
                    "member": {
                        "kind": 196712,
                        "text": "fooo",
                        "rawText": "fooo",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 20
                    },
                    "typeArguments": null,
                    "template": {
                        "kind": 4260568,
                        "rawText": "bar",
                        "text": "bar",
                        "literal": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 20,
                        "end": 25
                    },
                    "optional": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 20,
                    "end": 25
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 25
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 27,
                "end": 28
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 28
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
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

