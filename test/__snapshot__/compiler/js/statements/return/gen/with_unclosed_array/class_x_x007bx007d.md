# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\return\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: class x {}
## Input

`````js
return[ class x {}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "return[ class x {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097346,
            "expression": {
                "kind": 98822,
                "elementList": {
                    "kind": 65605,
                    "elements": [
                        {
                            "kind": 66099,
                            "name": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 13,
                                "end": 15
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 17,
                                "end": 18
                            },
                            "decorators": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 7,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 18
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 18
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 17,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

