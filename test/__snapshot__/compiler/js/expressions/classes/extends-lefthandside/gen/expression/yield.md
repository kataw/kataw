# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\expression
> :: test: expression
> :: case: yield
## Input

`````js
(class B extends yield {})
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class B extends yield {})",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 66099,
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
                            "kind": 196712,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 22
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 22
                    },
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 24,
                        "end": 25
                    },
                    "decorators": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 25
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 26
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 26
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
    "end": 26
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

